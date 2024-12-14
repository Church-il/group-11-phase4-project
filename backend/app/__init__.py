from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask_migrate import Migrate

db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config.from_object("config.Config")

    db.init_app(app)
    ma.init_app(app)
    bcrypt.init_app(app)
    migrate.init_app(app, db)

    from app.routes import auth_bp, user_bp, project_bp, membership_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    app.register_blueprint(user_bp, url_prefix='/users')
    app.register_blueprint(project_bp, url_prefix='/projects')
    app.register_blueprint(membership_bp, url_prefix='/memberships')

    return app
