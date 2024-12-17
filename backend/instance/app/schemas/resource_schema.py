from app import ma

class ResourceSchema(ma.Schema):
    id = ma.Integer(dump_only=True)
    name = ma.String(required=True)
    description = ma.String()
    project_id = ma.Integer(required=True)

resource_schema = ResourceSchema()
resources_schema = ResourceSchema(many=True)
