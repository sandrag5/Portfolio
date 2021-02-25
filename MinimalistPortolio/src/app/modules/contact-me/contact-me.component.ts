import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent implements OnInit {

  user:string = 'sandragarcsh';
  domain:string = '@gmail.com';

  mailText:string = "";

  constructor() { }

  ngOnInit(): void {
  }

   mailMe() {
  		this.mailText = "mailto:" + this.user + this.domain;
    	window.location.href = this.mailText;
  	}

}
