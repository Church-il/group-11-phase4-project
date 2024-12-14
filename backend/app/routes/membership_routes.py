from flask import Blueprint, request, jsonify
from models import Membership, db
from schemas.membership_schema import MembershipSchema

membership_bp = Blueprint("memberships", __name__)
membership_schema = MembershipSchema()
memberships_schema = MembershipSchema(many=True)

@membership_bp.route("/", methods=["GET"])
def get_memberships():
    memberships = Membership.query.all()
    return memberships_schema.jsonify(memberships)

@membership_bp.route("/", methods=["POST"])
def create_membership():
    data = request.get_json()
    role = data.get("role")
    if not role:
        return jsonify({"error": "Role is required"}), 400
    new_membership = Membership(role=role)
    db.session.add(new_membership)
    db.session.commit()
    return membership_schema.jsonify(new_membership), 201
