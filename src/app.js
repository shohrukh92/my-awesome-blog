import './app.scss';

import { Navigation } from './navigation';
import { Router } from './core';

import { 
    ArticleTileComponent,
    ArticleTilesComponent,
    ArticleComponent
} from './components';

const navigation = new Navigation({
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

if (Router.findGetParameter('article') == 1) {
    const articleComponent = new ArticleComponent({
        id: 0,
        title: 'Title 1',
        author: 'author 1',
        date: '12/12/12',
        bannerImg: '',
        htmlContent: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam in tincidunt augue. Fusce vel tincidunt nisi, in interdum diam. 
            Praesent faucibus lacinia enim, vel condimentum tortor.</p>

            <p>Nulla et purus vitae nibh rhoncus luctus vel nec dui. 
            Pellentesque at maximus magna. Quisque nec ligula justo.</p>
        `
    });
    document.getElementById("article-panes-container").innerHTML = "";
    document.getElementById("article-container").innerHTML = articleComponent.render();
    articleComponent.addEventListeners();
}

document.onmousedown = () => {
    document.getElementById('share-tooltip').style.display = 'none';
};