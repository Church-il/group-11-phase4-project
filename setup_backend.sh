#!/bin/bash

# Project name
PROJECT_NAME="backend"

# Folder and file structure
echo "Setting up $PROJECT_NAME structure..."

mkdir -p $PROJECT_NAME
cd $PROJECT_NAME

# Creating directories
mkdir -p app/models
mkdir -p app/schemas
mkdir -p app/routes
mkdir -p migrations
mkdir -p instance

# Creating main files
touch app/__init__.py
touch app/models/__init__.py
touch app/models/user.py
touch app/models/project.py
touch app/models/resource.py
touch app/models/membership.py

touch app/schemas/__init__.py
touch app/schemas/user_schema.py
touch app/schemas/project_schema.py
touch app/schemas/resource_schema.py
touch app/schemas/membership_schema.py

touch app/routes/__init__.py
touch app/routes/auth_routes.py
touch app/routes/user_routes.py
touch app/routes/project_routes.py
touch app/routes/membership_routes.py

touch config.py
touch run.py
touch requirements.txt

# Add virtual environment
echo "Setting up virtual environment..."
python3 -m venv venv

echo "Activating virtual environment and installing dependencies..."
source venv/bin/activate
pip install flask flask_sqlalchemy flask_marshmallow flask_bcrypt flask_cors itsdangerous

# Freeze dependencies into requirements.txt
pip freeze > requirements.txt

# Adding content to config.py
echo "Adding basic content to config.py..."
cat <<EOL > config.py
import os

class Config:
    SECRET_KEY = 'supersecretkey'
    SQLALCHEMY_DATABASE_URI = 'sqlite:///backend.db'
    SQLALCHEMY_TRACK_MODIFICATIONS = False
EOL

# Adding run.py
echo "Adding app runner script..."
cat <<EOL > run.py
from app import app, db

if __name__ == '__main__':
    db.create_all()
    app.run(debug=True)
EOL

# Done
echo "Project $PROJECT_NAME setup completed!"
