# RenewableConnect Backend Annah Wanjiru tasks

## Features

### 1. Full CRUD for Projects, Create and Read for Users and Resources
- **Projects**:
  - Full CRUD operations implemented in `routes.py`.
  - Endpoints:
    - `POST /api/projects` - Create a project.
    - `GET /api/projects` - Retrieve all projects.
    - `GET /api/projects/<id>` - Retrieve a specific project.
    - `PUT /api/projects/<id>` - Update a project.
    - `DELETE /api/projects/<id>` - Delete a project.
- **Users**:
  - Read functionality implemented via the `/users` endpoint (`GET` method).
- **Resources**:
  - Read functionality implemented via the `/resources` endpoint (`GET` method).

### 2. Build RESTful API Endpoints Supporting Relationships
- **Relationships**:
  - One-to-Many: `User` → `Project`
  - One-to-Many: `Project` → `Resource`
- Relationships are defined in `models.py` and utilized in endpoints to enable seamless data access and updates.

### 3. Ensure Consistent API Responses
- **Marshmallow Schemas** (`schemas.py`):
  - Serialize and deserialize models for API responses.
  - Ensure a consistent response format across endpoints.
- **Error Handling**:
  - `404` responses for missing resources using `get_or_404`.
  - Status codes like `201` for creation and `204` for successful deletion.

### 4. Provide CRUD Endpoints
- Comprehensive CRUD endpoints for `Projects` implemented in `routes.py`.
- Read-only endpoints for `Users` and `Resources` as specified.

### Additional Features
- **Testing**:
  - Unit tests in `tests/test_endpoints.py` ensure endpoint functionality.
  - Tests cover project creation and retrieval.
- **Folder Structure**:
  - Modular structure separates models, routes, schemas, and configuration for maintainability and scalability.

## Folder Structure
```
backend/
|-- app/
|   |-- __init__.py          # Flask application setup and extensions.
|   |-- models.py            # Database models for User, Project, and Resource.
|   |-- schemas.py           # Serialization/deserialization schemas.
|   |-- routes.py            # API endpoints implementation.
|   |-- config.py            # Application configuration.
|-- tests/
|   |-- test_endpoints.py    # Unit tests for API endpoints.
|-- main.py                  # Entry point for running the application.
```

## Steps to Run and Test

### 1. Install Dependencies
```bash
pip install flask flask-sqlalchemy flask-marshmallow marshmallow marshmallow-sqlalchemy
```

### 2. Set Up Database
Run the application once to create the `renewableconnect.db` file and initialize database tables:
```bash
python main.py
```

### 3. Run the Application
Start the Flask server:
```bash
python main.py
```
The application will be available at `http://127.0.0.1:5000`.

### 4. Test the API Endpoints
Use a tool like Postman or cURL to test the following endpoints:

- **Projects**:
  - `POST /api/projects` - Create a project.
  - `GET /api/projects` - Retrieve all projects.
  - `GET /api/projects/<id>` - Retrieve a specific project.
  - `PUT /api/projects/<id>` - Update a project.
  - `DELETE /api/projects/<id>` - Delete a project.
- **Users**:
  - `GET /api/users` - Retrieve all users.
- **Resources**:
  - `GET /api/resources` - Retrieve all resources.

### 5. Run Unit Tests
Run the unit tests to verify endpoint functionality:
```bash
python -m unittest discover -s tests
```


