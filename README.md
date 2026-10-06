# Employee Management System — Angular Frontend

An Angular 22 frontend application integrated with an ASP.NET Core Web API for managing employee records through a complete CRUD workflow.

This project was developed as my first Angular application and as a practical step toward building full-stack applications using Angular and .NET.

## Tech Stack

* Angular 22
* TypeScript
* ASP.NET Core Web API (.NET 8)
* Entity Framework Core
* SQL Server
* REST APIs

## Features

* View employee records
* Add new employees
* Edit employee information
* Delete employees
* REST API integration
* Asynchronous HTTP communication using `HttpClient` and Observables
* Angular service-based API communication
* Responsive user interface

## Application Architecture

```text
Angular UI
    ↓
EmployeeService
    ↓
HttpClient
    ↓
ASP.NET Core Web API
    ↓
Service Layer
    ↓
Entity Framework Core
    ↓
SQL Server
```

The Angular application communicates with the ASP.NET Core API through HTTP requests. The backend handles business logic and database operations using Entity Framework Core and SQL Server.

## CRUD Workflow

The application supports the complete employee management lifecycle:

```text
Create → Read → Update → Delete
```

Changes made through the Angular interface are sent to the ASP.NET Core API and persisted in the SQL Server database.

## Project Structure

```text
src/
└── app/
    ├── app.ts
    ├── app.html
    ├── app.css
    ├── app.config.ts
    ├── app.routes.ts
    └── employee.ts
```

`employee.ts` contains the `Employee` model and `EmployeeService`, which handles communication with the backend API.

## Development Server

Install the project dependencies:

```bash
npm install
```

Start the Angular development server:

```bash
ng serve
```

Open the application at:

```text
http://localhost:4200/
```

## Backend

This frontend requires the corresponding ASP.NET Core Web API to be running.

Backend repository:

`EmployeeManagement-ASP.NET-Core`

The Angular application is configured to communicate with the backend API through:

```text
https://localhost:7049/api/Employees
```

## Future Improvements

Planned improvements include:

* Angular routing and feature-based component structure
* Reactive Forms
* Advanced form validation
* Loading and error states
* Authentication and authorization
* Pagination and search
* Improved frontend architecture
* Automated testing

## Purpose

This project represents my first practical Angular application and demonstrates the integration of an Angular frontend with an ASP.NET Core backend to create a complete end-to
