import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { ReadmeComponent } from './components/readme/readme.component';
import { MarkdownModule, MarkdownService, MarkedOptions } from 'ngx-markdown';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    UserSearchComponent,
    ReadmeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MarkdownModule.forRoot()
  ],
  providers: [GithubService, MarkdownService, MarkedOptions],
  bootstrap: [AppComponent]
})
export class AppModule { }
