import React, { useState, useEffect } from 'react';
import { fetchProjects } from '../api/apiService';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        setLoading(true);
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  }, []);

  const handleRetry = () => {
    setProjects([]);  // Reset projects state
    setError(null);  // Reset error state
    setLoading(true); // Set loading to true to show loading spinner
    const getProjects = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
        setError(null);
      } catch (err) {
        setError('Failed to load projects');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    getProjects();
  };

  if (loading) 
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
        <p className="ml-4 text-blue-500 text-lg font-semibold">Loading...</p>
      </main>
    );

  if (error) 
    return (
      <main className="flex flex-col items-center justify-center h-screen">
        <p className="text-red-500 text-xl font-semibold">Error: {error}</p>
        <button 
          onClick={handleRetry} 
          className="mt-4 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all"
        >
          Retry
        </button>
      </main>
    );

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Projects</h1>
        {projects.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Projects;
