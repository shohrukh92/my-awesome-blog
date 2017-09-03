import './article-tile.scss';
import { BaseComponent } from '../../core';

export class ArticleTileComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = initialParams || {
            title: '',
            author: '',
            date: ''
		}
	}

	render() {
        const { title, author, date } = this.params;
		return `
            <article class="article-tile">
                <p>${title}</p>
                <p>${author}</p>
                <p>${date}</p>
            </article>
		`;
	}
}