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
		let navItemsTpl = this.params.items.map((item) => {
			const { title, url } = item;
			const href = Router.generateHref('page', url);
			const link = `<a ${href}>${title}</a>`;
			return `<li class="nav__list-item">${link}</li>`;
		}).join('');

		const brandHref = Router.generateHref('page', 'home');
		return `
			<ul class="nav__list">
				<li class="nav__list-item nav__list-item--brand">
					<a ${brandHref}>
						<span class="nav__list-item--bran-text">My Awesome Blog</span>
						<img class="nav__list-item--bran-logo" src="../../img/logo.png"/></span>
					</a>
				</li>
				${navItemsTpl}
			</ul>
		`;
	}
}
