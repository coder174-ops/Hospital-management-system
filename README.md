# Hospital Management System

A full-stack web application for managing hospital appointments, doctors, and patients.  
This project includes user, doctor, and admin panels with authentication, appointment booking, and payment integration.

## Features

- **User Panel**
  - Register, login, update profile
  - Book appointments with doctors
  - View and cancel appointments
  - Online payment (Razorpay)

- **Doctor Panel**
  - Login, view appointments
  - Mark appointments as completed/cancelled
  - Manage availability

- **Admin Panel**
  - Login, view all appointments
  - Manage doctors and users

## Tech Stack

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT
- **Payment:** Razorpay
- **Image Uploads:** Cloudinary

## Folder Structure

```
/frontend         # User and doctor React app
/admin            # Admin React app
/backend          # Node.js/Express API
```

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB Atlas account
- Cloudinary account (for image uploads)
- Razorpay account (for payments)

### Environment Variables

Create `.env` files in `/backend` and `/frontend` with:

**Backend (.env):**
```
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET_KEY=your_razorpay_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

**Frontend (.env):**
```
VITE_BACKEND_URL=http://localhost:5000
```

### Installation

1. **Backend**
   ```
   cd backend
   npm install
   npm run server
   ```

2. **Frontend**
   ```
   cd frontend
   npm install
   npm run dev
   ```

3. **Admin Panel**
   ```
   cd admin
   npm install
   npm run dev
   ```

### Usage

- Visit `http://localhost:5173` for user/doctor panel.
- Visit `http://localhost:5174` for admin panel.
- Register as a user, login as doctor/admin using seeded credentials or register new.

## API Endpoints

- `/api/user/register` - Register user
- `/api/user/login` - Login user
- `/api/user/get-profile` - Get user profile
- `/api/user/book-appointment` - Book appointment
- `/api/user/list-appointment` - List user appointments
- `/api/doctor/list` - List doctors
- `/api/doctor/login` - Login doctor
- `/api/admin/login` - Login admin
- ...and more

## License

MIT

## Credits

Developed by Neeraj.
