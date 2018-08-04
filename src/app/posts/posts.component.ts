import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
// import * as data from '../../assets/posts/blogs.json';
declare var require: any;
const data = require('../../assets/posts/blogs.json');

// let blog = {
//     title: '',
//     body: ''
// };

// let fs = require('fs');

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

    title$: string;
    blog$: Object;

//   constructor(private route: ActivatedRoute, private http: HttpClient) {
//     // this.route.params.subscribe(params => this.title$ = params.title);
//   }
    constructor(private route: ActivatedRoute) {
        this.route.params.subscribe(params => this.title$ = params.title);
    }

  ngOnInit() {
      this.blog$ = data[this.title$];
  }

}
