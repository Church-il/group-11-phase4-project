from app import db

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    resources = db.relationship('Resource', backref='project', lazy=True)
    memberships = db.relationship('Membership', back_populates='project')
