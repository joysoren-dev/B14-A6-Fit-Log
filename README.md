# FitLog

FitLog is a dark, responsive workout library and daily workout planner built with Next.js. It fetches workout data from the FitLog API, lets users explore individual exercises, add workouts to Today's Plan, save workouts for later, and manage selected workouts from the My Plan page.

## Live Site

**Live:** [https://fit-log-chi-lyart.vercel.app/](https://fit-log-chi-lyart.vercel.app/)

**GitHub:** [https://github.com/joysoren-dev/B14-A6-Fit-Log](https://github.com/joysoren-dev/B14-A6-Fit-Log)

## Technologies Used

- Next.js 16
- React 19
- JavaScript
- Next.js App Router
- Tailwind CSS
- Vercel
- FitLog REST API
- Git and GitHub

## Features

- **Responsive workout library** — Browse workouts across mobile, tablet, and desktop devices.
- **API-powered workout data** — Workout information is fetched from the FitLog REST API.
- **Workout details** — View workout image, description, muscle groups, equipment, difficulty, sets, reps, duration, calories, rating, and instructions.
- **Today's Plan** — Add workouts to a personal daily workout plan.
- **Saved workouts** — Save workouts for later and manage them from the My Plan page.
- **Live navigation counters** — Plan and Saved counters update when workouts are added or saved.
- **Toast notifications** — Users receive immediate feedback after workout actions.
- **Workout management** — View details, mark planned workouts as done, and remove workouts.
- **Sorting** — Sort the current workout list by duration, calories, or rating.
- **Loading feedback** — Loading indicators are displayed while workout data is being fetched.
- **Custom 404 handling** — Unknown routes and invalid workout IDs receive a clear not-found experience.
- **Responsive navigation** — Desktop navigation changes to a mobile menu on smaller screens.
- **Empty states** — My Plan provides clear empty-state messages when no workouts have been added or saved.
- **Vercel deployment** — The application is deployed to a production Vercel URL from the main branch.

## Workout API

FitLog uses the following REST API endpoints.

### All Workouts

```text
https://api.abcz.workers.dev/api/fitlog
```

This endpoint returns the workout collection used by the main workout library.

### Single Workout

```text
https://api.abcz.workers.dev/api/fitlog/:id
```

This endpoint returns the details of an individual workout using its ID.

## Main Pages

| Page | Description |
| --- | --- |
| `/` | Workout library, hero section, and workout collection |
| `/workout/:id` | Individual workout details, instructions, and workout actions |
| `/my-plan` | Today's Plan and Saved workout management |
| Unknown routes | Custom 404 not-found experience |

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/joysoren-dev/B14-A6-Fit-Log.git
cd B14-A6-Fit-Log
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Create a production build

```bash
npm run build
```

### 5. Start the production server

```bash
npm run start
```

## Project Structure

```text
B14-A6-Fit-Log/
├── public/
│   └── assets/
│       ├── banner.png
│       └── logo.png
├── src/
│   ├── app/
│   │   ├── workout/
│   │   │   └── [id]/
│   │   │       └── page.js
│   │   ├── my-plan/
│   │   │   └── page.js
│   │   ├── not-found.js
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   ├── Toast.jsx
│   │   └── ToastContainer.jsx
│   └── context/
│       └── PlanContext.js
├── package.json
├── package-lock.json
├── next.config.mjs
├── postcss.config.mjs
├── eslint.config.mjs
├── jsconfig.json
└── README.md
```

## Author

**Joy Soren**

GitHub: [https://github.com/joysoren-dev](https://github.com/joysoren-dev)
