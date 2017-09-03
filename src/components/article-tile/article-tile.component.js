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
            <div>
                <p>${title}</p>
                <p>${author}</p>
                <p>${date}</p>
            </div>
		`;
	}
}