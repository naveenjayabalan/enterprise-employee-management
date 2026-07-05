import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../../models/employee'

@Component({
  selector: 'app-employee-table-row',
  imports: [CommonModule],
  templateUrl: './employee-table-row.html',
  styleUrl: './employee-table-row.scss',
})
export class EmployeeTableRow {

  @Input() employees: Employee[] = [];
}
