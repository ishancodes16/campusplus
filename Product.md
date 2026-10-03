# CampusPulse — Smart Campus Issue & Event Hub

## 1. Product Overview

CampusPulse is a student-first smart campus platform that allows students to report campus problems, track their resolution, discover campus events, and gives administrators a dashboard to manage issues.

The project is being built as a flagship project for GDG Campus selection.

---

## 2. Problem

Students often face campus problems such as:

- Broken infrastructure
- Electrical issues
- Water problems
- Cleanliness issues
- Internet/Wi-Fi problems
- Classroom or laboratory issues
- Other campus-related problems

These issues can be difficult to report, track, and follow up on through scattered communication channels.

CampusPulse provides a centralized platform for reporting and tracking these issues.

---

## 3. Target Users

### Students

Students can:

- Create issue reports
- Add descriptions
- Select issue categories
- Specify locations
- Upload optional photos
- Track report status
- Search existing reports
- Filter reports
- View campus events

### Administrators

Administrators can:

- View reported issues
- Change issue status
- Review issue details
- Monitor issue statistics
- View analytics

---

## 4. Core Features

### Issue Reporting

Students can create a report containing:

- Title
- Description
- Category
- Location
- Optional image
- Automatically generated tracking ID

---

### Issue Tracking

Each issue has a status:

- Reported
- Under Review
- In Progress
- Resolved

Students can use the tracking ID to identify their report.

---

### Issue Dashboard

Display:

- Total reports
- Open reports
- In-progress reports
- Resolved reports

---

### Search and Filtering

Users can search reports and filter by:

- Category
- Status
- Location

---

### Admin Dashboard

Administrators can:

- View all reports
- Open individual report details
- Change status
- Review submitted information
- View summary statistics

---

### Campus Events

Display upcoming campus events with:

- Event name
- Date
- Time
- Location
- Description

---

## 5. Analytics

The dashboard should provide visual summaries such as:

- Reports by category
- Reports by status
- Resolution statistics
- Recent reports

Charts should be simple and readable.

---

## 6. Optional AI Feature

If time permits, integrate Gemini to automatically classify submitted reports.

For example:

Input:

"Classroom 302 projector is not working."

Possible AI classification:

Category:
"Equipment"

Priority:
"Medium"

The AI feature should assist classification rather than replace administrator decisions.

This feature is optional and should only be implemented after the core application is stable.

---

## 7. Authentication

The application should support authentication.

Possible roles:

### Student

Can create and track reports.

### Administrator

Can manage reports and view administrative analytics.

Role-based access should prevent students from accessing administrator functionality.

---

## 8. Data Storage

Use Firebase/Firestore for persistent application data.

Potential collections:

### users

Stores user information and role.

### reports

Stores campus issue reports.

### events

Stores campus event information.

---

## 9. Technology

### Frontend

- React
- Vite
- JavaScript
- CSS

### Backend / Services

- Firebase
- Firestore
- Firebase Authentication

### Optional AI

- Gemini API

### Development

- Git
- GitHub
- ESLint

---

## 10. UI/UX

The application should feel like a modern campus technology platform.

Requirements:

- Responsive design
- Mobile-friendly layout
- Clean navigation
- Clear visual hierarchy
- Consistent typography
- Accessible buttons and forms
- Loading states
- Empty states
- Error states
- Success feedback

Avoid making the interface look like a generic AI-generated dashboard.

---

## 11. Main Pages

### Landing Page

Introduce CampusPulse and explain its purpose.

### Student Dashboard

Show:

- Report statistics
- Recent reports
- Quick report button
- Upcoming events

### Report Issue Page

Form for submitting a new campus issue.

### Reports Page

Searchable and filterable issue list.

### Report Details Page

Show:

- Issue information
- Location
- Category
- Status
- Tracking ID
- Timeline

### Events Page

Display upcoming campus events.

### Admin Dashboard

Show:

- All reports
- Statistics
- Status management
- Analytics

### Login Page

Authentication for students and administrators.

---

## 12. Security

Never expose:

- API keys
- Firebase secrets
- Passwords
- Authentication tokens

Use environment variables for sensitive configuration.

Validate user input.

Apply appropriate Firebase security rules.

Users should only access functionality permitted by their role.

---

## 13. MVP Priority

The following order must be followed.

### Phase 1 — Essential

1. Landing page
2. Navigation
3. Student dashboard
4. Report creation
5. Firestore storage
6. Reports list
7. Report status
8. Search/filter
9. Responsive UI

### Phase 2 — Important

10. Authentication
11. Admin dashboard
12. Status management
13. Analytics
14. Events

### Phase 3 — Enhancement

15. Gemini classification
16. Additional UI polish

The project must remain functional even if Phase 3 is not completed.

---

## 14. Explicit Scope Limits

To keep the project achievable within the development deadline, do not add these unless explicitly requested:

- Real-time chat
- Push notifications
- Complex maps
- Payment systems
- Social media features
- Large recommendation systems

Focus on making the core campus issue workflow polished and functional.

---

## 15. Definition of Done

The project is considered successful when a student can:

1. Open CampusPulse.
2. Sign in.
3. Submit a campus issue.
4. Receive a tracking ID.
5. See the issue in their reports.
6. Search/filter reports.
7. Track its status.

An administrator should be able to:

1. Sign in.
2. View submitted issues.
3. Open an issue.
4. Change its status.
5. View basic analytics.

The application must be responsive, stable, and deployable.