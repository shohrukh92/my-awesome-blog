import './app.scss';

import { Router } from './core';
import { ArticleService } from './services';
import {
    NavigationComponent,
    ArticleTileComponent,
    ArticleTilesComponent,
    ArticleComponent
} from './components';

const navigation = new NavigationComponent({
	items: ['first', 'second', 'third']
});
document.getElementById("navigation-container").innerHTML = navigation.render();

const articleTiles = new ArticleTilesComponent({
    header: 'Section 1',
    tiles: [
        {id: 1, author: 'auth1', title: 'title1'},
        {id: 2, author: 'auth2', title: 'title2'},
        {id: 3, author: 'auth3', title: 'title3'}
    ]
});
document.getElementById("article-panes-container").innerHTML = articleTiles.render();


const articleService = new ArticleService();

if (Router.findGetParameter('article') == 1) {
    const articleComponent = new ArticleComponent(articleService.getArticleById(1));
    document.getElementById("article-panes-container").innerHTML = "";
    document.getElementById("article-container").innerHTML = articleComponent.render();
    articleComponent.addEventListeners();
}
