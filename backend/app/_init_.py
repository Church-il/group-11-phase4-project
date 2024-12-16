# Initialize Flask extensions
db = SQLAlchemy()
ma = Marshmallow()

def create_app():
    app = Flask(__name__)
    app.config.from_object('app.config.Config')
    db.init_app(app)
    ma.init_app(app)

    with app.app_context():
        from . import routes
        db.create_all()

    return app