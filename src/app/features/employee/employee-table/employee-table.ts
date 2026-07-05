import { Component, Input } from '@angular/core';
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
}
