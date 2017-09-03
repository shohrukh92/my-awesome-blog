import './article-tiles.scss';

import { BaseComponent } from '../../core';
import { ArticleTileComponent } from './article-tile.component';

export class ArticleTilesComponent extends BaseComponent {
    constructor(initialParams) {
		super();
        this.params = initialParams || {
            header: '',
            tiles: []
        };
        this.articleTileComponent = new ArticleTileComponent();
	}

	render() {
        const { header, tiles } = this.params;

        const tilesTpl = tiles.map(tileParams => {
			const tileTpl = this.renderArticleTile(tileParams);
			return tileTpl;
        }).join('');

        const tilesContainerTpl = `
            <div class="article-tiles">
                <header class="article-tiles__header">${header}</header>
                <div class="article-tiles__wrapper">${tilesTpl}</div>                
            </div>
        `;

        return tilesContainerTpl;
    }
    
    renderArticleTile(tileParams) {
        this.articleTileComponent.params = tileParams;
        return this.articleTileComponent.render();
    }
}