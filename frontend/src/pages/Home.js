import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="container mx-auto px-4 py-16 flex-grow flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-float">
            <h1 className="text-5xl font-bold font-display text-brand-primary">
              RenewableConnect Kenya
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering communities through sustainable energy solutions and innovative resources.
            </p>
            <div className="flex space-x-4">
              <Button variant="primary" as={Link} to="/projects">
                Explore Projects
              </Button>
              <Button variant="secondary" as={Link} to="/resources">
                View Resources
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;