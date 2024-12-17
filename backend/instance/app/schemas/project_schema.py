from app import ma

class ProjectSchema(ma.Schema):
    id = ma.Integer(dump_only=True)
    title = ma.String(required=True)
    description = ma.String()
    user_id = ma.Integer(required=True)
    resources = ma.Nested('ResourceSchema', many=True, exclude=['project'])

project_schema = ProjectSchema()
projects_schema = ProjectSchema(many=True)
