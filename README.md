# My Portfolio

A dynamic, responsive personal portfolio website built with Django that showcases my skills, projects, education, and work experience. The website features an interactive slideshow of photography work and a comprehensive admin interface for easy content management.

## 🚀 Features

### Core Sections
- **Home**: Introduction with personal photo collage
- **About Me**: Detailed personal description with expandable content
- **Skills**: Interactive skill showcase with GitHub project links
- **Education**: Timeline of educational background
- **Experience**: Work history and professional experience
- **Projects**: Portfolio of development projects with images and GitHub links
- **Portfolio**: Interactive photo slideshow showcasing photography work
- **Contact**: Contact form with email functionality

### Interactive Features
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Smooth Scrolling**: Navigation with smooth scroll animations
- **Dynamic Content**: Admin panel for easy content updates
- **Photo Slideshow**: jQuery-powered image carousel with navigation
- **Contact Form**: PHP-based email submission system
- **Language Toggle**: English/Japanese language switch (UI ready)
- **Back to Top**: Smooth scroll-to-top functionality

### Admin Features
- **Content Management**: Easy editing of all portfolio sections
- **Image Upload**: Project screenshots and media management
- **Order Control**: Drag-and-drop ordering of content items
- **Visibility Toggle**: Show/hide projects and content
- **Search & Filter**: Advanced admin interface with search capabilities

## 🛠️ Technologies Used

### Backend
- **Django 5.2.4**: Python web framework
- **SQLite**: Database for development
- **Python 3.x**: Core programming language

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom styling with responsive design
- **JavaScript (ES6+)**: Interactive functionality
- **jQuery 3.7.1**: DOM manipulation and AJAX
- **Bootstrap 5.3.7**: Responsive UI framework

### Libraries & Frameworks
- **Font Awesome 6.7.2**: Icon library
- **Google Fonts (Urbanist)**: Typography
- **Material Symbols**: UI icons

### External Services
- **Cloudinary**: Image hosting and optimization
- **PHP**: Contact form processing

### Development Tools
- **Git**: Version control
- **VS Code**: Development environment

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Python 3.8+**
- **pip** (Python package installer)
- **Git** (for cloning the repository)

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd myPortfolio
```

### 2. Create Virtual Environment
```bash
python -m venv portfolioVenv
```

### 3. Activate Virtual Environment

**Windows:**
```bash
portfolioVenv\Scripts\activate
```

**macOS/Linux:**
```bash
source portfolioVenv/bin/activate
```

### 4. Install Dependencies
```bash
cd portfolioVenv/portfolio
pip install django
pip install pillow  # For image processing
```

### 5. Run Database Migrations
```bash
python manage.py makemigrations
python manage.py migrate
```

### 6. Create Superuser (Admin Access)
```bash
python manage.py createsuperuser
```

### 7. Run Development Server
```bash
python manage.py runserver
```

### 8. Access the Application
- **Website**: http://127.0.0.1:8000/
- **Admin Panel**: http://127.0.0.1:8000/admin/

## 📁 Project Structure

```
myPortfolio/
├── portfolioVenv/
│   └── portfolio/
│       ├── content/                 # Django app
│       │   ├── models.py           # Database models
│       │   ├── views.py            # View logic
│       │   ├── admin.py            # Admin interface
│       │   └── urls.py             # URL routing
│       ├── myportfolio/            # Django project settings
│       ├── templates/
│       │   └── index.html          # Main template
│       ├── static/
│       │   ├── css/
│       │   │   └── styles.css      # Custom styles
│       │   ├── js/
│       │   │   └── script.js       # JavaScript functionality
│       │   ├── assets/
│       │   │   ├── Json/
│       │   │   │   └── ImageJson.json  # Slideshow data
│       │   │   ├── Icons/          # Skill icons
│       │   │   ├── photos/         # Personal photos
│       │   │   └── files/          # Resume and documents
│       │   └── php/
│       │       └── main.php        # Contact form handler
│       └── media/                  # User uploaded files
└── README.md
```

## 🎯 Key Features Explained

### Content Management System
The portfolio uses Django's admin interface to manage all content dynamically:
- **About Me**: Multiple sections with ordering
- **Education**: Timeline entries with school details
- **Experience**: Work history with position details
- **Skills**: Technical skills with GitHub project links
- **Projects**: Portfolio items with images and descriptions

### Photo Slideshow
- **jQuery-powered**: Smooth transitions and navigation
- **External Images**: Cloudinary-hosted optimized images
- **Responsive**: Adapts to different screen sizes
- **Navigation**: Arrow controls and dot indicators

### Contact Form
- **PHP Processing**: Server-side email handling
- **Validation**: Client and server-side validation
- **User Feedback**: Success/error messages

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the project root for production settings:
```env
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=your-domain.com
```

### Database Configuration
For production, update `settings.py` to use PostgreSQL or MySQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

## 🚀 Deployment

### Production Checklist
1. Set `DEBUG = False` in settings
2. Configure production database
3. Set up static file serving
4. Configure email settings
5. Set up SSL certificate
6. Configure web server (Nginx/Apache)

### Recommended Hosting
- **Heroku**: Easy Django deployment
- **DigitalOcean**: VPS with full control
- **AWS**: Scalable cloud hosting
- **Vercel**: Static site hosting (with API routes)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Masahiro Kojima**
- GitHub: [@Masamello](https://github.com/Masamello)
- LinkedIn: [Masahiro Kojima](https://linkedin.com/in/masahiro-kojima)

## 🙏 Acknowledgments

- Django Documentation
- Bootstrap Team
- jQuery Foundation
- Font Awesome
- Google Fonts
- Cloudinary

---

**Note**: This portfolio is actively maintained and updated. For the latest version and features, please check the repository.
