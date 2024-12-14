from flask import Blueprint, request, jsonify
from models import Project, db
from schemas.project_schema import ProjectSchema

project_bp = Blueprint("projects", __name__)
project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)

@project_bp.route("/", methods=["GET"])
def get_projects():
    projects = Project.query.all()
    return projects_schema.jsonify(projects)

@project_bp.route("/", methods=["POST"])
def create_project():
    data = request.get_json()
    title = data.get("title")
    description = data.get("description")
    if not title or not description:
        return jsonify({"error": "Title and description are required"}), 400
    new_project = Project(title=title, description=description)
    db.session.add(new_project)
    db.session.commit()
    return project_schema.jsonify(new_project), 201
