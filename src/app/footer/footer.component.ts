import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.social-icon').hover(
        function() {
            $(this).children('.reg').css('display', 'none');
            $(this).children('.invert').css('display', 'inline-block');
            // let s: string = '.img-caption[img-id="' + $(this).attr('img-id') + '"]';
        },
        function() {
            $(this).children('.reg').css('display', 'inline-block');
            $(this).children('.invert').css('display', 'none');
        }
    );
  }

}
