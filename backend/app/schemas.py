# backend/app/schemas.py
# ======================
from . import ma
from .models import User, Project, Resource

class UserSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = User

class ProjectSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Project

class ResourceSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Resource
