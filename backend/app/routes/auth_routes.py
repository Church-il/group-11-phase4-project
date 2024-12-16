from flask import Blueprint, request, jsonify
from app.models.user import User
from app import db

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"], strict_slashes=False)
def register():
    data = request.get_json()
    if User.query.filter_by(email=data["email"]).first():
        return jsonify({"message": "Email already registered"}), 400
    user = User(name=data["name"], email=data["email"])
    user.set_password(data["password"])
    db.session.add(user)
    db.session.commit()
    return jsonify({"message": "User registered successfully"}), 201

@auth_bp.route("/login", methods=["POST"], strict_slashes=False)
def login():
    data = request.get_json()
    user = User.query.filter_by(email=data["email"]).first()
    if user and user.check_password(data["password"]):
        token = user.get_token()
        return jsonify({"token": token, "user": {"id": user.id, "name": user.name, "email": user.email}})
    return jsonify({"message": "Invalid credentials"}), 401

@auth_bp.route("/validate-token", methods=["POST"], strict_slashes=False)
def validate_token():
    token = request.headers.get('Authorization').split(" ")[1]
    if not token:
        return jsonify({"message": "Token missing"}), 400
    user = User.verify_token(token)
    if not user:
        return jsonify({"valid": False}), 401
    return jsonify({"valid": True, "user": {"id": user.id, "name": user.name, "email": user.email}})
