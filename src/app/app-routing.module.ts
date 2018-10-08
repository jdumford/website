import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './posts/posts.component';
import { PhotosComponent } from './photos/photos.component';
import { ContactComponent } from './contact/contact.component';
import { MyStoryComponent } from './my-story/my-story.component';
import { CodeComponent } from './code/code.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'blog',
        component: BlogComponent
    },
    {
        path: 'blog/:title',
        component: PostsComponent
    },
    {
        path: 'photos',
        component: PhotosComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'my-story',
        component: MyStoryComponent
    },
    {
        path: 'code',
        component: CodeComponent
    },
    {
        path: 'data',
        component: DataComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
