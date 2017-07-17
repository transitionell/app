// Angular modules
import { BrowserModule } 		from '@angular/platform-browser';
import { NgModule } 			from '@angular/core';
import { RouterModule }			from '@angular/router';

// Project modules
import { AppComponent } 		from './app.component';
import { FileUploadComponent }	from '../file-upload/file-upload.component';

// Project routes
import { AppRoutingModule }     from './app-routing.module';
import { MindMapComponent } 	from './mind-map/mind-map.component';


@NgModule({
	declarations: [
		AppComponent,
		FileUploadComponent,
		MindMapComponent
	],
	imports: [
		BrowserModule
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
