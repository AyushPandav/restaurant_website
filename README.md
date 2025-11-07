# Restaurant Booking System

A modern, responsive **Restaurant Table Booking System** built with **Angular** (v17+) that allows customers to browse restaurants, view menus, check table availability in real time, and book tables seamlessly.

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![RxJS](https://img.shields.io/badge/RxJS-^7.8.0-E10098?style=for-the-badge)

---

## 🚀 Features

- **User Authentication** (Login / Register / Guest Booking)
- **Restaurant Listings** with search, filter by cuisine, location, and ratings
- **Real-time Table Availability** using date & time picker
- **Interactive Menu Browsing** with images and descriptions
- **Secure Booking Flow** with confirmation and email/SMS notifications (mock)
- **Responsive UI** – Works flawlessly on mobile, tablet, and desktop
- **Admin Dashboard** (View bookings, manage tables, update restaurant info)
- **Form Validation** with Angular Reactive Forms
- **State Management** using Angular Services & RxJS
- **Mock Backend** with `json-server` or in-memory data

---

## 📸 Screenshots

| Home Page | Booking Flow | Admin Dashboard |
|-----------|--------------|-----------------|
| ![Home](./screenshots/home.png) | ![Booking](./screenshots/booking.png) | ![Admin](./screenshots/admin.png) |

*(Add actual screenshots in `/screenshots` folder)*

---

## 🛠️ Tech Stack

| Technology       | Version  |
|------------------|---------|
| Angular          | `^17.0.0` |
| Angular Material / Bootstrap | `^5.0` / `^5.3` |
| RxJS             | `^7.8.0` |
| TypeScript       | `~5.2.0` |
| json-server      | `^0.17.0` (for mock API) |

---

## 🚦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) (`npm install -g @angular/cli`)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/restaurant-booking-system.git
   cd restaurant-booking-system

   Install dependencies
bashnpm install

Start the mock backend (json-server)
bashnpm run server

Runs on http://localhost:3000


Start the Angular app
bashng serve

Navigate to http://localhost:4200




📂 Project Structure
textsrc/
├── app/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Feature pages (Home, Booking, Admin)
│   ├── services/         # API & Auth services
│   ├── models/           # TypeScript interfaces
│   ├── guards/           # Route guards
│   └── shared/           # Pipes, directives, modules
├── assets/               # Images, icons, mock data
└── environments/         # Environment configs

🔌 API Endpoints (Mock)

MethodEndpointDescriptionGET/restaurantsList all restaurantsGET/restaurants/:idGet restaurant detailsGET/bookingsGet all bookingsPOST/bookingsCreate new bookingGET/tables?date=&time=Check table availability

🧪 Running Tests
bashng test          # Unit tests with Karma/Jasmine
ng e2e           # End-to-end tests with Cypress (optional)

🚀 Deployment
Deploy easily using Angular CLI:
bashng build --configuration production
Host static files on Netlify, Vercel, or Firebase Hosting.

🤝 Contributing
Contributions are welcome! Please follow these steps:

Fork the project
Create your feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request


📝 License
Distributed under the MIT License. See LICENSE for more information.
