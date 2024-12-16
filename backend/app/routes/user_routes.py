from flask_jwt_extended import jwt_required, get_jwt_identity
from flask import Blueprint, jsonify
from app.models.user import User

user_bp = Blueprint("user", __name__)

@user_bp.route("/", methods=["GET"])
@jwt_required()
def get_all_users():
    users = User.query.all()
    return jsonify([{"id": user.id, "name": user.name, "email": user.email} for user in users])

@user_bp.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    current_user = get_jwt_identity()
    user = User.query.get(current_user["id"])
    return jsonify({"id": user.id, "name": user.name, "email": user.email})
