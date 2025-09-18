import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import { ProjectsProvider } from './context/ProjectsContext.jsx';
import Layout from './Layout.jsx';
import Home from './routes/Home.jsx';
import Projects from './routes/Projects.jsx';
import Contact from './routes/Contact.jsx';
import NotFound from './routes/NotFound.jsx';
import ScrollToTop from './layouts/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <ProjectsProvider>
    <BrowserRouter>
      <ScrollToTop />

      <StrictMode>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Route>

          <Route element={<Layout withFooter={false} />}>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </ProjectsProvider>
);
