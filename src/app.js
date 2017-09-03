import './app.scss';

import { Navigation } from './navigation';
import { Router } from './core';

import { ArticleTileComponent } from './components';
import { ArticleTilesComponent } from './components';

const navigation = new Navigation({
	items: ['first', 'second', 'third']
});
document.querySelector("#navigation").innerHTML = navigation.render();

const articleTiles = new ArticleTilesComponent({
    header: 'Section 1',
    tiles: [
        {author: 'auth1'},
        {author: 'auth2'},
        {author: 'auth3'}
    ]
});
document.querySelector("#article-panes").innerHTML = articleTiles.render();

if (Router.findGetParameter('page') == 'first') {
	alert('Hello webpack');
}
