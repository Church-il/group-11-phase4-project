from marshmallow import Schema, fields

class ProjectSchema(Schema):
    id = fields.Int(dump_only=True)
    title = fields.Str(required=True)
    description = fields.Str(required=True)
