import {bootstrap, Component, FORM_DIRECTIVES, NgFor} from 'angular2/angular2';

class Hero {
	id: number;
	name: string;
}

var HEROES: Hero[] = [
	{ "id": 11, "name": "Mr. Nice" },
	{ "id": 12, "name": "Narco" },
	{ "id": 13, "name": "Bombasto" },
	{ "id": 14, "name": "Celeritas" },
	{ "id": 15, "name": "Magneta" },
	{ "id": 16, "name": "RubberMan" },
	{ "id": 17, "name": "Dynama" },
	{ "id": 18, "name": "Dr IQ" },
	{ "id": 19, "name": "Magma" },
	{ "id": 20, "name": "Tornado" }
];

@Component({
	selector: 'my-app',
	directives: [FORM_DIRECTIVES, NgFor],
	template: `
		<h1>{{title}}</h1>
		<div><label>id: </label>{{hero.id}}</div>
		<div>
			<label>name: </label>{{hero.name}}
			<div><input [(ng-model)]="hero.name" placeholder="name"></div>
		</div>
		<h2>My Heroes</h2>
        <ul class="heroes">
          <li *ng-for="#hero of heroes">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
          </li>
        </ul>
		`,
    styles:[`
      .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
      .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
      .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
      .heroes .badge {
        font-size: small;
        color: white;
        padding: 0.1em 0.7em;
        background-color: #369;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -1px;
      }
      .selected { background-color: #EEE; color: #369; }
    `],
})
class AppComponent {
	public title = 'Tour of Heroes';
	public hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
    public heroes = HEROES;
}

bootstrap(AppComponent);