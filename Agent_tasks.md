# CampusPulse — AI Agent Task Allocation

## Global Rule

Every AI agent must:

1. Read `AGENTS.md`
2. Read `PROJECT_SPEC.md`
3. Read `PRODUCT.md`
4. Read `TASKS.md`
5. Inspect existing code before modifying anything
6. Only work on its assigned feature
7. Avoid modifying unrelated files
8. Test its changes
9. Report all files changed
10. Never overwrite another agent's work

---

# Agent 1 — UI / Frontend

## Responsibility

Build the visual frontend and reusable UI components.

## Tasks

- Design system
- Global CSS
- Navbar
- Landing page
- Reusable buttons
- Cards
- Forms
- Student dashboard UI
- Reports UI
- Events UI
- Responsive design
- Loading states
- Empty states
- Error states

## Must NOT

- Configure Firebase
- Modify authentication logic
- Implement Gemini
- Change Firestore rules

---

# Agent 2 — Firebase / Backend

## Responsibility

Build the application's Firebase data layer.

## Tasks

- Firebase configuration
- Firestore setup
- Reports service
- Events service
- User data service
- Firestore queries
- Security rules

## Must NOT

- Redesign the UI
- Rewrite React pages unnecessarily
- Implement Gemini

---

# Agent 3 — Authentication

## Responsibility

Build authentication and authorization.

## Tasks

- Login
- Registration
- Logout
- Firebase Authentication
- Auth context/state
- Student role
- Admin role
- Protected routes
- Role-based access

## Must NOT

- Redesign unrelated pages
- Modify Firestore structure without coordination

---

# Agent 4 — Admin Dashboard

## Responsibility

Build administrator functionality.

## Tasks

- Admin dashboard
- Report management
- Report details
- Status updates
- Statistics
- Analytics
- Admin UI

## Must NOT

- Modify authentication architecture
- Replace Firebase configuration
- Implement Gemini

---

# Agent 5 — AI Enhancement

## Responsibility

Implement optional Gemini functionality.

## Tasks

- Gemini integration
- Issue classification
- Category suggestion
- Priority suggestion
- AI loading state
- AI error handling

## Priority

This agent works ONLY after the core application is functional.

If time becomes limited, this feature is skipped.

---

# Agent 6 — QA / Integration

## Responsibility

Final testing and integration.

## Tasks

- Find broken functionality
- Test forms
- Test authentication
- Test Firestore
- Test responsive layout
- Check console errors
- Check build errors
- Check security issues
- Fix integration problems
- Production build testing

## Must NOT

- Add unnecessary features
- Rewrite working architecture