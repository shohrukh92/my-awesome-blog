import './styles/reset.scss';
import './styles/app.scss';

import { Router, BaseComponent } from './core';
import { ArticleService } from './services';
import {
    NavigationComponent,
    ArticleTileComponent,
    ArticleTilesComponent,
    ArticleComponent
} from './components';
const articleService = new ArticleService();

const appComponentSelectors = {
    navigation: '#navigation-container',
    articleTiles: '#article-tiles-container',
    article: '#article-container'
};

const navigation = new NavigationComponent({items: Router.getAppNavItems()});
BaseComponent.renderToDom(navigation, appComponentSelectors.navigation);

const articleTiles = new ArticleTilesComponent({
    header: 'My awesome articles',
    tiles: articleService.getArticleCuttings()
});
BaseComponent.renderToDom(articleTiles, appComponentSelectors.articleTiles);

const articleId = +Router.findUrlParam('article');
if (articleId) {
    const articleComponent = new ArticleComponent(articleService.getArticleById(articleId));
    document.querySelector(appComponentSelectors.articleTiles).innerHTML = "";
    BaseComponent.renderToDom(articleComponent, appComponentSelectors.article);
}

const pageId = Router.findUrlParam('page');
if (pageId) {
    // TODO add logic for different app pages
    console.log(pageId);
}
