import React from 'react';

function ResourceCard({ resource }) {
  return (
    <div className="resource-card">
      <h3>{resource.name}</h3>
      <p>{resource.details}</p>
    </div>
  );
}

export default ResourceCard;