import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GithubService {
    private userName : string;
    private clientIDAndSecret: string ='client_id=Iv1.1ee8def374fd5e8f '
        + '&client_secret=2edc825166f23d2adb7fc30a0579ba7da734f682';
    private findUserUrl = 'https://api.github.com/users/[userName]?'+ this.clientIDAndSecret;
    private findUserProjectsUrl = 'https://api.github.com/users/[userName]/repos?' + this.clientIDAndSecret;
    private findReadmeUrl = 'https://api.github.com/repos/[userName]/[project]/readme?' + this.clientIDAndSecret;

    constructor(private _http:HttpClient){
        let options =  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.userName = '';
    }

    findUser(){
        if(this.userName){
            return this._http.get(this.findUserUrl.replace('[userName]', this.userName))
        }
    }

    findProjects(){
        if(this.userName){
            return this._http.get(this.findUserProjectsUrl.replace('[userName]', this.userName))
        }
    }

    findReadme(projectName: string) {
        if (this.userName) {
            return this._http.get(this.findReadmeUrl.replace('[userName]', this.userName)
                  .replace('[project]', projectName))
        }
    }

    updateUser(userName:string){
           this.userName = userName
    }

    private handleError(error:any){
            return Observable.throw(error.status || 'Server error');
    }
}
