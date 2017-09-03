import './article.scss';
import { BaseComponent } from '../../core';

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
                <h4>${author}</h4>
                <p>${date}</p>
                <div>
                    <img src="../../img/${bannerImg}" />
                </div>
                <div id="${this.articleId}">
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
                const shareTooltip = document.getElementById(this.tweetTooltipId);

                shareTooltip.style.top = (e.pageY - 25) + 'px';
                shareTooltip.style.left = (e.pageX + 5) + 'px';
                shareTooltip.style.display = 'block';

                shareTooltip.innerHTML = '';
                this.generateTweetBtn(selectionText, window.location.href);
            }
        };

        document.onmousedown = () => {
            document.getElementById(this.tweetTooltipId).style.display = 'none';
        };
    }

    generateTweetBtn(tweetText, articleUrl) {
        twttr.widgets.createShareButton(
			articleUrl,
			document.getElementById(this.tweetTooltipId),
			{
				size: "large",
				text: tweetText
			}
		);
    }
}
