from flask import Blueprint, request, jsonify
from app.models.user import User
from app import db, bcrypt

user_bp = Blueprint("user", __name__)

@user_bp.route("/register", methods=["POST"], strict_slashes=False)
def register_user():
    data = request.get_json()
    
    name = data.get("name")
    email = data.get("email")
    password = data.get("password")

    if not name or not email or not password:
        return jsonify({"message": "Missing required fields"}), 400

    # Check if the user already exists
    existing_user = User.query.filter_by(email=email).first()
    if existing_user:
        return jsonify({"message": "User with this email already exists"}), 400

    # Create and save the new user
    new_user = User(name=name, email=email)
    new_user.set_password(password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "User registered successfully"}), 201
