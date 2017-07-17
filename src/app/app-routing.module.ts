import { NgModule }				from '@angular/core';
import { 
	RouterModule, 
	Routes 
} 								from '@angular/router';

import { FileUploadComponent }	from './file-upload/file-upload.component';
import { MindMapComponent }		from './mind-map/mind-map.component'



const routes: Routes = [
	// paths
	{ path: 'upload',  	component: FileUploadComponent },
	{ path: 'map',  	component: MindMapComponent },

	// redirects
	{ path: '', redirectTo: '/upload', pathMatch: 'full' },
];


@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})


export class AppRoutingModule {}



