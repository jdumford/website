import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrls: ['./running.component.css']
})
export class RunningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.img-thumbnail').mouseenter(
          function() {
            $(this).animate({width: '0px'});
          }
      );
  }

}
