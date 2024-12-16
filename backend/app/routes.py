# backend/app/routes.py
# ======================
from flask import Blueprint, request, jsonify
from . import db
from .models import User, Project, Resource
from .schemas import UserSchema, ProjectSchema, ResourceSchema

bp = Blueprint('api', __name__)

user_schema = UserSchema()
project_schema = ProjectSchema()
resource_schema = ResourceSchema()

# CRUD for Projects
@bp.route('/projects', methods=['GET', 'POST'])
def manage_projects():
    if request.method == 'POST':
        data = request.get_json()
        project = Project(**data)
        db.session.add(project)
        db.session.commit()
        return project_schema.jsonify(project), 201

    projects = Project.query.all()
    return jsonify(project_schema.dump(projects, many=True))

@bp.route('/projects/<int:id>', methods=['GET', 'PUT', 'DELETE'])
def project_details(id):
    project = Project.query.get_or_404(id)

    if request.method == 'GET':
        return project_schema.jsonify(project)

    if request.method == 'PUT':
        data = request.get_json()
        for key, value in data.items():
            setattr(project, key, value)
        db.session.commit()
        return project_schema.jsonify(project)

    db.session.delete(project)
    db.session.commit()
    return '', 204

# Read for Users
@bp.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify(user_schema.dump(users, many=True))

# Read for Resources
@bp.route('/resources', methods=['GET'])
def get_resources():
    resources = Resource.query.all()
    return jsonify(resource_schema.dump(resources, many=True))

# Register the Blueprint
from . import create_app
app = create_app()
app.register_blueprint(bp, url_prefix='/api')
