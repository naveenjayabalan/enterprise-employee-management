import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee'
import { EmployeeTableRow } from "../employee-table-row/employee-table-row";

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule, EmployeeTableRow],
  templateUrl: './employee-table.html',
  styleUrl: './employee-table.scss',
})
export class EmployeeTable {

  @Input() employees: Employee[] = [];

  @Output()
deleteEmployee = new EventEmitter<number>();

@Output()
editEmployee = new EventEmitter<number>();

onEditEmployee(id: number): void {
   console.log('Table Edit', id);
    this.editEmployee.emit(id);
}

onDeleteEmployee(id: number): void {
  console.log('Table Component', id);
  this.deleteEmployee.emit(id);
}
}
