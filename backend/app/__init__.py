from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt
from flask_cors import CORS  

# Initialize extensions
db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()

def create_app():
    app = Flask(__name__)

    # Configuration
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///project.db'
    app.config['SECRET_KEY'] = 'my_secret_key'

    # Initialize
    db.init_app(app)
    ma.init_app(app)
    bcrypt.init_app(app)
    CORS(app)  
    
    #Blueprints
    from app.routes.auth_routes import auth_bp
    from app.routes.user_routes import user_bp
    from app.routes.project_routes import project_bp
    from app.routes.membership_routes import membership_bp

    app.register_blueprint(auth_bp, url_prefix='/api/auth')
    app.register_blueprint(user_bp, url_prefix='/api/users')
    app.register_blueprint(project_bp, url_prefix='/api/projects')
    app.register_blueprint(membership_bp, url_prefix='/api/memberships')

    return app