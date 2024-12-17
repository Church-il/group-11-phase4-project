from flask import Blueprint, jsonify
from app.models.project import Project

project_bp = Blueprint("project", __name__)

@project_bp.route("/", methods=["GET"], strict_slashes=False)
def get_all_projects():
    projects = Project.query.all()
    return jsonify([{"id": p.id, "title": p.title, "description": p.description} for p in projects])
