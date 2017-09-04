import './article.scss';
import { BaseComponent } from '../../core';
import { TwitterService } from '../../services';

export class ArticleComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = {
            id: 0,
            title: '',
            author: '',
            date: '',
            bannerImg: '',
            htmlContent: ''
        }
        this.setState(initialParams);

        this.tweetTooltipId = "tweet-tooltip"
        this.articleId = "article-" + this.params.id;
    }

	render() {
        const { title, author, date, bannerImg, htmlContent } = this.params;
        return `
            <div class="article">
                <div class="article__info">
                    <h2 class="article__author">${author}</h2>
                    <p class="article__date">Publication date: ${date}</p>
                    <img src="../../img/${bannerImg}" class="article__banner-img"/>
                </div>
                <div id="${this.articleId}" class="article__text">
                    <h2>${title}</h2>
                    ${htmlContent}
                </div>
                <div id="${this.tweetTooltipId}"></div>
            </div>
        `;
    }
    
    addEventListeners() {
        document.getElementById(this.articleId).onmouseup = (e) => {
            let selection;

            if (window.getSelection) {
                selection = window.getSelection();
            } else if (document.selection) {
                selection = document.selection.createRange();
            }
            
            const selectionText = selection.toString();
            if (selectionText) {
                this.showTweetTooltip(e);
                TwitterService.generateTweetBtn(this.tweetTooltipId, selectionText, window.location.href);
            }
        };

        document.onmousedown = () => {
            const tweetTooltipElement = document.getElementById(this.tweetTooltipId);
            if (tweetTooltipElement) {
                tweetTooltipElement.style.display = 'none';
            }
        };
    }

    showTweetTooltip({pageX, pageY}) {
        const tweetTooltipElement = document.getElementById(this.tweetTooltipId);
        if (tweetTooltipElement) {
            // shift tweet button by 25px upwards and by 5px rightwards
            const top = (pageY - 25) + 'px', 
                  left = (pageX + 5) + 'px';

            // clear the old tweetBtn from the tooltip container
            tweetTooltipElement.innerHTML = '';
            tweetTooltipElement.style.top = top;
            tweetTooltipElement.style.left = left;
            tweetTooltipElement.style.display = 'block';
        }
    }
}
