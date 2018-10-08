import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';
import { MatSelectModule, MatInputModule, MatButtonModule } from '@angular/material';
import { MatCardModule, MatGridListModule, MatListModule } from '@angular/material';

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
import { DataComponent } from './data/data.component';


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
    PostsComponent,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
