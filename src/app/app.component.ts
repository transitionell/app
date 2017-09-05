import { Router } from '@angular/router';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

	loadedFeature = 'homepage';

	onNavigate(feature: string) {
		this.loadedFeature = feature;
	}

}
