from app import ma

class UserSchema(ma.Schema):
    id = ma.Integer(dump_only=True)
    name = ma.String(required=True)
    email = ma.String(required=True)
    projects = ma.Nested('ProjectSchema', many=True, only=['id', 'title'])
    memberships = ma.Nested('MembershipSchema', many=True, exclude=['user'])

user_schema = UserSchema()
users_schema = UserSchema(many=True)
