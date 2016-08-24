/**
 * Created by bhargavib on 13-04-2016.
 */
System.register(['angular2/core', './app.EmployeeDetailsSchema.component'], function(exports_1, context_1) {
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
    var core_1, app_EmployeeDetailsSchema_component_1;
    var EmployeeDetailcomponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_EmployeeDetailsSchema_component_1_1) {
                app_EmployeeDetailsSchema_component_1 = app_EmployeeDetailsSchema_component_1_1;
            }],
        execute: function() {
            EmployeeDetailcomponent = (function () {
                function EmployeeDetailcomponent() {
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', app_EmployeeDetailsSchema_component_1.EmployeeDetailsSchemacomponent)
                ], EmployeeDetailcomponent.prototype, "employeeDetails", void 0);
                EmployeeDetailcomponent = __decorate([
                    core_1.Component({
                        selector: 'employee-details',
                        template: "\n    <div *ngIf=\"employeeDetails\">\n      <p>SelectedEmployee is : {{employeeDetails.name}} </p>\n      <div><input [(ngModel)] = \"employeeDetails.name\"></div>\n     </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EmployeeDetailcomponent);
                return EmployeeDetailcomponent;
            }());
            exports_1("EmployeeDetailcomponent", EmployeeDetailcomponent);
        }
    }
});
//# sourceMappingURL=app.EmployeeDetails.component.js.map