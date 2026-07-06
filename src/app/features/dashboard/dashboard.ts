import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeTable } from '../employee/employee-table/employee-table'
import { EmployeeForm } from '../employee/employee-form/employee-form'
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule, EmployeeTable, EmployeeForm],
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

onDeleteEmployee(id: number): void {
  console.log("Row ID number"+  id);
  const index = this.employees.findIndex(emp => emp.id === id);
  if (index > -1) {
    this.employees.splice(index, 1);
    console.log(`Employee with ID ${id} deleted successfully`);
  }
}

selectedEmployee!: Employee;

onEditEmployee(id: number): void {

    const employee =
        this.employees.find(emp => emp.id === id);

    if (employee) {
        this.selectedEmployee = { ...employee };
        console.log(this.selectedEmployee);
    }

}

}
