const API_BASE_URL = 'http://localhost:5000';

const getHeaders = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

export const fetchProjects = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/projects`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return []; // Return an empty array to prevent app from breaking
  }
};

export const fetchResources = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/resources`, {
      method: 'GET',
      headers: getHeaders()
    });

    if (!response.ok) {
      throw new Error('Failed to fetch resources');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching resources:', error);
    return []; // Return an empty array to prevent app from breaking
  }
};