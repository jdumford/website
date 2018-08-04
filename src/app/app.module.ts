import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RunningComponent } from './running/running.component';
import { SchoolComponent } from './school/school.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PhotosComponent } from './photos/photos.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { FooterComponent } from './footer/footer.component';
import { CodeComponent } from './code/code.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RunningComponent,
    SchoolComponent,
    NavbarComponent,
    PhotosComponent,
    BlogComponent,
    ContactComponent,
    MyStoryComponent,
    FooterComponent,
    CodeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
