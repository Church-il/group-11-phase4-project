# RenewableConnect Backend Annah Wanjiru tasks

## Features

### 1. Full CRUD for Projects, Create and Read for Users and Resources
- **Projects**:
  - Full CRUD operations implemented in `routes.py`.
  - Endpoints:
    - `POST /api/projects` - Create a project.
    - `GET /api/projects` - Retrieve all projects.
    - `GET /api/projects/<id>` - Retrieve a specific project.
    - `PUT /api/projects/<id>` - Update a project.
    - `DELETE /api/projects/<id>` - Delete a project.
- **Users**:
  - Read functionality implemented via the `/users` endpoint (`GET` method).
- **Resources**:
  - Read functionality implemented via the `/resources` endpoint (`GET` method).

### 2. Build RESTful API Endpoints Supporting Relationships
- **Relationships**:
  - One-to-Many: `User` → `Project`
  - One-to-Many: `Project` → `Resource`
- Relationships are defined in `models.py` and utilized in endpoints to enable seamless data access and updates.

### 3. Ensure Consistent API Responses
- **Marshmallow Schemas** (`schemas.py`):
  - Serialize and deserialize models for API responses.
  - Ensure a consistent response format across endpoints.
- **Error Handling**:
  - `404` responses for missing resources using `get_or_404`.
  - Status codes like `201` for creation and `204` for successful deletion.

### 5. Interactive Data & Visualizations

We believe in the power of information. That's why we've added interactive charts and maps to track renewable energy progress across Kenya. You'll be able to see how many people in your area are benefiting from renewable energy projects and watch the impact grow.

## 🛠️ Database Models & Relationships

### 1. User Model

- **Attributes:** 
  - `name`
  - `email`
  - `password_hash`
  - `profile_picture`
  - `role`
  - `location`
- **What it does:** A user can create projects. These projects are tied to the user's location (like **Kiambu** or **Nairobi**), ensuring everything stays local and relevant.

### 2. Project Model

- **Attributes:**
  - `title`
  - `description`
  - `status`
  - `date_created`
  - `user_id`
  - `location`
- **What it does:** Every project has its own details, and it's linked to both a user and the resources it needs to succeed in a specific region.

### 3. Resource Model

- **Attributes:**
  - `name`
  - `description`
  - `type`
  - `link`
  - `region`
- **What it does:** Resources like funding, supplies, and government programs support the projects. These are region-specific, whether it's for **Nairobi** or **Kisumu**, ensuring users always have access to what's needed for their local area.

## 🔗 Relationships

### One-to-Many Relationships

- **User to Project:** A user can create multiple projects, each tailored to their region.
- **Project to Resources:** Projects use many resources, whether it's money, materials, or expertise.

### Many-to-Many Relationship

- **Project-Resource:** A project can rely on multiple resources, and a resource can be used in many projects. We even track how much each resource is contributing to the project's success.

## 🎨 Frontend Pages

### 1. Homepage (`/`)

The homepage is a live dashboard where users can see ongoing projects in their community and across Kenya. Think of it as your go-to place to stay informed and inspired.

### 2. Submit a Project (`/submit-project`)

Got a project idea? The submission form is simple and user-friendly, guiding you through creating a project with region-specific options.

### 3. Project Detail Page (`/project/:id`)

Want to dive deeper? Click on any project to see its status, resources, and progress. This page keeps you up-to-date with everything happening in your area.

### 4. Resource Directory (`/resources`)

A comprehensive directory where you can explore available resources like funding, suppliers, and government incentives. Every resource is listed with your region in mind, making it easier to find what's most relevant.

### 5. User Profile (`/profile`)

Your profile is where you track everything you've done and contributed. From your active projects to your impact on local communities, everything you need is in one place.

## ✅ Best Practices

### Form Validation

We use **Formik** to ensure that every form is properly validated, making sure that all data entered is accurate and complete.

### Secure Authentication

**JWT** keeps your data safe, allowing you to securely log in and access your projects without worry.

### Data Integrity

We've set up strict validation to make sure data is always accurate and region-specific. This ensures we're all working with the best information available.

## ✨ UI/UX Design

### Regional Focus

- Filter projects and resources by location (e.g., **Kiambu**, **Nakuru**, or **Kisumu**) to keep things relevant and personal.

### Mobile-First Approach

Whether you're in a rural area or a city, we've made sure the platform is fully responsive and mobile-friendly.

### Interactive Elements

Hover effects, interactive data, and engaging features make your experience smooth and fun, while still being informative.

## 🚀 Future Roadmap

### Local Partnerships

We're working to partner with local NGOs, government organizations, and businesses to expand the resources available to users in **Kiambu** and **Nakuru**.

### Loyalty Rewards

Imagine earning rewards for your contributions! Badges, points, and certificates are on the horizon to encourage more engagement.

### Real-Time Updates

Soon, you'll get real-time updates on projects, donations, and events, keeping you in the loop 24/7.

## 🌍💚 Conclusion

**RenewableConnect Kenya** is more than just a platform; it's a movement. A movement toward a cleaner, greener future. Whether you're in **Kiambu**, **Nakuru**, **Nairobi**, or **Kisumu**, this platform connects you with the people, resources, and opportunities needed to bring renewable energy projects to life in your community. Together, we can build a sustainable future for Kenya, one project at a time.

---

## 📂 GitHub Repository

Want to dive deeper? Explore the full project on GitHub:  
[RenewableConnect Kenya GitHub](#)  

The repo has all the code, setup instructions, and ways you can contribute. Let's build a better future together! 🌿