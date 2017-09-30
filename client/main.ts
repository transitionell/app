import { 
	enableProdMode 
} 							from '@angular/core';
import { 
	platformBrowserDynamic 
} 							from '@angular/platform-browser-dynamic';

import { 
	AppModule 
} 							from './app/app.module';
import { 
	environment 
} 							from './environments/environment';


// Do prod stuff
if (environment.production) {
	enableProdMode();
}


// Do staging stuff
if (environment.staging) {

}


// Do prod stuff
if (environment.development) {

}


// Bootstrap NG app
platformBrowserDynamic().bootstrapModule(AppModule);







