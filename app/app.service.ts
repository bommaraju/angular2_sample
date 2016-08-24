/**
 * Created by bhargavib on 13-04-2016.
 */
import {Injectable} from 'angular2/core';
import {EmployeeDetails} from './app.EmployeeMockData';

@Injectable()
export class Service {
    getEmployeeData(){
        return Promise.resolve(EmployeeDetails);
    }

}
