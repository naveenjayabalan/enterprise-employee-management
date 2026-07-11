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
 this.employeeService.deleteEmployee(id);
}

selectedEmployee: Employee | undefined;

onEditEmployee(id: number): void {
  const employee = this.employees.find(emp => emp.id === id);
  if (employee) {
    this.selectedEmployee = { ...employee };
  }

}

onSaveEmployee(employee: Employee): void {

   const index = this.employees.findIndex(
        emp => emp.id === employee.id
    );
  if (index !== -1) {
    this.employeeService.addEmployee(employee);
  } else {
    this.employeeService.updateEmployee(employee);
  }
   this.selectedEmployee = undefined; 
}

}
