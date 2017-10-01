// NG Core
import { 
	Component
} 						from '@angular/core';

// Env specs
import { 
	environment 
} 						from '../../environments/environment';

// Manifest
const {
	name,
	version
} 						= require('../../../package.json');


@Component({
	selector: 'app-version',
	templateUrl: './version.component.html',
	styleUrls: ['./version.component.css']
})
export class VersionComponent {

	environment: any 	= environment;
	appName: string 	= name;
	appVersion: number  = version;
 
	constructor() { }

}
