# backend/tests/test_endpoints.py
# ===============================
import unittest
from app import create_app, db
from app.models import User, Project, Resource

class TestEndpoints(unittest.TestCase):
    def setUp(self):
        self.app = create_app()
        self.app.config['TESTING'] = True
        self.app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///:memory:'
        self.client = self.app.test_client()

        with self.app.app_context():
            db.create_all()

    def tearDown(self):
        with self.app.app_context():
            db.session.remove()
            db.drop_all()

    def test_create_project(self):
        response = self.client.post('/api/projects', json={
            'title': 'Test Project',
            'description': 'A test project description',
            'user_id': 1
        })
        self.assertEqual(response.status_code, 201)

if __name__ == '__main__':
    unittest.main()
