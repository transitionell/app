// Angular modules
import { 
	BrowserModule 
} 							from '@angular/platform-browser';
import { 
	NgModule 
} 							from '@angular/core';
import { 
	RouterModule,
	Routes 
}							from '@angular/router';

// Project routes
import { 
	AppRoutingModule 
}     						from './app-routing.module';

// Project components
import { 
	AppComponent 
} 							from './app.component';
import { 
	FileUploadComponent 
}							from './file-upload/file-upload.component';
import { 
	MindMapComponent 
} 							from './mind-map/mind-map.component';
import { 
	VersionComponent 
} 							from './version/version.component';
import { 
	HotjarComponent 
} 							from './analytics/hotjar.component';



@NgModule({
	declarations: [
		AppComponent,
		FileUploadComponent,
		MindMapComponent,
		VersionComponent,
		HotjarComponent
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot([
			{
				path: 'upload',
				component: FileUploadComponent
			},
			{
				path: 'map',
				component: MindMapComponent
			},
		])
	],
	providers: [

	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
