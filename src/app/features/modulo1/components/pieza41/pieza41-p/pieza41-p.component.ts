import { Component, OnInit } from '@angular/core';
import { PostblogService } from '../services/postblog.service';

@Component({
  selector: 'app-pieza41-p',
  templateUrl: './pieza41-p.component.html',
  styleUrls: ['./pieza41-p.component.css']
})
export class Pieza41PComponent implements OnInit {
  post: any;
  constructor(private postblogService: PostblogService) { }

  ngOnInit(): void {
    this.postblogService.retornar()
      .subscribe(arg => this.post = arg);
  }


}
