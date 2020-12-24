import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubUser } from '../../model/github-user';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
})

export class UserSearchComponent implements OnInit {

  @Input() githubUser: GithubUser
  @Output() userUpdated: EventEmitter<GithubUser> = new EventEmitter<GithubUser>();

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    if (this.githubUser) {
      this.githubUser.user = false;
      this.githubUser.content = '';
      if (this.githubUser.userName && this.githubUser.userName.length > 0) {
          this._githubService.getUser().subscribe(user => {
              this.githubUser.user = user;
              this.userUpdated.emit(this.githubUser);
          },(error) => {
                  this.githubUser.user = false;
              },
          );

          this._githubService.getProjects().subscribe(projects => {
              console.log(projects);
              this.githubUser.projects = projects;
              this.userUpdated.emit(this.githubUser);
          }, (error) => {
                  this.githubUser.user = false;
              },
          );

        }


  }
  }

  searchUser() {
        this.githubUser.content = '';
    if (this.githubUser.userName && this.githubUser.userName.length > 0) {
        this._githubService.updateUser(this.githubUser.userName);
        this._githubService.getUser().subscribe(user => {
            this.githubUser.user = user;
            this.userUpdated.emit(this.githubUser);
        },(error) => {
                this.githubUser.user = false;
            },
        );

        this._githubService.getProjects().subscribe(projects => {
            console.log(projects);
            this.githubUser.projects = projects;
            this.userUpdated.emit(this.githubUser);
        }, (error) => {
                this.githubUser.user = false;
            },
        );
    } else {
        this.githubUser.user = false;
    }
}

}
