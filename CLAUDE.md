# WhatIsTrue Project Commands and Guidelines

## Build & Test Commands
- Setup: `npm install`
- Dev server: `npm run dev`
- Build: `npm run build`
- Start production: `npm run start`
- Test: `npm test`
- Test single: `npm test -- -t "test name"`
- Lint: `npm run lint`

## Code Style Guidelines
- **Formatting**: Use Prettier with 2-space indentation
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **Imports**: Group imports (1-React/Next, 2-external libs, 3-internal components, 4-utils/hooks)
- **Component Structure**: Functional components with TypeScript interfaces for props
- **API Routes**: Use NextApiRequest and NextApiResponse types
- **Database**: Use Mongoose models with TypeScript interfaces
- **Authentication**: Use NextAuth.js for user authentication
- **State Management**: Use React hooks for local state
- **Error Handling**: Try/catch in API routes and form submissions
- **Form Handling**: Use Formik with Yup validation

This file will be updated as project conventions evolve.