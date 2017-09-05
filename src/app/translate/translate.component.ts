import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss'],
  providers: [TranslateService]
})
export class TranslateComponent implements OnInit {

	data: String;
	text = "Nothing uploaded";
	constructor(private translate: TranslateService) { 
		setTimeout(this.show,3000);
	}
	
	ngOnInit() {

	}

	show(){
		
	}


}
