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

}
