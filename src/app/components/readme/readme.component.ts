import { Component, OnInit, Input } from '@angular/core';
import { GithubUser } from '../../model/github-user';
import { GithubService } from '../../services/github.service';

@Component({
    selector: 'readme',
    templateUrl: './readme.component.html'
})

export class ReadmeComponent implements OnInit {

  @Input() githubUser: GithubUser

    constructor(private _githubService: GithubService) {
    }

    ngOnInit(): void {
        //console.log(this.GitHubUser.content);
    }

}
