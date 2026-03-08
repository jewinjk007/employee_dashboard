import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';
import { DepartmentFilterPipe } from '../../pipes/department-filter.pipe';
import { HighSalaryDirective } from '../../directives/high-salary.directive';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule, MatTooltipModule, FormsModule, DepartmentFilterPipe, HighSalaryDirective, MatCardModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  displayedColumns = ['id', 'name', 'role', 'department', 'salary', 'actions'];
  filterDept = '';

  constructor(private svc: EmployeeService) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.svc.getAll().subscribe({ next: (data) => (this.employees = data), error: (e) => console.error(e) });
  }

  delete(id: number) {
    if (!confirm('Delete employee?')) return;
    this.svc.delete(id).subscribe({ next: () => this.load(), error: (e) => console.error(e) });
  }
}
