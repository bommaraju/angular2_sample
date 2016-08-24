/**
 * Created by bhargavib on 12-04-2016.
 */
System.register(['angular2/core', './app.EmployeeDetails.component', './app.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, app_EmployeeDetails_component_1, app_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_EmployeeDetails_component_1_1) {
                app_EmployeeDetails_component_1 = app_EmployeeDetails_component_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_employeeservice) {
                    this._employeeservice = _employeeservice;
                    this.masterDetails = {
                        age: 25,
                        name: 'satya'
                    };
                }
                AppComponent.prototype.onClickInfo = function (x) {
                    this.selectedEmployee = x;
                };
                /* insertNewItem(name,age)
                 {
                     EmployeeDetails.push({"age":age,"name":name)});
                 }*/
                AppComponent.prototype.getEmployeeData = function () {
                    var _this = this;
                    this._employeeservice.getEmployeeData().then(function (EmployeeDetailsArrayRef) { return _this.EmployeeDetailsArrayRef = EmployeeDetailsArrayRef; });
                };
                AppComponent.prototype.ngOnInit = function () {
                    this.getEmployeeData();
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [app_EmployeeDetails_component_1.EmployeeDetailcomponent],
                        providers: [app_service_1.Service],
                        template: "<div><input [(ngModel)] = masterDetails.name></div> <div> <input [(ngModel)] = masterDetails.age> </div>\n    <label>{{masterDetails.name}}</label>\n    <label>{{masterDetails.age}}</label>\n    <input type=\"button\" name=\"insert\" value=\"Push\" (click) = \"insertNewItem(masterDetails.name,masterDetails.age);\">\n    <li *ngFor=\"#employee of EmployeeDetailsArrayRef\" (click)=\"onClickInfo(employee);\">\n    <span>{{employee.age}} - {{employee.name}}</span>\n    </li>\n    <employee-details [employeeDetails]=\"selectedEmployee\"></employee-details>" // using directives
                    }), 
                    __metadata('design:paramtypes', [app_service_1.Service])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//tuesday - binding , displaying data in template, data array, click events
//wednesday - divide everything into different modules like use directives,services,dependency Injection
//# sourceMappingURL=app.component.js.map