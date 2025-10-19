### High-level overview
- **Monorepo layout**: One workspace with a TypeScript Node.js backend (`backend/`) and a React + Vite frontend (`client-sms/`). Shared top-level `node_modules/` and `package.json` exist, but each app also has its own.
- **Primary stacks**:
  - Backend: Express (TypeScript), layered by `models` → `controllers` → `routes`, with DB config in `src/config`.
  - Frontend: React + Vite + TypeScript, modularized by feature folders under `src/features`, plus a shared UI kit and core services.

### Root
- `package.json`, `package-lock.json`, `node_modules/`: top-level Node workspace context (may be used for tooling).
- `README`: repo documentation.
- `myenv/`: a Python virtual environment (not related to the Node/React apps).
- `.git/`: git repository metadata.

### Backend (`backend/`)
- `package.json`, `package-lock.json`, `node_modules/`: backend’s own dependency scope.
- `tsconfig.json`: TypeScript config for the server.
- `src/`
  - `index.ts`: Express app entrypoint; sets up middleware, mounts route modules, starts the server.
  - `config/`
    - `db.ts`: database connection configuration/initialization (e.g., connecting to MongoDB/Postgres via an ORM/driver).
  - `models/`
    - `student/Student.ts`, `staff/Staff.ts`: data schemas/models representing DB collections/tables and their TypeScript types.
  - `controllers/`
    - `student/studentController.ts`, `staff/staffController.ts`: request handlers encapsulating business logic. They read from `models` and return responses.
  - `routes/`
    - `student/studentRoutes.ts`, `staff/staffRoutes.ts`: define route paths and map them to controller actions; mounted in `index.ts`.

Flow: Request → `routes` → `controllers` → `models` → DB. `db.ts` wires the database connection before routes run.

### Frontend (`client-sms/`)
- Tooling/config: `package.json`, `vite.config.ts`, `tsconfig*.json`, `eslint.config.js`, `tailwind.config.ts`, `postcss.config.js`, `components.json` (UI generator config), `bun.lockb` (if Bun is used).
- Public and entry:
  - `index.html`: Vite entry HTML.
  - `public/`: static assets (favicon, robots, etc.).
- Global styles/types:
  - `index.css`, `src/App.css`, `src/vite-env.d.ts`, `src/types/*.d.ts` (shared domain types like `student.d.ts`, `staff.d.ts`, etc.).
- App bootstrap:
  - `src/app/main.tsx`: React root render (creates root and renders the app).
  - `src/app/App.tsx`: top-level component (providers/layouts).
  - `src/app/routes.tsx`: app routing table (feature routes).
- Core building blocks (`src/core`)
  - `context/`: global contexts
    - `AuthContext.tsx`: authentication/session context.
    - `ThemeContext.tsx`: theme state (e.g., light/dark).
  - `hooks/`: reusable hooks (`useFetch.ts`, `useModal.ts`, `usePagination.ts`).
  - `layouts/`: shell UI
    - `MainLayout.tsx`, `AuthLayout.tsx`: layout wrappers.
    - `Sidebar.tsx`, `Topbar.tsx`, `Breadcrumb.tsx`: navigation and framing.
  - `services/`:
    - `api.ts`: API endpoint helpers or route builders.
    - `http.ts`: HTTP client setup (fetch/axios wrapper).
    - `errorHandler.ts`: centralized error normalization.
    - `tokenHelper.ts`: token/localStorage helpers for auth.
  - `ui/`: shared primitives (form field, loader, modal, pagination, table).
- Feature modules (`src/features`)
  - Each folder encapsulates pages, components, and a `service.ts` to talk to the backend:
    - `students/`, `staff/`, `academics/`, `attendance/`, `exams/`, `fees/`, `library/`, `reports/`, `settings/`, `transport/`, `users/` …
    - Typical files: index page (`index.tsx`) and screens like `StudentAttendance.tsx`, `FeeStructure.tsx`, `ExamSchedule.tsx`, etc.
    - `service.ts`: API calls specific to the feature (using `core/services/http.ts`).
  - `dashboard/`: overview pages and dashboard components.
- Shared UI kit (`src/components/ui`)
  - A comprehensive set of headless/styled components (buttons, dialogs, tables, inputs, menus, tabs, etc.), likely based on shadcn/ui + Radix primitives, enabling consistent UI across features.
- Misc:
  - `src/hooks/`: additional app-wide hooks.
  - `src/lib/utils.ts`: utility helpers.
  - `src/pages/Index.tsx`, `src/pages/NotFound.tsx`: top-level pages for home/404.

### How pieces interact
- Frontend pages in `src/features/*/*.tsx` call their `service.ts` functions → these use `core/services/http.ts` and `api.ts` to hit backend endpoints.
- Backend `routes/*Routes.ts` expose REST endpoints → `controllers/*Controller.ts` implement logic → `models/*` read/write the database (configured via `config/db.ts`).
- Auth/session and theme are supplied via `AuthContext` and `ThemeContext` wrapped near `App.tsx`.
- UI components in `src/components/ui` and `src/core/ui` provide consistent UX across features.

### Typical development commands (context)
- In `backend/`: `npm run dev` or `npm start` depending on `package.json` to run the server (often with ts-node/nodemon).
- In `client-sms/`: `npm run dev` to start the Vite dev server; routes are defined in `src/app/routes.tsx`.

If you want, we can also map backend endpoints to frontend `service.ts` calls or add a quick runbook for both apps.





npm run seed
npm run dev

