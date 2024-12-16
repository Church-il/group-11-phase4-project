# 🌍⚡ RenewableConnect Kenya

## 📋 Table of Contents

| Section | Quick Links |
|:--------|:------------|
| 🌱 Overview | [About Us](#about-us) • [Our Mission](#about-us) |
| 💻 Technical Details | [Tech Stack](#-tech-stack) • [Database Models](#-database-models--relationships) |
| 🚀 Platform Features | [What We Offer](#-what-we-offer) • [Frontend Pages](#-frontend-pages) |
| 🔍 Key Highlights | [Best Practices](#-best-practices) • [UI/UX Design](#-uiux-design) |
| 📈 Future Vision | [Roadmap](#-future-roadmap) • [Conclusion](#-conclusion) |

## About Us

Welcome to **RenewableConnect Kenya** – a platform that's here to help Kenyan communities connect with renewable energy solutions. As Kenya leads the way in Africa's green revolution, we believe it's time for residents, organizations, and stakeholders in areas like **Kiambu**, **Nakuru**, **Nairobi**, **Kisumu**, and more, to come together and make a real difference.

Our mission is simple: to make **Kenya** a global leader in renewable energy. With the help of this platform, communities can find, contribute to, and benefit from clean energy projects. Whether you're living in a rural area or a bustling city, RenewableConnect is here to empower you, connect you with the resources you need, and make sure everyone has a chance to be a part of Kenya's green transformation.

## 🖥️ Tech Stack

We built this platform using some of the best tools out there:

- **Frontend:** React, React Router, Formik
- **Backend:** Flask, SQLAlchemy
- **Database:** PostgreSQL
- **API Communication:** Fetch API for client-server interactions

## 🌱 What We Offer

### 1. Personalized User Profiles

When you sign up, you can create a profile that's all about YOU. From managing your renewable energy projects to tracking your contributions, your profile makes it easy to stay connected to your community—whether you're in **Kiambu**, **Nakuru**, **Nairobi**, **Kisumu**, or elsewhere.

### 2. Submit & Track Projects

Got an idea for a renewable energy project? You can submit it here! Whether it's a solar installation for rural areas or a wind farm for the city, we've made it simple to share your project. Plus, you can track its progress in real time and see how it's making a difference.

### 3. Local Resource Directory

We've put together a resource guide just for Kenya. You can find everything from funding opportunities to local suppliers and government incentives. And because it's tailored to Kenya, you can search by region and project type to get exactly what you need.

### 4. Community Collaboration

Renewable energy is all about teamwork. Whether you're from **Kiambu**, **Nakuru**, **Nairobi**, or **Kisumu**, this platform is a space where you can connect with others, share ideas, and work together on projects that make your community stronger and more sustainable.

### 5. Interactive Data & Visualizations

We believe in the power of information. That's why we've added interactive charts and maps to track renewable energy progress across Kenya. You'll be able to see how many people in your area are benefiting from renewable energy projects and watch the impact grow.

## 🛠️ Database Models & Relationships

### 1. User Model

- **Attributes:** 
  - name
  - email
  - password_hash
  - profile_picture
  - role
  - location
- **What it does:** A user can create many projects. These projects are tied to the user's location (like **Kiambu** or **Nairobi**), ensuring everything stays local and relevant.

### 2. Project Model

- **Attributes:**
  - title
  - description
  - status
  - date_created
  - user_id
  - location
- **What it does:** Every project has its own details, and it's linked to both a user and the resources it needs to succeed in a specific region.

### 3. Resource Model

- **Attributes:**
  - name
  - description
  - type
  - link
  - region
- **What it does:** Resources like funding, supplies, and government programs support the projects. These are region-specific, whether it's for **Nairobi** or **Kisumu**, ensuring users always have access to what's needed for their local area.

## 🔗 Relationships

### One-to-Many Relationships

- **User to Project:** A user can create multiple projects, each tailored to their region.
- **Project to Resources:** Projects use many resources, whether it's money, materials, or expertise.

### Many-to-Many Relationship

- **Project-Resource:** A project can rely on multiple resources, and a resource can be used in many projects. We even track how much each resource is contributing to the project's success.

## 🎨 Frontend Pages

### 1. Homepage (/)

The homepage is a live dashboard where users can see ongoing projects in their community and across Kenya. Think of it as your go-to place to stay informed and inspired.

### 2. Submit a Project (/submit-project)

Got a project idea? The submission form is simple and user-friendly, guiding you through creating a project with region-specific options.

### 3. Project Detail Page (/project/:id)

Want to dive deeper? Click on any project to see its status, resources, and progress. This page keeps you up-to-date with everything happening in your area.

### 4. Resource Directory (/resources)

A comprehensive directory where you can explore available resources like funding, suppliers, and government incentives. Every resource is listed with your region in mind, making it easier to find what's most relevant.

### 5. User Profile (/profile)

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
