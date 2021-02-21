import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss']
})
export class LandingViewComponent implements OnInit {

	showmore:boolean=false;

  	constructor() { }

  	ngOnInit(): void { 
		this.showmore=false;
  	}

  	showMoreInformation() {
  		if(this.showmore == false) {
			this.showmore=true;
  		} else  {
  			this.showmore=false;
  		}
  	}

}
