# Employee Management Dashboard

A comprehensive Employee Management system built with **Angular 17+**, **TypeScript**, and **Angular Material**. This project demonstrates modern Angular development practices including standalone components, reactive programming, and full CRUD operations with a mock JSON Server backend.

## Overview

This Employee Dashboard provides a complete employee management solution with an intuitive Material Design interface. It showcases best practices for Angular development with features like lazy loading, route guards, custom pipes and directives, http interceptors, and reactive forms validation.

---

## Frontend Features

### **UI & Components**
- **Modern Angular 17+ Architecture** - Built with standalone components and latest Angular features
- **Angular Material Design** - Professional Material Design UI components and theming
- **Responsive Layout** - Mobile-friendly responsive design
- **Custom SCSS Theme** - Custom dark/light theme configuration in `custom-theme.scss`

### **Core Components**
- **Employee List Component** - Display all employees in a Material Data Table with sorting and pagination
- **Employee Detail Component** - View individual employee information with formatted data
- **Add/Edit Employee Component** - Create new employees or edit existing ones with full validation
- **Navigation Bar** - Global navigation and branding
- **Taskbar Component** - Application footer/status bar

### **Advanced Features**
- **Lazy Loading** - Routes use `loadComponent()` for optimal performance
- **Custom Department Filter Pipe** - Filter employees by department with case-insensitive matching
- **High Salary Highlight Directive** - Automatically highlight employees earning above specified threshold (default: $80,000)
- **Counter Service** - Shared state management for counters and metrics
- **Form Validation** - Both template-driven and reactive form validation with comprehensive error handling

### **Security & Interceptors**
- **Auth Route Guard** - Protects routes with simulated authentication checks
- **HTTP Logging Interceptor** - Logs all HTTP requests and responses with performance metrics

### **Routing**
- Lazy-loaded route-based component loading
- Protected routes with `authGuard`
- Routes:
  - `/` → Employee List (redirects from root)
  - `/employees` → Employee List (protected)
  - `/employees/add` → Add New Employee (protected)
  - `/employees/:id` → Employee Detail View (protected)
  - `/employees/:id/edit` → Edit Employee (protected)
  - `**` → Wildcard redirect to employees list

---

## Backend Features

### **Mock API Server**
- **JSON Server** - Running on `http://localhost:3000`
- **Database File** - `db.json` contains employee seed data
- **RESTful API** - Full REST API endpoints with support for CRUD operations

### **Employee Data Model**
```typescript
interface Employee {
  id: number;
  name: string;
  role: string;
  department: string;
  salary: number;
  email: string;
  joiningDate: string;
}
```

### **API Endpoints**
All endpoints operate on `http://localhost:3000/employees`:

- `GET /employees` - Fetch all employees
- `GET /employees/:id` - Fetch a specific employee
- `POST /employees` - Create a new employee
- `PUT /employees/:id` - Update an employee
- `DELETE /employees/:id` - Delete an employee

### **Service Layer**
- **EmployeeService** - Centralized service for all API operations
- **RxJS Integration** - Uses Observables for reactive data flow
- **Error Handling** - Comprehensive error handling with fallback messages
- **HttpClient** - Angular's modern HTTP client for API communication

---

## Tech Stack

### Frontend
- **Angular 17.3.12** - Modern web application framework
- **TypeScript 5.4.5** - Strongly typed JavaScript
- **Angular Material 17.3.10** - Material Design components
- **Angular CDK 17.3.10** - Component Development Kit
- **RxJS 7.8.1** - Reactive programming library
- **SCSS** - Advanced CSS styling

### Backend
- **JSON Server** - Mock REST API server
- **Node.js** - JavaScript runtime

---

## Dependencies

### Core Dependencies
```json
{
  "@angular/core": "17.3.12",
  "@angular/common": "17.3.12",
  "@angular/router": "17.3.12",
  "@angular/forms": "17.3.12",
  "@angular/material": "17.3.10",
  "@angular/animations": "17.3.12",
  "rxjs": "7.8.1",
  "typescript": "5.4.5"
}
```

### Development Dependencies
- @angular/cli
- @angular-devkit/build-angular
- @angular/compiler-cli

---

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
```bash
npm install
```

2. **Start the API server** (in one terminal)
```bash
npm run start:api
```
The API will be available at `http://localhost:3000`

3. **Start the Angular dev server** (in another terminal)
```bash
npm start
```
The application will be available at `http://localhost:4200`

### Available Scripts

- `npm start` - Run Angular development server
- `npm run start:api` - Start JSON Server API
- `npm run build` - Build for production
- `npm run watch` - Build in watch mode
- `npm test` - Run unit tests

---

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── add-edit-employee/      # Add/Edit employee form
│   │   ├── employee-dashboard/     # Main dashboard layout
│   │   ├── employee-detail/        # Individual employee view
│   │   ├── employee-list/          # Employee table list
│   │   ├── navbar/                 # Navigation bar
│   │   └── taskbar/                # Application footer
│   ├── core/                       # Core module configuration
│   ├── directives/                 # Custom directives (high-salary highlight)
│   ├── guards/                     # Route guards (auth guard)
│   ├── interceptors/               # HTTP interceptors (logging)
│   ├── models/                     # TypeScript interfaces (Employee model)
│   ├── pipes/                      # Custom pipes (department filter)
│   ├── services/                   # Services (EmployeeService, CounterService)
│   ├── app.component.*             # Root component
│   ├── app.config.ts               # App configuration
│   ├── app.routes.ts               # Route definitions
│   └── counter.service.ts          # Counter state management
├── assets/                         # Static assets
├── custom-theme.scss               # Custom Material theme
├── styles.css                      # Global styles
└── index.html                      # Main HTML file
db.json                             # Mock database
angular.json                        # Angular configuration
package.json                        # Dependencies and scripts
tsconfig.json                       # TypeScript configuration
```

---

## Key Implementation Highlights

**Standalone Components** - Modern Angular architecture without NgModule  
**Lazy Loading** - Components loaded on-demand for better performance  
**Type Safety** - Full TypeScript implementation with interfaces  
**Reactive Forms** - Form validation with Reactive Forms API  
**Custom Pipes** - Department filter pipe for data transformation  
**Custom Directives** - High-salary directive for conditional styling  
**HTTP Interceptors** - Logging interceptor for request/response monitoring  
**Route Guards** - Authentication simulation with canActivate guards  
**Material Design** - Professional UI with Angular Material components  
**RxJS Operators** - Reactive programming with Observables and operators  
**Error Handling** - Comprehensive error handling throughout  
**RESTful API** - Full CRUD operations with JSON Server mock API  
