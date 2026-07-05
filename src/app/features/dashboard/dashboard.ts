import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeTable } from '../employee/employee-table/employee-table'

@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, EmployeeTable],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard implements OnInit  {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService
) {}

ngOnInit(): void {
    this.employees = this.employeeService.getEmployees();
}

}
