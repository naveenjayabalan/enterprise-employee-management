import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee'

@Component({
  selector: 'app-employee-table-row',
  imports: [CommonModule],
  templateUrl: './employee-table-row.html',
  styleUrl: './employee-table-row.scss',
})
export class EmployeeTableRow {

  @Input() 
  employee!: Employee;

  @Output()
  deleteEmployee = new EventEmitter<number>();
  @Output()
  editEmployee = new EventEmitter<number>();

onEdit(): void {
   console.log('Row Edit');
  this.editEmployee.emit(this.employee.id);
}

  onDelete(): void {
   console.log('Row Component');
    this.deleteEmployee.emit(this.employee.id);
  }

}
