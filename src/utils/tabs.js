import webApplicationsIcon from '../assets/images/web-applications-icon.svg';
import cmsDevelopmentIcon from '../assets/images/cms-development-icon.svg';
import performanceOptimizationIcon from '../assets/images/performance-optimization-icon.svg';
import integrationsIcon from '../assets/images/integrations-icon.svg';
import landingPagesIcon from '../assets/images/landing-pages-icon.svg';
import maintenanceSupportIcon from '../assets/images/maintenance-support-icon.svg';

import dataCleaningIcon from '../assets/images/data-cleaning-icon.svg';
import exploratoryDataAnalysisIcon from '../assets/images/exploratory-data-analysis-icon.svg';
import dataVisualizationIcon from '../assets/images/data-visualization-icon.svg';
import statisticalAnalysisIcon from '../assets/images/statistical-analysis-icon.svg';
import insightGenerationIcon from '../assets/images/insight-generation-icon.svg';
import dataQueryingIcon from '../assets/images/data-querying-icon.svg';

import pythonLogo from '../assets/images/logos/python-logo.svg';
import jsLogo from '../assets/images/logos/javascript-logo.svg';
import tsLogo from '../assets/images/logos/typescript-logo.svg';
import numpyLogo from '../assets/images/logos/numpy-logo.svg';
import pandasLogo from '../assets/images/logos/pandas-logo.svg';
import matplotlibLogo from '../assets/images/logos/matplotlib-logo.svg';
import seabornLogo from '../assets/images/logos/seaborn-logo.svg';
import sqlLogo from '../assets/images/logos/sql-logo.svg';
import phpLogo from '../assets/images/logos/php-logo.svg';
import reactLogo from '../assets/images/logos/react-logo.svg';
import nextjsLogo from '../assets/images/logos/nextjs-logo.svg';
import tailwindLogo from '../assets/images/logos/tailwind-logo.svg';
import nodejsLogo from '../assets/images/logos/nodejs-logo.svg';
import expressjsLogo from '../assets/images/logos/expressjs-logo.svg';
import mongodbLogo from '../assets/images/logos/mongodb-logo.svg';
import gitLogo from '../assets/images/logos/git-logo.svg';
import githubLogo from '../assets/images/logos/github-logo.svg';
import wordpressLogo from '../assets/images/logos/wordpress-logo.svg';

export const tabs = {
  'Data Analysis': {
    technologies: [
      {
        title: 'Programming',
        languages: [
          {
            name: 'Python',
            icon: pythonLogo,
          },
          {
            name: 'JavaScript',
            icon: jsLogo,
          },
        ],
      },
      {
        title: 'Analysis',
        languages: [
          {
            name: 'NumPy',
            icon: numpyLogo,
          },
          {
            name: 'Pandas',
            icon: pandasLogo,
          },
        ],
      },
      {
        title: 'Visualization',
        languages: [
          {
            name: 'Matplotlib',
            icon: matplotlibLogo,
          },
          {
            name: 'Seaborn',
            icon: seabornLogo,
          },
        ],
      },
      {
        title: 'Databases',
        languages: [
          {
            name: 'SQL',
            icon: sqlLogo,
          },
        ],
      },
    ],
    features: [
      {
        icon: dataCleaningIcon,
        title: 'Data Cleaning',
        text: 'Prepare datasets by handling missing values, duplicates, inconsistent formats, and irrelevant columns.',
      },
      {
        icon: exploratoryDataAnalysisIcon,
        title: 'Exploratory Data Analysis',
        text: 'Explore datasets to identify patterns, trends, relationships, and anomalies.',
      },
      {
        icon: dataVisualizationIcon,
        title: 'Data Visualization',
        text: 'Create charts that communicate findings and make complex data easier to understand.',
      },
      {
        icon: statisticalAnalysisIcon,
        title: 'Statistical Analysis',
        text: 'Summarize data and investigate distributions, relationships, and meaningful differences.',
      },
      {
        icon: insightGenerationIcon,
        title: 'Insight Generation',
        text: 'Translate analytical results into evidence-based conclusions and practical recommendations.',
      },
      {
        icon: dataQueryingIcon,
        title: 'Data Querying',
        text: 'Retrieve, filter, join, and aggregate data from relational databases to answer analytical questions.',
      },
    ],
  },
  'Software Development': {
    technologies: [
      {
        title: 'Languages',
        languages: [
          {
            name: 'JavaScript',
            icon: jsLogo,
          },
          {
            name: 'TypeScript',
            icon: tsLogo,
          },
          {
            name: 'PHP',
            icon: phpLogo,
          },
        ],
      },
      {
        title: 'Frontend',
        languages: [
          {
            name: 'React',
            icon: reactLogo,
          },
          {
            name: 'NextJS',
            icon: nextjsLogo,
          },
          {
            name: 'Tailwind',
            icon: tailwindLogo,
          },
        ],
      },
      {
        title: 'Backend & Databases',
        languages: [
          {
            name: 'NodeJS',
            icon: nodejsLogo,
          },
          {
            name: 'ExpressJS',
            icon: expressjsLogo,
          },
          {
            name: 'MongoDB',
            icon: mongodbLogo,
          },
        ],
      },
      {
        title: 'Tools',
        languages: [
          {
            name: 'Git',
            icon: gitLogo,
          },
          {
            name: 'GitHub',
            icon: githubLogo,
          },
          {
            name: 'WordPress',
            icon: wordpressLogo,
          },
        ],
      },
    ],
    features: [
      {
        icon: webApplicationsIcon,
        title: 'Web Applications',
        text: 'Scalable and interactive apps that bring complex ideas to life online.',
      },
      {
        icon: cmsDevelopmentIcon,
        title: 'CMS Development',
        text: 'WordPress or headless CMS setups with full customization.',
      },
      {
        icon: performanceOptimizationIcon,
        title: 'Performance Optimization',
        text: 'Faster load times and smoother experiences across all devices.',
      },
      {
        icon: integrationsIcon,
        title: 'Integrations',
        text: 'APIs, third-party tools, and automation setups.',
      },
      {
        icon: landingPagesIcon,
        title: 'Landing Pages',
        text: 'High-converting pages for campaigns, events, or products.',
      },
      {
        icon: maintenanceSupportIcon,
        title: 'Maintenance & Support',
        text: 'Regular updates, backups, and bug fixes',
      },
    ],
  },
};
