import './navigation.scss';
import { BaseComponent } from '../../core';
import { Router } from '../../core';

export class NavigationComponent extends BaseComponent {
	constructor(initialParams) {
		super();
		this.params = {
			items: []
		}
		this.setState(initialParams);
	}

	render() {
		let itemsTpl = this.params.items.map(item => {
			const href = Router.generateHref('page', item);
			const link = `<a ${href}>${item}</a>`;
			return `<li class="nav__list-item">${link}</li>`;
		}).join('');

		const brandHref = Router.generateHref('page', 'home');
		return `
			<ul class="nav__list">
				<li class="nav__list-item nav__list-item--brand">
					<a class="" ${brandHref}>My Awesome Blog</a>
				</li>
				${itemsTpl}
			</ul>
		`;
	}
}
