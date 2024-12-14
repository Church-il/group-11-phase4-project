from app import db

class Membership(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('project.id'), nullable=False)
    role = db.Column(db.String(50), nullable=False)
    user = db.relationship('User', back_populates='memberships')
    project = db.relationship('Project', back_populates='memberships')
