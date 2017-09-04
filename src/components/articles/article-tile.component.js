import './article-tile.scss';
import { BaseComponent, Router } from '../../core';

export class ArticleTileComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = {
            id: 0,
            title: '',
            author: '',
            date: '',
            thumbnail: ''
        }
        
        this.setState(initialParams);
	}

	render() {
        const { id, title, author, date, thumbnail } = this.params;
        const href = Router.generateHref('article', id);
		return `
            <article class="article-tile">
                <img class="article-tile__thumbnail" src="../../img/${thumbnail}">
                <header class="article-tile__header">
                    <a ${href}>${title}
                        <div class="article-tile__more-btn">></div>
                    </a>
                </header>
                <footer class="article-tile__footer">                    
                    <p class="article-tile__author">
                        Author: <b>${author}</b>
                    </p>
                    <p class="article-tile__date">
                        Publication date: <b>${date}</b>
                    </p>
                </footer>
            </article>
		`;
	}
}