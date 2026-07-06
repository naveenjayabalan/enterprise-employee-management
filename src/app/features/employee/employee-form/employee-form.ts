import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../../../models/employee'
import { ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.scss',
})
export class EmployeeForm implements OnInit, OnChanges {


@Input()
employee!: Employee;

  employeeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: [''],
      department: [''],
      salary: [0]
    });
  }

  @Output()
  saveEmployee = new EventEmitter<Employee>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['employee'] && this.employee && this.employeeForm) {
      this.employeeForm.patchValue(this.employee);
    }
  }

onSave(): void {
    if (this.employeeForm.valid) {
      const formData = this.employeeForm.getRawValue();
      const employeeData: Employee = {
        id: this.employee?.id || 0,
        name: formData.name,
        department: formData.department,
        salary: formData.salary
      };
      this.saveEmployee.emit(employeeData);
      console.log('Employee saved:', employeeData);
    } else {
      console.log('Form is invalid');
    }
}
}
