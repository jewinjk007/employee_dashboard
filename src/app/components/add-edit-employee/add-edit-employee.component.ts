import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-add-edit-employee',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatIconModule],
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.css']
})
export class AddEditEmployeeComponent implements OnInit {
  form = this.fb.group({
    id: [null],
    name: ['', [Validators.required, Validators.minLength(3)]],
    role: ['', [Validators.required]],
    department: ['', [Validators.required]],
    salary: ['', [Validators.required, Validators.min(0)]],
    email: ['', [Validators.required, Validators.email]],
    joiningDate: ['', [Validators.required]]
  });

  editing = false;

  constructor(private fb: FormBuilder, private svc: EmployeeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = Number(idParam);
      this.editing = true;
      this.svc.getById(id).subscribe({ next: (e) => this.form.patchValue(e as any), error: (err) => console.error(err) });
    }
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    let val = this.form.value as unknown as Partial<Employee>;
    if (this.editing && val.id != null) {
      const id = Number(val.id);
      const updatePayload = { ...val, salary: Number(val.salary) };
      this.svc.update(id, updatePayload).subscribe({ 
        next: () => this.router.navigate(['/employees']), 
        error: (e) => console.error('Update error:', e) 
      });
    } else {
      // Remove id field when adding new employee to allow server to auto-generate ID
      const { id, ...newEmployee } = val;
      const addPayload = { ...newEmployee, salary: Number(newEmployee.salary) };
      this.svc.add(addPayload as Partial<Employee>).subscribe({ 
        next: () => this.router.navigate(['/employees']), 
        error: (e) => console.error('Add error:', e) 
      });
    }
  }
}
