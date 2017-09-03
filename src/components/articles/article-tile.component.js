import './article-tile.scss';
import { BaseComponent, Router } from '../../core';

export class ArticleTileComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = {
            id: 0,
            title: '',
            author: '',
            date: ''
        }
        
        this.setState(initialParams);
	}

	render() {
        const { id, title, author, date } = this.params;
        const href = Router.generateHref('article', id);
		return `
            <article class="article-tile">
                <a ${href}>${title}</a>
                <p>${author}</p>
                <p>${date}</p>
            </article>
		`;
	}
}