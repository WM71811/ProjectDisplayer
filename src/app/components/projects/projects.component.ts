import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GithubUser } from '../../model/github-user';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  @Input() githubUser: GithubUser;
  @Output() userUpdated: EventEmitter<GithubUser> = new EventEmitter<GithubUser>();

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    //console.log(this.githubUser);}

  }

  toReadme(name: string) {
      this._githubService.getReadme(name).subscribe((readme:Response) => {
      console.log(JSON.stringify(readme));
      console.log((<any>readme).content);
      this.githubUser.content = atob((<any>readme).content);
      this.userUpdated.emit(this.githubUser);
      }, (err) => {
         this.githubUser.content = "Readme is empty";
         this.userUpdated.emit(this.githubUser);
         },
      );

      //this.router.navigate(['/readme'], { queryParams: { repoName: name, userName: this.githubUser.userName } });
    }

}
