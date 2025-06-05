# TakeDown 2.0 - Event Registeration System

### Complete Full-Stack Technical Documentation

![TakeDown 2.0](https://img.shields.io/badge/TakeDown-2.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-13+-black.svg)
![Django](https://img.shields.io/badge/Django-5.2+-green.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)

A comprehensive event registration system designed for _Universal Engineering College's_ tech festival. This full-stack application provides seamless event discovery, user registration, and administrative management capabilities for college-level technical events.

---

## Project Overview

### Problem Statement

College tech festivals require efficient registration of multiple events, user registrations, and administrative oversight. Traditional manual processes are time-consuming and error-prone, leading to poor user experience and administrative inefficiencies.

### Solution Approach

TakeDown 2.0 is a modern, full-stack web application that digitizes the entire event registration process. It provides:

- _Students_: Easy event discovery and registration
- _Administrators_: Comprehensive event and user management
- _Organizers_: Real-time registration tracking and analytics

### Project Scope

- _Target Users_: 500+ college students, 50+ faculty members
- _Events Supported_: 10+ technical workshops and competitions

---

## Project Repository

https://github.com/jsfl-24/Event-Management

---

## Our Team

- ASWIN TD
- EM ATHUL
- JASFAL KA
- PRANAV B PEENIKAL
- PRANAV SHAJI

## System Architecture

### High-Level Architecture

┌─────────────────┐ ┌─────────────────┐ ┌─────────────────┐
│ Frontend │ │ Backend API │ │ Database │
│ (Next.js) │◄──►│ (Django) │◄──►│ (SQLite) │
│ Port: 3000 │ │ Port: 8000 │ │ File-based │
└─────────────────┘ └─────────────────┘ └─────────────────┘

### Component Architecture

Frontend Components:
├── Navigation (Authentication Status)
├── Hero Section (Call-to-Actions)
├── Events Section (Dynamic Event Display)
├── About Section (Event Information)
├── Sponsors Section (Partner Display)
└── Footer (Contact & Links)

Backend Services:
├── User Management (Registration/Authentication)
├── Event registration (CRUD Operations)
├── Registration System (Event Sign-ups)
└── Admin Interface (Content Management)

---

## Technology Stack

### Frontend Technologies

| Technology     | Version | Purpose                          |
| -------------- | ------- | -------------------------------- |
| _Next.js_      | 13+     | React framework with App Router  |
| _TypeScript_   | 5.0+    | Type-safe JavaScript development |
| _Tailwind CSS_ | 3.0+    | Utility-first CSS framework      |
| _React_        | 18      | Component-based UI library       |

### Backend Technologies

| Technology              | Version | Purpose                         |
| ----------------------- | ------- | ------------------------------- |
| _Django_                | 5.2+    | High-level Python web framework |
| _Django REST Framework_ | 3.14+   | API development toolkit         |
| _SQLite_                | 3+      | Lightweight database            |
| _Python_                | 3.8+    | Programming language            |

### Development Tools

| Tool       | Purpose         |
| ---------- | --------------- |
| _Git_      | Version control |
| _ESLint_   | Code linting    |
| _Prettier_ | Code formatting |
| _Postman_  | API testing     |

---

## Features & Functionality

### Core Features

#### 1. User Management System

- _Registration_: Phone-based user authentication
- _Login/Logout_: Secure session management
- _Profile Management_: User details and preferences
- _Role-based Access_: Student vs Admin permissions

#### 2. Event Registration

- _Event Discovery_: Browse events by day and category
- _Real-time Updates_: Live participant counts
- _Event Filtering_: Technical vs Non-technical events
- _Detailed Information_: Comprehensive event descriptions

#### 3. Registration System

- _Event Registration_: One-click event sign-ups
- _Payment Integration_: Fee collection system
- _Registration Tracking_: User registration history
- _Capacity Management_: Automatic spot tracking

#### 4. Administrative Interface

- _Django Admin_: Full administrative control
- _User Management_: View and manage user accounts
- _Event Creation_: Add/edit/delete events
- _Registration Monitoring_: Track event registrations

### User Experience Features

- _Responsive Design_: Mobile-first approach
- _Smooth Navigation_: Fixed header with scroll effects
- _Interactive UI_: Hover effects and animations
- _Loading States_: Skeleton screens and indicators
- _Error Handling_: Graceful error messages

---

## Project Structure

### Complete Project Structure

Event-Management/
├── event-management/ # Frontend Application
│ ├── src/
│ │ ├── app/ # Next.js App Router
│ │ │ ├── globals.css # Global styles
│ │ │ ├── layout.tsx # Root layout
│ │ │ ├── page.tsx # Homepage
│ │ │ ├── login/ # Authentication pages
│ │ │ ├── signup/
│ │ │ ├── profile/ # User dashboard
│ │ │ └── register/
│ │ │ └── [id]/ # Dynamic registration
│ │ ├── components/ # Reusable components
│ │ │ ├── Navigation.tsx # Header navigation
│ │ │ ├── HeroSection.tsx # Landing section
│ │ │ ├── EventsSection.tsx # Events display
│ │ │ ├── AboutSection.tsx # Information section
│ │ │ ├── SponsorsSection.tsx # Partners display
│ │ │ └── Footer.tsx # Footer component
│ │ └── lib/
│ │ └── api.ts # API communication
│ ├── public/ # Static assets
│ ├── package.json # Dependencies
│ ├── tailwind.config.js # Styling configuration
│ ├── tsconfig.json # TypeScript config
│ └── README.md # Frontend documentation
│
└── event-management-backend/ # Backend Application
├── manage.py # Django management
├── db.sqlite3 # Database file
├── event_management/ # Main project
│ ├── settings.py # Django settings
│ ├── urls.py # URL configuration
│ ├── wsgi.py # WSGI application
│ └── asgi.py # ASGI application
├── users/ # User management app
│ ├── models.py # User model
│ ├── serializers.py # API serializers
│ ├── views.py # API views
│ ├── admin.py # Admin configuration
│ └── urls.py # User URLs
├── events/ # Event management app
│ ├── models.py # Event model
│ ├── serializers.py # API serializers
│ ├── views.py # API views
│ ├── admin.py # Admin configuration
│ └── urls.py # Event URLs
├── registrations/ # Registration app
│ ├── models.py # Registration model
│ ├── serializers.py # API serializers
│ ├── views.py # API views
│ ├── admin.py # Admin configuration
│ └── urls.py # Registration URLs
└── README.md # Backend documentation

---

## Installation & Setup

### Prerequisites

- _Node.js_: 18+ for frontend development
- _Python_: 3.8+ for backend development
- _Git_: Version control
- _Code Editor_: VS Code recommended

### Frontend Setup

1. _Clone Repository_
   bash
   git clone https://github.com/your-username/takedown-2.0.git
   cd takedown-2.0/event-management

2. _Install Dependencies_
   bash
   npm install

3. _Environment Configuration_
   bash

   # Create .env.local

   NEXT_PUBLIC_API_URL=http://localhost:8000/api

4. _Start Development Server_
   bash
   npm run dev
   # Access: http://localhost:3000

### Backend Setup

1. _Navigate to Backend_
   bash
   cd ../event-management-backend

2. _Create Virtual Environment_
   bash
   python -m venv venv

   # Windows

   venv\Scripts\activate

   # macOS/Linux

   source venv/bin/activate

3. _Install Dependencies_
   bash
   pip install django djangorestframework django-cors-headers

4. _Database Setup_
   bash
   python manage.py makemigrations
   python manage.py migrate
   python manage.py createsuperuser

5. _Start Server_
   bash
   python manage.py runserver
   # Access: http://localhost:8000
   # Admin: http://localhost:8000/admin/

---

## 📡 API Documentation

### Authentication Endpoints

http
POST /api/users/register/ # User registration
POST /api/users/login/ # User login
GET /api/users/profile/ # User profile
POST /api/users/logout/ # User logout

### Event Registration Endpoints

http
GET /api/events/ # List all events
GET /api/events/{id}/ # Get specific event
POST /api/events/ # Create event (admin)
PUT /api/events/{id}/ # Update event (admin)
DELETE /api/events/{id}/ # Delete event (admin)

### Registration Endpoints

http
POST /api/registrations/register/{event_id}/ # Register for event
GET /api/registrations/my-registrations/ # User registrations

### Sample API Requests

#### User Registration

json
POST /api/users/register/
{
"username": "john_doe",
"first_name": "John",
"last_name": "Doe",
"email": "john@uec.edu",
"phone": "9876543210",
"password": "securepass123",
"age": 20,
"college": "Universal Engineering College",
"year": "Second Year",
"branch": "Computer Science"
}

#### Event Registration

json
POST /api/registrations/register/1/
Headers: Authorization: Token abc123...
{
"payment_status": "completed",
"payment_id": "pay_xyz123",
"amount_paid": 299.00
}

---

## Database Design

### Entity Relationship Diagram

Users (1) ←→ (M) Registrations (M) ←→ (1) Events

### Database Models

#### User Model

python
class User(AbstractUser):
phone = CharField(max_length=10, unique=True) # Primary login
age = IntegerField(null=True, blank=True) # User age
college = CharField(max_length=200, blank=True) # Institution
year = CharField(max_length=50, blank=True) # Academic year
branch = CharField(max_length=100, blank=True) # Department
created_at = DateTimeField(auto_now_add=True) # Registration time

#### Event Model

python
class Event(models.Model):
title = CharField(max_length=200) # Event name
description = TextField() # Event details
date = DateField() # Event date
time = CharField(max_length=100) # Event time
fee = CharField(max_length=50) # Display fee
fee_amount = DecimalField(max_digits=10, decimal_places=2)
event_type = CharField(max_length=20) # technical/non-technical
day = IntegerField() # Day 1 or 2
is_key_event = BooleanField(default=False) # Featured event
max_participants = IntegerField() # Capacity

#### Registration Model

python
class Registration(models.Model):
user = ForeignKey(User, on_delete=CASCADE) # Registered user
event = ForeignKey(Event, on_delete=CASCADE) # Target event
payment_status = CharField(max_length=20) # Payment state
payment_id = CharField(max_length=100) # Payment reference
amount_paid = DecimalField(max_digits=10, decimal_places=2)
registered_at = DateTimeField(auto_now_add=True) # Registration time

---

## Frontend Implementation

### Technology Choices

#### Next.js 13+ with App Router

- _Server-Side Rendering_: Improved SEO and performance
- _File-based Routing_: Intuitive route management
- _API Routes_: Built-in backend capabilities
- _TypeScript Integration_: Type safety throughout

#### Component Architecture

typescript
// Example: Event Card Component
interface EventCardProps {
id: number;
title: string;
description: string;
fee: string;
spots_left: number;
is_key_event: boolean;
}

const EventCard: React.FC<EventCardProps> = ({
id, title, description, fee, spots_left, is_key_event
}) => {
return (
<div className={`bg-zinc-800 p-6 rounded-lg ${
      is_key_event ? 'ring-2 ring-white' : ''
    }`}>
<h3 className="text-xl font-bold text-white mb-2">{title}</h3>
<p className="text-zinc-300 mb-4">{description}</p>
<div className="flex justify-between items-center">
<span className="text-white font-semibold">{fee}</span>
<span className="text-zinc-400">{spots_left} spots left</span>
</div>
</div>
);
};

### State Management

- _Local Storage_: User authentication state
- _React useState_: Component-level state
- _useEffect_: Side effect management
- _Custom Hooks_: Reusable state logic

### Styling Approach

- _Tailwind CSS_: Utility-first styling
- _Responsive Design_: Mobile-first approach
- _Custom Components_: Consistent design system
- _Dark Theme_: Modern aesthetic

---

## Backend Implementation

### Django Architecture

#### MVT Pattern Implementation

python

# Model (events/models.py)

class Event(models.Model):
title = models.CharField(max_length=200)
description = models.TextField() # ... other fields

# View (events/views.py)

class EventViewSet(viewsets.ModelViewSet):
queryset = Event.objects.all()
serializer_class = EventSerializer
permission_classes = [IsAuthenticated]

# Template (API Response)

# Handled by DRF serializers

#### API Design Principles

- _RESTful URLs_: Logical resource naming
- _HTTP Methods_: Proper verb usage
- _Status Codes_: Meaningful response codes
- _JSON Format_: Consistent data structure

### Django Apps Structure

#### Users App

python

# Custom user model extending AbstractUser

class User(AbstractUser):
phone = models.CharField(max_length=10, unique=True) # Additional fields for college information

    USERNAME_FIELD = 'phone'  # Login with phone

#### Events App

python

# Event registration with full CRUD operations

class EventViewSet(viewsets.ModelViewSet):
def get_queryset(self): # Filter events by day or type if requested
return Event.objects.all()

#### Registrations App

python

# Handle event registrations with payment tracking

class RegistrationView(APIView):
def post(self, request, event_id): # Register user for specific event # Handle payment processing # Update participant counts

---

### Authentication Flow

1. User submits login credentials
2. Backend validates and returns token
3. Frontend stores token securely
4. Token included in subsequent API requests
5. Backend validates token for protected routes

---

## Testing & Quality Assurance

### Frontend Testing Strategy

- _Component Testing_: Individual component validation
- _Integration Testing_: Component interaction testing
- _E2E Testing_: Full user flow validation
- _Browser Testing_: Cross-browser compatibility

### Backend Testing Strategy

- _Unit Tests_: Individual function testing
- _API Tests_: Endpoint functionality testing
- _Integration Tests_: Database interaction testing
- _Performance Tests_: Load and stress testing

### Code Quality Tools

bash

# Frontend

npm run lint # ESLint code analysis
npm run format # Prettier code formatting
npm run type-check # TypeScript validation

# Backend

python manage.py test # Django test suite
flake8 . # Python code analysis
black . # Python code formatting

---

### Development Environment

bash

# Frontend: http://localhost:3000

# Backend: http://localhost:8000

# Database: SQLite file-based

### Production Considerations

#### Frontend Deployment

- _Platform_: Vercel or Netlify
- _Environment Variables_: Production API URLs
- _Build Optimization_: Static site generation
- _CDN Integration_: Global content delivery

#### Backend Deployment

- _Platform_: Heroku, DigitalOcean, or AWS
- _Database_: PostgreSQL or MySQL
- _Static Files_: S3 or similar storage
- _Environment Variables_: Secure credential management

#### Infrastructure Setup

yaml

# docker-compose.yml example

version: '3.8'
services:
frontend:
build: ./event-management
ports: - "3000:3000"
backend:
build: ./event-management-backend
ports: - "8000:8000"
database:
image: postgres:13
environment:
POSTGRES_DB: takedown_db

---

### Planned Features

- [ ] _Payment Integration_: Razorpay/Stripe integration
- [ ] _Email Notifications_: Automated confirmation emails
- [ ] _Mobile App_: React Native mobile application
- [ ] _Analytics Dashboard_: Event performance metrics

- [ ] _Calendar Integration_: Google Calendar sync
- [ ] _Social Features_: Event sharing and comments
- [ ] _Multi-tenancy_: Support for multiple colleges
- [ ] _Advanced Reporting_: Data visualization and exports

- [ ] _Progressive Web App_: Offline functionality
- [ ] _Real-time Updates_: WebSocket integration
- [ ] _Microservices_: Service-oriented architecture
- [ ] _API Gateway_: Centralized API management

---

## Learning Outcomes

### Technical Skills Acquired

- _Full-Stack Development_: End-to-end application development
- _API Design_: RESTful API architecture and implementation
- _Database Design_: Relational database modeling
- _Authentication Systems_: Secure user management
- _Responsive Design_: Mobile-first web development

### Tools & Technologies Mastered

- _Frontend_: Next.js, TypeScript, Tailwind CSS
- _Backend_: Django, Django REST Framework
- _Database_: SQLite, SQL optimization
- _Development_: Git, VS Code, Postman

### Project Management Skills

- _Version Control_: Git workflow and collaboration
- _Documentation_: Technical and user documentation
- _Testing_: Comprehensive testing strategies
- _Deployment_: Production deployment considerations

---

## References & Resources

### Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Django Documentation](https://docs.djangoproject.com/)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### External Libraries

- [React Icons](https://react-icons.github.io/react-icons/)
- [Django CORS Headers](https://github.com/adamchainz/django-cors-headers)
- [TypeScript](https://www.typescriptlang.org/)

### Design Resources

- [Tailwind UI Components](https://tailwindui.com/)
- [Heroicons](https://heroicons.com/)
- [Google Fonts](https://fonts.google.com/)

---

### Copyright Notice

© 2025 TakeDown 2.0 - Universal Engineering College. All rights reserved.

---

## Conclusion

TakeDown 2.0 represents a comprehensive solution to event registration challenges faced by educational institutions. Through the integration of modern web technologies and thoughtful user experience design, the project successfully demonstrates:

The project showcases the practical application of computer science principles in solving real-world problems, preparing students for professional software development careers while contributing meaningfully to their academic community.

---

_Built with ❤ by the Computer Science Department, Universal Engineering College_
