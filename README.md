# 🌍 World Wise Scholars - International Development Program Platform

<div align="center">

![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-12.2.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)

**Empowering Students to Pursue Global Education Opportunities**

[Live Demo](https://wws-WWS-website.vercel.app)

</div>

---

## 🎯 About The Project

**World Wise Scholars** is a comprehensive web platform designed to guide students through their international education journey. From university selection to visa assistance, we provide end-to-end support for students aspiring to study abroad.

### Why Choose WWS?

- **Comprehensive Guidance** - Complete information on studying in 6+ countries
- **Smart Search** - Find universities and courses tailored to your profile
- **Application Management** - Track your applications in one place
- **IELTS Preparation** - Resources and guidance for test preparation
- **Expert Support** - Connect with our team of education consultants

---

## ✨ Key Features

### 🎓 Study Abroad Information

- Detailed guides for studying in:
  - 🇺🇸 United States
  - 🇬🇧 United Kingdom
  - 🇨🇦 Canada
  - 🇦🇺 Australia
  - 🇮🇪 Ireland
  - 🇳🇿 New Zealand

### 🔍 Smart Search & Discovery

- **University Search** - Filter by location, ranking, fees, and programs
- **Course Search** - Find programs matching your interests and qualifications
- **Scholarship Explorer** - Discover funding opportunities

### 📱 User Dashboard

- **Application Tracking** - Monitor your application status in real-time
- **Document Management** - Upload and organize required documents
- **Profile Management** - Save preferences and education history

### 🎯 IELTS Preparation

- Test information and requirements
- Preparation resources
- Tips and strategies

### 👥 Multi-Role System

- **Students** - Apply and track applications
- **Ambassadors** - Support and guide students
- **Admins** - Manage platform content and applications

### 💬 Interactive Features

- **WhatsApp Integration** - Quick chat support
- **Animated UI** - Smooth transitions with Framer Motion
- **Responsive Design** - Seamless experience on all devices

---

## 🛠️ Tech Stack

### Frontend

- **Framework:** React 19.1.1
- **Build Tool:** Vite 7.1.2
- **Styling:** Tailwind CSS 4.1.12 + DaisyUI 5.1.25
- **Routing:** React Router DOM 7.8.2
- **State Management:** TanStack Query (React Query) 5.87.4
- **Forms:** React Hook Form 7.62.0 + Zod 4.1.5
- **Animations:** Framer Motion 12.23.12
- **Authentication:** Firebase 12.2.1
- **HTTP Client:** Axios 1.11.0
- **Notifications:** React Toastify 11.0.5 + SweetAlert2 11.22.5

### Backend

- **Runtime:** Node.js
- **Framework:** Express.js 5.1.0
- **Database:** MongoDB 6.19.0
- **Email Service:** Nodemailer 7.0.6
- **Security:** CORS, Cookie Parser

### Development Tools

- **Linting:** ESLint 9.33.0
- **Package Manager:** npm / pnpm
- **Deployment:** Vercel (Backend)

---

## 📁 Project Structure

```
WWS-WWS-Website/
│
├── WWS-WWS-WEBSITE/              # Frontend Application
│   ├── src/
│   │   ├── assets/               # Images and static files
│   │   ├── AuthProvider/         # Authentication context
│   │   ├── component/            # Reusable components
│   │   │   ├── Hero.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SearchCard.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   └── ...
│   │   ├── Context/              # React Context providers
│   │   ├── Firebase/             # Firebase configuration
│   │   ├── Hooks/                # Custom React hooks
│   │   │   ├── useAuth/
│   │   │   ├── useAxiosSecure/
│   │   │   └── role/
│   │   ├── layout/               # Layout components
│   │   │   ├── MainLayout.jsx
│   │   │   └── DashboardLayout.jsx
│   │   ├── nav/                  # Navigation pages
│   │   │   └── studyAbroad/
│   │   ├── pages/                # Main application pages (57 pages)
│   │   ├── router/               # Route configuration
│   │   │   ├── Router.jsx
│   │   │   ├── PrivateRoutes.jsx
│   │   │   ├── AdminRoutes.jsx
│   │   │   ├── AmbassadorRoutes.jsx
│   │   │   └── UserRoutes.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/
│   ├── dist/                     # Production build
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── WWS-WWS-server/               # Backend API
│   ├── index.js                  # Express server
│   ├── package.json
│   └── vercel.json
│
└── README.md                     # This file
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **pnpm**
- **MongoDB** (local or Atlas)
- **Firebase** account (for authentication)

### Installation

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/WWS-WWS-Website.git
cd WWS-WWS-Website
```

#### 2. Setup Frontend

```bash
cd WWS-WWS-WEBSITE
npm install
```

#### 3. Setup Backend

```bash
cd ../WWS-WWS-server
npm install
```

### Environment Variables

#### Frontend (.env)

Create a `.env` file in the `WWS-WWS-WEBSITE` directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id

# Backend API URL
VITE_API_URL=https://wws-idp-server-gray.vercel.app
```

#### Backend (.env)

Create a `.env` file in the `WWS-WWS-server` directory:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string
DB_NAME=worldWiseScholars

# Server
PORT=5000
NODE_ENV=development

# Email Configuration (Nodemailer)
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

# CORS
CLIENT_URL=http://localhost:5173

# JWT or Session Secret (if applicable)
SECRET_KEY=your_secret_key
```

---

## 💻 Usage

### Development Mode

#### Start Frontend

```bash
cd WWS-WWS-WEBSITE
npm run dev
```

Frontend will run on `http://localhost:5173`

#### Start Backend

```bash
cd WWS-WWS-server
node index.js
```

Backend will run on `https://wws-idp-server-gray.vercel.app`

### Production Build

#### Build Frontend

```bash
cd WWS-WWS-WEBSITE
npm run build
npm run preview
```

#### Deploy Backend

The backend is configured for Vercel deployment using `vercel.json`

---

## 👤 User Roles

The platform supports three distinct user roles:

### 🎓 Student

- Browse universities and courses
- Submit applications
- Track application status
- Access study guides and resources
- Manage personal profile

### 🤝 Ambassador

- View student applications
- Provide guidance and support
- Access ambassador-specific resources
- Assist with student queries

### 👨‍💼 Admin

- Manage all applications
- Add/Edit universities and courses
- Manage user roles
- View analytics and reports
- Content management

---

## 📜 Available Scripts

### Frontend

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

### Backend

| Command         | Description  |
| --------------- | ------------ |
| `node index.js` | Start server |
| `npm test`      | Run tests    |

---

## 🎨 Key Components

- **Hero** - Landing page hero section with animations
- **Header** - Main navigation with responsive design
- **SearchCard** - Smart search interface for universities/courses
- **ContactForm** - Lead generation and inquiry form
- **Dashboard** - Role-based user dashboard
- **FloatingWhatsApp** - Integrated WhatsApp chat widget
- **Study Components** - Country-specific study guides
- **Application Management** - Track and manage applications

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

---

## 📞 Contact

**World Wise Scholars**

- 📱 WhatsApp: +880 1336485736
- 📧 Email: contact@worldwisescholars.com
- 🌐 Website: [worldwisescholars.com](#)

**Project Link:** [https://github.com/yourusername/WWS-WWS-Website](https://github.com/yourusername/WWS-WWS-Website)

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [DaisyUI](https://daisyui.com/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/latest)

---

<div align="center">

**Made with ❤️ by World Wise Scholars Team**

⭐ Star this repository if you found it helpful!

</div>
