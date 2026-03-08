import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee.model';

@Pipe({ name: 'departmentFilter', pure: true, standalone: true })
export class DepartmentFilterPipe implements PipeTransform {
  transform(employees: Employee[] | null | undefined, department?: string): Employee[] {
    if (!employees) return [];
    if (!department) return employees;
    const dept = department.toLowerCase();
    return employees.filter((e) => e.department?.toLowerCase().includes(dept));
  }
}
