# TakeDown 2.0 - Event Management System Backend

![Django](https://img.shields.io/badge/Django-5.2+-green.svg)
![Django REST Framework](https://img.shields.io/badge/DRF-3.14+-blue.svg)
![Python](https://img.shields.io/badge/Python-3.8+-blue.svg)
![SQLite](https://img.shields.io/badge/SQLite-3+-lightgrey.svg)

A robust Django REST API backend for the TakeDown 2.0 event management system. Provides secure user authentication, event management, and registration functionality for college tech festivals.

## 🚀 Features

### Core Functionality

- **User Authentication**: Custom user model with phone-based authentication
- **Event Management**: Complete CRUD operations for events
- **Registration System**: Event registration with payment tracking
- **Admin Interface**: Django admin for content management
- **Token Authentication**: Secure API access with DRF tokens
- **Data Validation**: Comprehensive input validation and error handling

### API Capabilities

- **RESTful Endpoints**: Well-structured API following REST principles
- **Pagination**: Efficient data pagination for large datasets
- **Filtering & Search**: Advanced filtering options for events
- **CORS Support**: Cross-origin resource sharing for frontend integration
- **Documentation**: Auto-generated API documentation

## 🛠️ Tech Stack

### Backend Framework

- **Django 5.2+**: High-level Python web framework
- **Django REST Framework**: Powerful toolkit for building Web APIs
- **SQLite**: Lightweight database for development
- **Python 3.8+**: Programming language

### Authentication & Security

- **Token Authentication**: DRF token-based authentication
- **Custom User Model**: Extended user model with college-specific fields
- **Permissions**: Role-based access control
- **CORS Headers**: Cross-origin request handling

### Development Tools

- **Django Admin**: Built-in administration interface
- **Migrations**: Database schema management
- **Serializers**: Data serialization and validation
- **ViewSets**: Organized API views

## 📁 Project Structure

```
event-management-backend/
├── manage.py                      # Django management script
├── db.sqlite3                     # SQLite database
├── event_management/              # Main project directory
│   ├── __init__.py
│   ├── settings.py                # Django settings
│   ├── urls.py                    # Main URL configuration
│   ├── wsgi.py                    # WSGI application
│   └── asgi.py                    # ASGI application
├── users/                         # User management app
│   ├── models.py                  # Custom User model
│   ├── serializers.py             # User serializers
│   ├── views.py                   # Authentication views
│   ├── admin.py                   # User admin configuration
│   ├── urls.py                    # User-related URLs
│   └── migrations/                # Database migrations
├── events/                        # Event management app
│   ├── models.py                  # Event model
│   ├── serializers.py             # Event serializers
│   ├── views.py                   # Event views
│   ├── admin.py                   # Event admin configuration
│   ├── urls.py                    # Event-related URLs
│   └── migrations/                # Database migrations
└── registrations/                 # Registration management app
    ├── models.py                  # Registration model
    ├── serializers.py             # Registration serializers
    ├── views.py                   # Registration views
    ├── admin.py                   # Registration admin configuration
    ├── urls.py                    # Registration-related URLs
    └── migrations/                # Database migrations
```

## 🚦 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package installer)
- Virtual environment (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/takedown-2.0-backend.git
   cd takedown-2.0-backend
   ```

2. **Create virtual environment**

   ```bash
   python -m venv venv

   # Windows
   venv\Scripts\activate

   # macOS/Linux
   source venv/bin/activate
   ```

3. **Install dependencies**

   ```bash
   pip install django djangorestframework django-cors-headers
   ```

4. **Run migrations**

   ```bash
   python manage.py makemigrations
   python manage.py migrate
   ```

5. **Create superuser**

   ```bash
   python manage.py createsuperuser
   ```

6. **Start development server**

   ```bash
   python manage.py runserver
   ```

7. **Access the application**
   - API Base URL: `http://localhost:8000/api/`
   - Admin Panel: `http://localhost:8000/admin/`

## 📊 Database Models

### User Model (`users/models.py`)

```python
class User(AbstractUser):
    phone = models.CharField(max_length=10, unique=True)      # Primary identifier
    age = models.IntegerField(null=True, blank=True)          # User age
    college = models.CharField(max_length=200, blank=True)    # College name
    year = models.CharField(max_length=50, blank=True)        # Academic year
    branch = models.CharField(max_length=100, blank=True)     # Academic branch
    created_at = models.DateTimeField(auto_now_add=True)      # Registration timestamp

    USERNAME_FIELD = 'phone'  # Login with phone number
```

### Event Model (`events/models.py`)

```python
class Event:
    title = models.CharField(max_length=200)                  # Event name
    description = models.TextField()                          # Event description
    date = models.DateField()                                 # Event date
    time = models.CharField(max_length=100)                   # Event time
    fee = models.CharField(max_length=50)                     # Display fee
    fee_amount = models.DecimalField()                        # Numeric fee
    event_type = models.CharField()                           # technical/non-technical
    day = models.IntegerField()                               # Event day (1 or 2)
    is_key_event = models.BooleanField()                      # Highlight status
    max_participants = models.IntegerField()                  # Capacity limit
```

### Registration Model (`registrations/models.py`)

```python
class Registration:
    user = models.ForeignKey(User)                            # Registered user
    event = models.ForeignKey(Event)                          # Target event
    payment_status = models.CharField()                       # Payment status
    payment_id = models.CharField()                           # Payment reference
    amount_paid = models.DecimalField()                       # Amount paid
    registered_at = models.DateTimeField()                    # Registration time
```

## 🔗 API Endpoints

### Authentication Endpoints

```http
POST /api/users/register/          # User registration
POST /api/users/login/             # User login
GET  /api/users/profile/           # Get user profile
POST /api/users/logout/            # User logout
```

### Event Endpoints

```http
GET  /api/events/                  # List all events
GET  /api/events/{id}/             # Get specific event
POST /api/events/                  # Create event (admin only)
PUT  /api/events/{id}/             # Update event (admin only)
DELETE /api/events/{id}/           # Delete event (admin only)
```

### Registration Endpoints

```http
POST /api/registrations/register/{event_id}/    # Register for event
GET  /api/registrations/my-registrations/       # Get user's registrations
```

## 📝 API Request/Response Examples

### User Registration

**Request:**

```json
POST /api/users/register/
{
    "username": "john_doe",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "password": "securepassword",
    "confirm_password": "securepassword",
    "age": 20,
    "college": "Universal Engineering College",
    "year": "Second Year",
    "branch": "Computer Science"
}
```

**Response:**

```json
{
  "user": {
    "id": 1,
    "username": "john_doe",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "9876543210",
    "college": "Universal Engineering College",
    "year": "Second Year",
    "branch": "Computer Science"
  },
  "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
  "message": "User registered successfully"
}
```

### User Login

**Request:**

```json
POST /api/users/login/
{
    "phone": "9876543210",
    "password": "securepassword"
}
```

**Response:**

```json
{
  "user": {
    "id": 1,
    "username": "john_doe",
    "first_name": "John",
    "last_name": "Doe",
    "email": "john@example.com",
    "phone": "9876543210"
  },
  "token": "9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b",
  "message": "Login successful"
}
```

### Event Registration

**Request:**

```json
POST /api/registrations/register/1/
Headers: Authorization: Token 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b
{
    "payment_status": "completed",
    "payment_id": "pay_xyz123",
    "amount_paid": 299.00
}
```

**Response:**

```json
{
  "message": "Registration successful",
  "registration": {
    "id": 1,
    "user": 1,
    "event": 1,
    "payment_status": "completed",
    "amount_paid": "299.00",
    "registered_at": "2025-06-05T10:30:00Z",
    "event_details": {
      "id": 1,
      "title": "AI/ML Workshop",
      "date": "2025-06-05",
      "time": "10:00 AM - 4:00 PM",
      "fee": "₹299"
    }
  }
}
```

## 🔧 Configuration

### Django Settings (`settings.py`)

```python
# Database Configuration
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}

# REST Framework Configuration
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

# CORS Configuration
CORS_ALLOWED_ORIGINS = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]
```

## 👨‍💼 Admin Interface

### Admin Features

- **User Management**: View, edit, and manage user accounts
- **Event Management**: Create, update, and delete events
- **Registration Tracking**: Monitor event registrations
- **Filtering & Search**: Advanced filtering options
- **Bulk Operations**: Bulk actions for efficiency

### Admin Access

1. Create superuser: `python manage.py createsuperuser`
2. Visit: `http://localhost:8000/admin/`
3. Login with superuser credentials

### Adding Events via Admin

1. Navigate to Events section
2. Click "Add Event"
3. Fill in event details:
   - Title, description, date, time
   - Fee amount and display text
   - Event type (technical/non-technical)
   - Day (1 or 2)
   - Key event status
   - Maximum participants

## 🧪 Testing

### Running Tests

```bash
# Run all tests
python manage.py test

# Run specific app tests
python manage.py test users
python manage.py test events
python manage.py test registrations

# Run with verbose output
python manage.py test --verbosity=2
```

### API Testing

Use tools like Postman, curl, or Django REST Framework's browsable API:

```bash
# Test event listing
curl http://localhost:8000/api/events/

# Test user registration
curl -X POST http://localhost:8000/api/users/register/ \
  -H "Content-Type: application/json" \
  -d '{"username":"testuser","phone":"1234567890","password":"testpass"}'
```

## 🚀 Deployment

### Production Considerations

1. **Database**: Switch to PostgreSQL or MySQL
2. **Environment Variables**: Use django-environ for secrets
3. **Static Files**: Configure static file serving
4. **Security**: Enable security middleware
5. **CORS**: Configure proper CORS settings

### Environment Setup

```bash
# Install production dependencies
pip install gunicorn psycopg2-binary

# Collect static files
python manage.py collectstatic

# Run with Gunicorn
gunicorn event_management.wsgi:application
```

## 📈 Performance & Optimization

### Database Optimization

- Proper indexing on frequently queried fields
- Database connection pooling
- Query optimization with select_related()

### Caching

- Redis for session caching
- Database query caching
- Template fragment caching

### Security

- HTTPS enforcement
- CSRF protection
- Rate limiting
- Input sanitization

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Backend Developer**: [Your Name]
- **Database Designer**: [Designer Name]
- **API Architect**: [Architect Name]

## 📞 Support

For backend-specific support:

- Email: backend@takedown2025.com
- API Documentation: `http://localhost:8000/api/docs/`
- GitHub Issues: [Backend Issues](https://github.com/your-username/takedown-2.0-backend/issues)

## 📝 Changelog

### Version 1.0.0 (Current)

- Initial backend implementation
- User authentication system
- Event management APIs
- Registration functionality
- Django admin interface
- Token-based authentication

---

**Built with Django & DRF for scalable event management**
