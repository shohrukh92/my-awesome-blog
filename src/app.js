import './app.scss';

import { Navigation } from './navigation';
import { Router } from './core';

import { ArticleTileComponent } from './components';

const navigation = new Navigation({
	items: ['first', 'second', 'third']
});
document.querySelector("#navigation").innerHTML = navigation.render();
// console.log(Navigation.render(['first', 'second']));

const articleTile = new ArticleTileComponent({
    author: 'Auth'
})
console.log(articleTile.render());

if (Router.findGetParameter('page') == 'first') {
	alert('Hello webpack');
}
