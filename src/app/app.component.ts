import { Component } from '@angular/core';
import { GithubUser } from './model/github-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public User:any = GithubUser

  constructor(){
    this.User = new GithubUser(false,null,'','');
  }
}
