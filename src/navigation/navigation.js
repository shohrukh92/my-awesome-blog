import './navigation.scss';
import { BaseComponent } from '../core';
import { Router } from '../core';

export class Navigation extends BaseComponent {
	constructor(initialParams) {
		super();
		this.params = initialParams || {
			items: []
		}
	}

	render() {
		let itemsTpl = this.params.items.map(item => {
			const href = Router.getLink(item);
			const link = `<a class="nav__link" ${href}>${item}</a>`;
			return `<li>${link}</li>`;
		}).join('');
		return `
			<ul class="nav__list">
				${itemsTpl}
			</ul>
		`;
	}
}
