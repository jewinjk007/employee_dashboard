import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
	{ path: '', redirectTo: 'employees', pathMatch: 'full' },
	{
		path: 'employees',
		loadComponent: () => import('./components/employee-list/employee-list.component').then((m) => m.EmployeeListComponent),
		canActivate: [authGuard]
	},
	{
		path: 'employees/add',
		loadComponent: () => import('./components/add-edit-employee/add-edit-employee.component').then((m) => m.AddEditEmployeeComponent),
		canActivate: [authGuard]
	},
	{
		path: 'employees/:id',
		loadComponent: () => import('./components/employee-detail/employee-detail.component').then((m) => m.EmployeeDetailComponent),
		canActivate: [authGuard]
	},
	{
		path: 'employees/:id/edit',
		loadComponent: () => import('./components/add-edit-employee/add-edit-employee.component').then((m) => m.AddEditEmployeeComponent),
		canActivate: [authGuard]
	},
	{ path: '**', redirectTo: 'employees' }
];
