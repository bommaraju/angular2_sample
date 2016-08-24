/**
 * Created by bhargavib on 12-04-2016.
 */

import {Component} from 'angular2/core';
import {EmployeeDetailsSchemacomponent} from './app.EmployeeDetailsSchema.component'
import {EmployeeDetailcomponent} from './app.EmployeeDetails.component';
import {Service as EmployeeService} from './app.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'my-app',
    directives: [EmployeeDetailcomponent], // directives
    providers: [EmployeeService], //providers array tells Angular to create a fresh instance of the Service when it creates a new AppComponent (this way) and also we need to add a constructor
    template: `<div><input [(ngModel)] = masterDetails.name></div> <div> <input [(ngModel)] = masterDetails.age> </div>
    <label>{{masterDetails.name}}</label>
    <label>{{masterDetails.age}}</label>
    <input type="button" name="insert" value="Push" (click) = "insertNewItem(masterDetails.name,masterDetails.age);">
    <li *ngFor="#employee of EmployeeDetailsArrayRef" (click)="onClickInfo(employee);">
    <span>{{employee.age}} - {{employee.name}}</span>
    </li>
    <employee-details [employeeDetails]="selectedEmployee"></employee-details>` // using directives
})

export class AppComponent implements OnInit {

    constructor(private _employeeservice:EmployeeService) {
    }

    masterDetails:EmployeeDetailsSchemacomponent = {
        age: 25,
        name: 'satya'
    };

    EmployeeDetailsArrayRef:EmployeeDetailsSchemacomponent[];

    public selectedEmployee:EmployeeDetailsSchemacomponent;

    onClickInfo(x) {
        this.selectedEmployee = x;
    }
  
    getEmployeeData() {
        this._employeeservice.getEmployeeData().then(EmployeeDetailsArrayRef => this.EmployeeDetailsArrayRef = EmployeeDetailsArrayRef);
    }

    ngOnInit() {
        this.getEmployeeData();
    }
}

