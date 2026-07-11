import { Injectable } from '@angular/core';
import { Employee } from '../models/employee'


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  constructor() {}
  private employees: Employee[] = [
  {
    id: 1,
    name: 'Naveen',
    department: 'IT',
    salary: 70000
  },
  {
    id: 2,
    name: 'Kumar',
    department: 'HR',
    salary: 50000
  },
  {
    id: 3,
    name: 'Arun',
    department: 'Finance',
    salary: 60000
  }
];

getEmployees(): Employee[] {
  return this.employees;
}

deleteEmployee(id: number): void {
  const index = this.employees.findIndex(emp => emp.id === id); 
  if (index !== -1) {
    this.employees.splice(index, 1);
  }

}

addEmployee(employee: Employee): void {
  const maxId = this.employees.length > 0
    ? Math.max(...this.employees.map(emp => emp.id))
    : 0;
  employee.id = maxId + 1;
  this.employees.push(employee);
}

updateEmployee(employee: Employee): void {
  const index = this.employees.findIndex(emp => emp.id === employee.id);  
  if (index !== -1) {
    this.employees[index] = employee;
  }
}
}
