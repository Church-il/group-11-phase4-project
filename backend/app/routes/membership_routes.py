from flask import Blueprint, jsonify
from app.models.membership import Membership

membership_bp = Blueprint("membership", __name__)

@membership_bp.route("/", methods=["GET"])
def get_all_memberships():
    memberships = Membership.query.all()
    return jsonify([{"id": m.id, "role": m.role, "user_id": m.user_id, "project_id": m.project_id} for m in memberships])
