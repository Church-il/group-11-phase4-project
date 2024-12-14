from app import ma

class MembershipSchema(ma.Schema):
    id = ma.Integer(dump_only=True)
    user_id = ma.Integer(required=True)
    project_id = ma.Integer(required=True)

membership_schema = MembershipSchema()
memberships_schema = MembershipSchema(many=True)
