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

## Project Requirements Checklist

- [x] Project name included
- [x] Project description included
- [x] Technologies used documented
- [x] More than 5 key features documented
- [x] Live deployed site included
- [x] GitHub repository included
- [x] Workout API endpoints documented
- [x] Main project pages documented
- [x] Local setup instructions included
- [x] Responsive design implemented
- [x] Workout library implemented
- [x] Workout details page implemented
- [x] Today's Plan implemented
- [x] Saved workouts implemented
- [x] Plan and Saved navigation counters implemented
- [x] Loading state implemented
- [x] Toast notifications implemented
- [x] Custom 404 handling implemented
- [x] Responsive navigation implemented
- [x] Workout sorting implemented
- [x] Mark as Done functionality implemented
- [x] Remove workout functionality implemented
- [x] Production deployment completed

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

## Project Highlights

### Workout Library

The home page presents the workout collection with muscle-group tags, equipment, duration, calories, and ratings. Workout data is fetched from the FitLog API and displayed in a responsive grid.

Selecting a workout opens its dedicated details page.

The hero section includes a Browse Workouts button that takes users directly to the workout library.

### Workout Details

Each workout has a dedicated details view containing:

- Workout image
- Workout name
- Description
- Muscle groups
- Equipment
- Difficulty
- Sets
- Reps
- Duration
- Calories
- Rating
- Four workout instructions

Users can add the workout to Today's Plan or save it for later.

### My Plan

The My Plan page contains separate tabs for:

- Today's Plan
- Saved

It also displays live workout metrics including:

- Exercises
- Minutes
- Calories

Users can view workout details, mark planned workouts as done, and remove workouts from Today's Plan or Saved.

### Sorting

The workout list can be sorted by:

- Duration
- Calories
- Rating

Duration is used as the default sorting option. Changing the sorting option re-sorts the current list.

### User Feedback

Interactive workout actions provide immediate toast feedback when a workout has been:

- Added to Today's Plan
- Saved for later
- Marked as done
- Removed

### Responsive Navigation

The desktop navigation contains the main workout links and live Plan and Saved counters.

On smaller screens, the navigation switches to a mobile menu while keeping the main navigation accessible.

### Loading State

The application displays loading feedback while workout data is being fetched from the API.

The main workout library displays:

```text
Loading workouts...
```

while the data is loading.

### Empty States

The My Plan page provides clear empty states when there are no workouts in Today's Plan or Saved.

Users can return to the workout library and start adding workouts from there.

### Error Handling

The application includes custom handling for unknown routes and invalid workout IDs so users receive a clear not-found experience instead of an unhandled runtime error.

### Responsive Design

The application is designed to work across:

- Mobile
- Tablet
- Desktop

The layout, navigation, workout cards, details page, My Plan page, buttons, metrics, and footer adapt to different screen sizes.

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

## Deployment

The production version is deployed on **Vercel** from the `main` branch.

**Live URL:** [https://fit-log-chi-lyart.vercel.app/](https://fit-log-chi-lyart.vercel.app/)

The deployed application has been tested across the main pages and responsive layouts.

## GitHub

**Repository:** [https://github.com/joysoren-dev/B14-A6-Fit-Log](https://github.com/joysoren-dev/B14-A6-Fit-Log)

The project was developed through multiple meaningful Git commits covering:

- Next.js project setup
- Initial FitLog layout and navigation
- Hero section
- Workout API integration
- Workout details
- My Plan functionality
- Toast notifications
- Custom 404 handling
- Responsive improvements
- Error handling

## Author

**Joy Soren**

GitHub: [https://github.com/joysoren-dev](https://github.com/joysoren-dev)