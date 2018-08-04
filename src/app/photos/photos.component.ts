import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {


    constructor() { }

    ngOnInit() {
        $('.img-box').hover(
            function() {
                $(this).children('.img-caption').css('display', 'block');
                // let s: string = '.img-caption[img-id="' + $(this).attr('img-id') + '"]';
            },
            function() {
                $(this).children('.img-caption').css('display', 'none');
            }
        );
        // $('.grid-img').each(function() {
        //     let s: string = '.img-caption[img-id="' + $(this).attr('img-id') + '"]';
        //     let caption: any = $(s);
        //     let p: any = $(this).offset();
        //     console.log(p);
        //     caption.css('bottom', p.top + $(this).height());
        //     // caption.css('bottom', caption.height() + 200);
        //     caption.css('left', p.left);
        //     caption.width($(this).width());
        // });
    }

}
