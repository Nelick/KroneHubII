# KroneHub — Project Plan (Step by Step)

KroneHub is an internal hotel app designed to centralize daily operations and communication for a small boutique hotel (33 rooms).

✅ **Important:** This is **NOT** a booking / guest management system.  
KroneHub is an internal dashboard for employees and management to display and manage:

- ✅ Checklists & daily tasks
- ✅ Room cleaning statuses
- ✅ Employee schedules / planning
- ✅ Announcements & internal news
- ✅ Time Management (Clock In / Clock Out + hours tracking)

This document is written for beginner developers and is meant to be a clear roadmap with progressive steps.

---

## 1) Project Structure (Recommended)

This is the recommended folder structure for KroneHub (Next.js App Router + TypeScript).
It is organized to stay clean and scalable as the project grows.

```txt
kronehub/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx                # Global layout (Navbar, Sidebar, etc.)
│  │  ├─ page.tsx                  # Dashboard (Home / "Today view")
│  │  ├─ globals.css               # Global styles (Tailwind base)
│  │  │
│  │  ├─ rooms/
│  │  │  ├─ page.tsx               # Rooms status page
│  │  │  └─ components/            # Rooms-only components
│  │  │     ├─ RoomCard.tsx
│  │  │     ├─ RoomStatusBadge.tsx
│  │  │     └─ RoomStatusSelect.tsx
│  │  │
│  │  ├─ tasks/
│  │  │  ├─ page.tsx               # Tasks / Checklists page
│  │  │  └─ components/
│  │  │     ├─ TaskList.tsx
│  │  │     ├─ TaskItem.tsx
│  │  │     └─ TaskStatusSelect.tsx
│  │  │
│  │  ├─ schedule/
│  │  │  ├─ page.tsx               # Schedule / Planning page
│  │  │  └─ components/
│  │  │     ├─ WeekCalendar.tsx
│  │  │     └─ ShiftCard.tsx
│  │  │
│  │  ├─ announcements/
│  │  │  ├─ page.tsx               # Announcements / News page
│  │  │  └─ components/
│  │  │     ├─ AnnouncementCard.tsx
│  │  │     └─ AnnouncementForm.tsx
│  │  │
│  │  ├─ time/
│  │  │  ├─ page.tsx               # Time management (Clock In / Clock Out)
│  │  │  └─ components/
│  │  │     ├─ ClockStatusCard.tsx
│  │  │     ├─ ClockInButton.tsx
│  │  │     ├─ ClockOutButton.tsx
│  │  │     └─ WorkedHoursSummary.tsx
│  │  │
│  │  ├─ admin/                    # Manager / Admin-only pages (later)
│  │  │  ├─ page.tsx               # Admin overview (optional)
│  │  │  ├─ announcements/
│  │  │  │  └─ page.tsx            # Manage announcements (CRUD)
│  │  │  ├─ schedule/
│  │  │  │  └─ page.tsx            # Manage schedules (optional)
│  │  │  └─ time/
│  │  │     └─ page.tsx            # View employee time reports
│  │  │
│  │  └─ api/                      # API routes (optional if not using Server Actions)
│  │     ├─ rooms/route.ts
│  │     ├─ tasks/route.ts
│  │     ├─ announcements/route.ts
│  │     └─ time/route.ts
│  │
│  ├─ components/                  # Global reusable components (shared)
│  │  ├─ layout/
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  └─ PageHeader.tsx
│  │  ├─ ui/
│  │  │  ├─ Button.tsx
│  │  │  ├─ Input.tsx
│  │  │  ├─ Modal.tsx
│  │  │  └─ Badge.tsx
│  │  └─ common/
│  │     ├─ Loader.tsx
│  │     └─ ErrorMessage.tsx
│  │
│  ├─ lib/
│  │  ├─ db/                       # Prisma client + database helpers (Phase 3)
│  │  │  ├─ prisma.ts
│  │  │  └─ seed.ts
│  │  ├─ auth/                     # Auth helpers (Phase 4)
│  │  │  └─ auth.ts
│  │  ├─ utils/
│  │  │  ├─ formatDate.ts
│  │  │  ├─ time.ts                # time calculations (weekly/monthly/overtime)
│  │  │  └─ cn.ts
│  │  └─ constants/
│  │     ├─ roomStatus.ts
│  │     └─ taskStatus.ts
│  │
│  ├─ hooks/
│  │  ├─ useLocalStorage.ts
│  │  └─ useDebounce.ts
│  │
│  └─ styles/
│     └─ theme.css                 # optional theme overrides
│
├─ public/
│  ├─ logo.svg
│  └─ icons/
│
├─ prisma/                         # Prisma schema & migrations (Phase 3)
│  └─ schema.prisma
│
├─ package.json
├─ next.config.js
└─ README.md / PROJECT_PLAN.md
```



---

---

## 2) Goals

### Primary Goals

Provide employees with a simple “Today view” of what matters:

- What to do today (tasks)

- Room cleaning status updates

- Work schedule / planning

- Announcements from management

- Clock In / Clock Out (time tracking)

### Secondary Goals

- Build a clean full-stack structure (Next.js)

- Keep UI easy and fast on desktop + mobile

- Prepare a scalable base without over-engineering

---

## 3) Target Users & Roles

### Employee

- Can view rooms, tasks, schedules, announcements

- Can update tasks assigned to them (optional MVP)

- Can Clock In / Clock Out

### Manager / Admin

- Can post announcements

- Can manage tasks templates / checklists

- Can manage room statuses (or validate changes)

- Can view employee time tracking

- Can edit schedules (optional MVP)

---

## 4) Features Overview (Core Modules)

### 1. Dashboard

- “Today view” for employees

- Quick summary:
  
  - tasks
  
  - rooms status
  
  - announcements
  
  - time tracking status (working / not working)

---

### 2. Rooms Status

- List of rooms (33 rooms)

- Each room has a status:
  
  - Clean ✅
  
  - Dirty ❌
  
  - Cleaning 🧹
  
  - Out of Service 🚫 (optional)

- Optional notes per room

---

### 3. Daily Tasks / Checklists

- Daily checklist for each team (housekeeping, reception, etc.)

- Tasks have a status:
  
  - TODO
  
  - DOING
  
  - DONE

---

### 4. Schedule / Planning

- Weekly planning view

- Each employee can see their own shift(s)

- Manager can edit schedules (optional)

---

### 5. Announcements / News

- Management posts internal news

- Everyone can read

- Pinned announcements (optional)

Examples:

- “Important event today”

- “New payment rules starting from a specific date”

- “Special instructions for the week”

---

### 6. Time Management (Clock In / Clock Out)

Employees can track working hours easily:

✅ Clock In (start work)  
✅ Clock Out (end work)

The system automatically calculates:

- daily worked hours

- weekly worked hours

- monthly worked hours

- overtime hours (above expected hours)

- missing hours (below expected hours)

Designed to be extremely fast:

> “I just came in” → one click  
> “I just finished” → one click

---

## 5) Recommended Tech Stack

- **Next.js (App Router)**

- **TypeScript**

- **Database:** PostgreSQL (recommended) or SQLite (for MVP)

- **ORM:** Prisma

- **Auth:** Auth.js / NextAuth (later)

- **UI:** Tailwind CSS (+ optional component library later)

---

## 6) Step-by-Step Roadmap

> Each phase builds something visible and useful.  
> Don’t skip phases. Small progress beats chaos.

---

# Phase 0 — Project Setup ✅

### 0.1 Create Next.js Project

- Create project: `kronehub`

- Use TypeScript + App Router + Tailwind

- Run locally and confirm it works

✅ Done when:

- `npm run dev` works

- homepage loads in browser

### 0.2 Git + GitHub Workflow

- Initialize git

- Push repository to GitHub

- Use basic commits:
  
  - “setup”
  
  - “add feature”
  
  - “fix bug”

✅ Done when:

- repo is online

- you can work on multiple PCs safely

---

# Phase 1 — UI Foundation (No Database Yet)

### 1.1 Layout + Navigation

Create a simple layout:

- Top navigation or sidebar

- Pages:
  
  - Dashboard
  
  - Rooms
  
  - Tasks
  
  - Schedule
  
  - Announcements
  
  - Time

✅ Done when:

- navigation works

- each page loads

### 1.2 UI Design Basics

- clean and hotel-friendly

- readable

- mobile friendly

✅ Done when:

- pages look consistent

- UI works on phone width

---

# Phase 2 — First Working MVP (Mock Data)

### 2.1 Rooms Status MVP (Mock)

- List rooms (101, 102…)

- Status switch (Clean/Dirty/Cleaning)

- Optional “last updated” field

✅ Done when:

- status updates in UI

- data stays updated during the session

### 2.2 Tasks MVP (Mock)

- List tasks

- Mark tasks as done

- Optional: assign to employees

✅ Done when:

- tasks update correctly in UI

### 2.3 Announcements MVP (Mock)

- List announcements (title, message, date)

- Optional pinned tag

✅ Done when:

- announcements display properly

### 2.4 Time Tracking MVP (Mock)

- “Clock In” button

- “Clock Out” button

- Show:
  
  - current status (Working / Not working)
  
  - today’s total time (basic)

✅ Done when:

- time tracking works during the session

---

# Phase 3 — Database (Real Data)

### 3.1 Setup Database + Prisma

- Install Prisma

- Setup database (PostgreSQL or SQLite)

- Create models:
  
  - Room
  
  - Task
  
  - Announcement
  
  - Employee (optional for MVP)
  
  - TimeEntry (for time tracking)

✅ Done when:

- migrations work

- Prisma Studio shows data

### 3.2 Connect Rooms to DB

- Load rooms from DB

- Update room status in DB

✅ Done when:

- refresh keeps room status

### 3.3 Connect Tasks to DB

- Save tasks in DB

- Update task status in DB

✅ Done when:

- tasks persist after refresh

### 3.4 Connect Announcements to DB

- CRUD announcements

- Manager can create posts

✅ Done when:

- new announcements persist and display

### 3.5 Connect Time Tracking to DB

- Store Clock In / Clock Out as TimeEntry records

- Calculate totals from DB entries

✅ Done when:

- refresh keeps time tracking correct

- totals are correct (daily/weekly/monthly)

---

# Phase 4 — Authentication & Roles

### 4.1 Add Login

- Sign-in system

- Protect pages (auth required)

✅ Done when:

- users must login to use the app

### 4.2 Add Roles & Permissions

- Employee vs Manager

- Manager-only actions:
  
  - create announcements
  
  - manage templates
  
  - view everyone’s time tracking
  
  - edit schedules (optional)

✅ Done when:

- employees cannot access admin actions

---

# Phase 5 — Schedule Module

### 5.1 Basic Schedule View

- Weekly schedule view

- Per employee view

✅ Done when:

- employees see their shifts

### 5.2 Manager Schedule Editing (Optional)

- Manager can assign shifts

- Save shifts in DB

✅ Done when:

- schedule persists after refresh

---

# Phase 6 — Time Management (Advanced Calculations)

> MVP time tracking is already done in Phase 2 & 3.  
> This phase improves it into a real work-hour system.

### 6.1 Core Rules

- Prevent double clock-in

- Prevent clock-out without clock-in

- Handle long shifts correctly

### 6.2 Calculations

- Daily total hours

- Weekly total hours (Mon → Sun)

- Monthly total hours

- Overtime hours:
  
  - above expected hours (ex: 8h)

- Missing hours:
  
  - below expected hours

✅ Done when:

- totals are accurate and reliable

### 6.3 Manager Overview (Optional)

- Employee list with weekly/monthly totals

- Overtime indicators

✅ Done when:

- manager can quickly review worked hours

---

# Phase 7 — Polish & Quality

### 7.1 UX Improvements

- loading states

- error states

- toast notifications

- clean empty states

### 7.2 Audit / History (Optional)

- Track who changed room status

- Track who completed tasks

- Track who clocked in/out

### 7.3 Performance

- optimize lists

- reduce unnecessary re-renders

---

# Phase 8 — Deployment

### 8.1 Deploy MVP

- Deploy to Vercel (fastest) or self-host

- Setup environment variables securely

✅ Done when:

- app runs online with a stable URL

### 8.2 Production Readiness

- HTTPS

- database backup strategy

- admin accounts management

---

## 7) Suggested MVP Milestone ✅

MVP = “usable inside the hotel”

- Rooms status works (persistent)

- Daily tasks work (persistent)

- Announcements work (persistent)

- Time tracking works (persistent)

- Login is optional but recommended

---

## 8) Beginner Notes (How to avoid getting stuck)

✅ Build one small feature end-to-end before starting the next one.

Example:  
Rooms UI → Rooms DB → Update action → UI refresh → DONE ✅

Avoid starting too early:

- advanced auth systems

- complex schedule editing

- fancy animations

- too many features at once

---

## 9) Project Status Tracking

### Current Phase

- Phase 0 — Setup

- Phase 1 — UI Foundation

- Phase 2 — Mock Data MVP

- Phase 3 — Database Integration

- Phase 4 — Auth & Roles

- Phase 5 — Schedule Module

- Phase 6 — Time Management Advanced

- Phase 7 — Polish

- Phase 8 — Deployment

---

## 10) Next Actions (Start Here)

1. Create Next.js pages and navigation

2. Build Rooms status UI (mock)

3. Build Tasks UI (mock)

4. Build Announcements UI (mock)

5. Build Time Tracking UI (mock)

6. Add Prisma + database and persist everything

---

## 11) Naming / Status Rules

### Room Status

- CLEAN

- DIRTY

- CLEANING

- OUT_OF_SERVICE (optional)

### Task Status

- TODO

- DOING

- DONE

---

## End

KroneHub is a simple but powerful internal hotel tool:  
✅ Clear daily information  
✅ Better team communication  
✅ Less confusion and fewer mistakes  
✅ Centralized workflow for a small boutique hotel
