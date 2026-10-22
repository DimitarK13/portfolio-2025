import { createContext, useContext, useEffect, useState } from 'react';

const ProjectsContext = createContext();

export const useProjects = () => {
  const context = useContext(ProjectsContext);

  if (!context) {
    throw new Error('useProjects must be used within a ProjectsProvider');
  }

  return context;
};

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        'https://api.cosmicjs.com/v3/buckets/personal-portfolio-production/objects?pretty=true&query=%7B%22type%22:%22projects%22%7D&limit=10&read_key=0ciO1wztHQkfxVXbFkyFeJXKk2tkCPwBqcNvGVpNi9YiRf48Al&depth=1&props=slug,title,metadata,id,thumbnail',
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch projects: ${response.status}`);
      }

      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching projects:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const refetchProjects = () => {
    fetchProjects();
  };

  const value = {
    projects,
    loading,
    error,
    refetchProjects,
  };

  return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};
