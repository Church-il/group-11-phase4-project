from marshmallow import Schema, fields

class MembershipSchema(Schema):
    id = fields.Int(dump_only=True)
    role = fields.Str(required=True)
