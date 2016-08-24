/**
 * Created by bhargavib on 13-04-2016.
 */

import {Component, Input} from 'angular2/core';
import {EmployeeDetailsSchemacomponent} from './app.EmployeeDetailsSchema.component'

@Component({
    selector: 'employee-details',
    template: `
    <div *ngIf="employeeDetails">
      <p>SelectedEmployee is : {{employeeDetails.name}} </p>
      <div><input [(ngModel)] = "employeeDetails.name"></div>
     </div>`
})

export class EmployeeDetailcomponent {
    @Input()
    employeeDetails : EmployeeDetailsSchemacomponent;
}
