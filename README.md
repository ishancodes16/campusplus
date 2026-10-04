# CampusPulse

 Smart Campus Issue & Event Hub

CampusPulse is a student-first web application designed to make campus issue reporting and event discovery simpler, more transparent, and easier to track.

Students can report campus problems, receive a unique tracking ID, search and filter reported issues, follow their status timeline, and explore upcoming campus events — all through a responsive, modern interface.

> Current focus:Frontend MVP
> Backend:Planned / currently being learned and developed with Firebase 

## 📌 GitHub

https://github.com/ishancodes16/campusplus

Problem

Campus issues such as infrastructure problems, maintenance requests, cleanliness concerns, or facility complaints can be difficult for students to report and track through traditional channels.

CampusPulse aims to provide a centralized interface where students can:

* Report issues digitally
* Receive a tracking ID
* Search and filter existing reports
* Track issue progress
* View a clear status timeline
* Discover campus events



Issue Reporting

Students can submit a campus issue with:

* Issue title
* Description
* Category
* Location
* Optional image
* Automatically generated tracking ID

Search & Filtering

Reports can be explored using:

* Search
* Category filters
* Status filters
* Clear/reset filters

Report Tracking

Each issue has a dedicated details view containing:

* Issue information
* Current status
* Tracking ID
* Location
* Status timeline

Campus Events

Students can browse upcoming campus events through a dedicated events interface.

Responsive Design

The interface is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile

Admin Interface

The project includes an admin-facing interface concept for managing campus reports and monitoring issue status.



Tech stack

| Technology   | Purpose                          |
| ------------ | -------------------------------- |
| React        | UI development                   |
| Vite         | Development & production tooling |
| JavaScript   | Application logic                |
| React Router | Client-side routing              |
| CSS          | Responsive styling               |
| Git & GitHub | Version control                  |

Planned Backend

The next development stage is planned around:

* Firebase Authentication
* Cloud Firestore
* Firebase Storage
* Secure role-based access
* Persistent report data

The backend is not presented as completed functionality in the current submission.

Project Structure


CampusPulse/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Button
│   │   ├── Card
│   │   ├── Empty
│   │   ├── Error
│   │   ├── FormField
│   │   ├── Loading
│   │   └── StatusBadge
│   │
│   ├── data/
│   │
│   ├── pages/
│   │   ├── Dashboard
│   │   ├── Events
│   │   ├── Landing
│   │   ├── ReportDetails
│   │   ├── ReportIssue
│   │   └── Reports
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── AGENTS.md
├── PRODUCT.md
├── PROJECT_SPEC.md
├── Tasks.md
├── package.json
└── vite.config.js

 Getting Started

1. Clone the repository

bash
git clone https://github.com/ishancodes16/campusplus.git
cd campusplus



Current Development Status

Completed

* [x] Responsive landing page
* [x] Navigation system
* [x] Student dashboard
* [x] Issue reporting interface
* [x] Automatic tracking ID generation
* [x] Reports listing
* [x] Search and filtering
* [x] Report details page
* [x] Status timeline interface
* [x] Events interface
* [x] Reusable UI components
* [x] Responsive mobile layout
* [x] ESLint validation
* [x] Production build validation

Next Development Phase

* [ ] Firebase Authentication
* [ ] Persistent Firestore data
* [ ] Image storage
* [ ] Secure admin roles
* [ ] Real-time report status updates
* [ ] Production deployment
* [ ] Analytics

What I Learned

Building CampusPulse has helped me work with:

* Component-based React architecture
* Client-side routing
* Reusable UI systems
* Responsive web design
* State management
* Form handling
* Search and filtering logic
* Product-oriented frontend development
* Git and GitHub workflows
* AI-assisted software development

I am currently expanding my skills into backend development and Firebase integration.

 AI-Assisted Development

AI coding tools were used as development assistants during the project.

Generated code was reviewed, tested, integrated, and validated as part of the development process.

The goal was not simply to generate code, but to use AI tools to accelerate development while understanding the project's architecture and implementation.

Future Vision

CampusPulse can eventually evolve into a complete campus-management platform with:

* Real-time issue tracking
* Student authentication
* Verified campus administration
* Image-based issue reporting
* Notifications
* Campus analytics
* Event management
* AI-assisted issue categorization
* Mobile application support

 Developer

Ishan Pandey

B.Tech Electronics & Communication Engineering
Techno India University, West Bengal

Interested in:

* Frontend Development
* AI & Machine Learning
* Cybersecurity
* Software Engineering
* Developer Tools

 License

This project was created as a personal project for learning, portfolio development, and GDG Campus selection.
