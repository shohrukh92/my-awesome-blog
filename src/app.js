import './app.scss';

import { Router } from './core';
import { ArticleService } from './services';
import {
    NavigationComponent,
    ArticleTileComponent,
    ArticleTilesComponent,
    ArticleComponent
} from './components';
const articleService = new ArticleService();
const navigation = new NavigationComponent({
	items: ['first', 'second', 'third']
});
document.getElementById("navigation-container").innerHTML = navigation.render();

const articleTiles = new ArticleTilesComponent({
    header: 'My awesome articles',
    tiles: articleService.getArticleCuttings()
});
document.getElementById("article-panes-container").innerHTML = articleTiles.render();

if (Router.findGetParameter('article') == 1) {
    const articleComponent = new ArticleComponent(articleService.getArticleById(6));
    document.getElementById("article-panes-container").innerHTML = "";
    document.getElementById("article-container").innerHTML = articleComponent.render();
    articleComponent.addEventListeners();
}
