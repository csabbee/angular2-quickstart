import {bootstrap, Component, FORM_DIRECTIVES} from 'angular2/angular2';

class Hero {
	id: number;
	name: string;
}

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES],
	template: `
		<h1>{{title}}</h1>
		<div><label>id: </label>{{hero.id}}</div>
		<div>
			<label>name: </label>{{hero.name}}
			<div><input [(ng-model)]="hero.name" placeholder="name"></div>
		</div>
		`
})
class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}

bootstrap(AppComponent);