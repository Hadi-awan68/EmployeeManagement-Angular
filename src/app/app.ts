import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { EmployeeService, Employee } from './employee';
import { CurrencyPipe } from '@angular/common';

@Component({
  imports: [RouterOutlet, FormsModule, CurrencyPipe],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  newEmployee: Omit<Employee, 'id'> = {
    name: '',
    email: '',
    department: '',
    salary: 0,
  };
  employeeService = inject(EmployeeService);
  employees: Employee[] = [];
  selectedEmployee: Employee | null = null;

  editEmployee(employee: Employee) {
    this.selectedEmployee = { ...employee };
  }

  saveEmployee() {
    const employee = this.selectedEmployee;

    if (!employee) {
      return;
    }

    this.employeeService.updateEmployee(employee).subscribe({
      next: (updatedEmployee) => {
        this.loadEmployees();

        this.selectedEmployee = null;
      },
      error: (error) => {
        console.error('Failed to update employee:', error);
      },
    });
  }
  loadEmployees() {
    this.employeeService.getEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (error) => {
        console.error('Failed to load employees', error);
      },
    });
  }
  createEmployee() {
    this.employeeService.createEmployee(this.newEmployee).subscribe({
      next: (employee) => {
        this.loadEmployees();

        this.newEmployee = {
          name: '',
          email: '',
          department: '',
          salary: 0,
        };
      },
      error: (error) => {
        console.error('Failed to create employee:', error);
      },
    });
  }
  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee.id).subscribe({
      next: () => {
        this.loadEmployees();
      },
      error: (error) => {
        console.error('Failed to delete employee:', error);
      },
    });
  }
  cancelEdit() {
    this.selectedEmployee = null;
  }
  constructor() {
    this.loadEmployees();
  }
}
