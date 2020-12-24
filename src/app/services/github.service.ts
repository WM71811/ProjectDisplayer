import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class GithubService {
    private userName : string;
    private clientId: string ='';
    private clientSecret: string ='';
    private findUserUrl = 'https://api.github.com/users/[userName]?'+ this.clientId + this.clientSecret;
    private findUserProjectsUrl = 'https://api.github.com/users/[userName]/repos?' + this.clientId + this.clientSecret;
    private findReadmeUrl = 'https://api.github.com/repos/[userName]/[project]/readme?' + this.clientId + this.clientSecret;

    constructor(private _http:HttpClient){
        let options =  { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        this.userName = '';
    }

    getUser(){
        if(this.userName){
            return this._http.get(this.findUserUrl.replace('[userName]', this.userName))
        }
    }

    getProjects(){
        if(this.userName){
            return this._http.get(this.findUserProjectsUrl.replace('[userName]', this.userName))
        }
    }

    getReadme(projectName: string) {
        if (this.userName) {
            return this._http.get(this.findReadmeUrl.replace('[userName]', this.userName)
                  .replace('[project]', projectName))
        }
    }

    updateUser(userName:string){
           this.userName = userName
    }

    private handleError(error:any){
        if (error.status === 401) {
            return Observable.throw(error.status);
        } else {
            return Observable.throw(error.status || 'Server error');
        }
    }
}
