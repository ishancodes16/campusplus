# GDG Campus Project — Project Specification

## 1. Objective

Build a polished, functional web application that demonstrates:
- Strong frontend development. It should not look like ai generated
- Good UI/UX.hyperrealism
- Real-world problem solving
- API integration
- Clean React architecture
- Responsive design
- Practical use of modern technology

The project will be developed for a GDG Campus selection portfolio.

---

## 2. Technology

### Frontend
- React
- Vite
- JavaScript
- HTML
- CSS

### Development
- Git
- GitHub
- ESLint

Additional libraries should only be added when they provide clear value.

---

## 3. Current Architecture

src/
├── assets/
├── components/
├── pages/
├── services/
├── utils/
├── App.jsx
├── App.css
├── index.css
└── main.jsx

---

## 4. Development Principles

- Build real functionality, not just a visual mockup.
- Keep components reusable.
- Keep files reasonably small and focused.
- Avoid unnecessary dependencies.
- Maintain responsive design.
- Prioritize accessibility.
- Handle loading and error states.
- Keep API logic separate from UI components.
- Never expose API keys or secrets in frontend code.
- Avoid unnecessary rewrites of existing code.

---

## 5. AI Agent Collaboration

Multiple AI coding agents may contribute to this project.

Every agent must:

1. Read AGENTS.md.
2. Read PROJECT_SPEC.md.
3. Inspect the existing implementation before changing it.
4. Identify files that will be modified.
5. Avoid modifying unrelated files.
6. Preserve existing functionality.
7. Test the feature after implementation.
8. Clearly report files changed.
9. Clearly report dependencies added.
10. Clearly report anything that remains unfinished.

No agent should assume it owns the entire project.

---

## 6. Quality Requirements

The final application should:

- Work without obvious runtime errors.
- Be responsive.
- Have consistent visual design.
- Have meaningful user interactions.
- Have useful empty/loading/error states.
- Have clean navigation.
- Have readable code.
- Have a professional README.
- Be deployable.

---

## 7. Security

Never commit:

- API keys
- Passwords
- Authentication tokens
- Private credentials
- `.env` files containing secrets

Use environment variables where required.

---

## 8. Git Workflow

Before major features:

- Create a feature branch.
- Implement the feature.
- Test it.
- Commit with a descriptive message.
- Merge only after verifying the feature.

Never use:

git push --force

unless explicitly instructed.

---

## 9. Current Status

Project setup:
- React + Vite: Complete
- Git: Complete
- GitHub connection: Complete
- Basic project architecture: Complete
- AI agent instructions: Complete
- Project specification: Complete

Next phase:
Define the actual product and begin feature development.