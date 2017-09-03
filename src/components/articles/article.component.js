import './article.scss';
import { BaseComponent } from '../../core';

export class ArticleComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = initialParams || {
            title: '',
            author: '',
            date: '',
            bannerImg: '',
            htmlContent: ''
		}
	}

	render() {
        const { title, author, date, htmlContent } = this.params;
        return `
            <h2>${title}</h2>
            <h4>${author}</h4>
            <p>${date}</p>
            <div>
                ${htmlContent}
            </div>            
		`;
	}
}