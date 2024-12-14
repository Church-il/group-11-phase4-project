from .auth_routes import auth_bp
from .user_routes import user_bp
from .project_routes import project_bp
from .membership_routes import membership_bp

def register_routes(app):
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(user_bp, url_prefix='/users')
    app.register_blueprint(project_bp, url_prefix='/projects')
    app.register_blueprint(membership_bp, url_prefix='/memberships')
