import {bootsrap, Component} from 'anguarls2/angular2';

@Component({
	selector: 'my-app',
	template: '<h1>My First Angular 2</h1>'
})
class AppComponent {}

bootsrap(AppComponent);