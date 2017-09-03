import './article.scss';
import { BaseComponent } from '../../core';

export class ArticleComponent extends BaseComponent {
    constructor(initialParams) {
		super();
		this.params = initialParams || {
            id: 0,
            title: '',
            author: '',
            date: '',
            bannerImg: '',
            htmlContent: ''
        }
        this.shareTooltipId = "share-tooltip";
        this.articleId = "article-" + this.params.id;
    }

	render() {
        const { title, author, date, htmlContent } = this.params;
        return `
            <div>
                <h4>${author}</h4>
                <p>${date}</p>
                <div id="${this.articleId}">
                    <h2>${title}</h2>
                    ${htmlContent}
                </div>
                <div id="${this.shareTooltipId}"></div>
            </div>
        `;
    }
    
    addEventListeners() {
        const articleContent = document.getElementById(this.articleId);
        articleContent.onmouseup = (e) => {
            let selection;

            if (window.getSelection) {
                selection = window.getSelection();
            } else if (document.selection) {
                selection = document.selection.createRange();
            }
            
            const shareTooltip = document.getElementById("share-tooltip");
            const selectionText = selection.toString();
            if (selectionText) {
                shareTooltip.style.top = e.pageY + 'px';
                shareTooltip.style.left = e.pageX + 'px';
                shareTooltip.style.display = 'block';

                shareTooltip.innerHTML = '';
                this.generateTweetBtn(selectionText);
            }
        };
    }

    generateTweetBtn(tweetText) {
        twttr.widgets.createShareButton(
			"http:\/\/my.awesome.blog.xyz",
			document.getElementById("share-tooltip"),
			{
				size: "large",
				text: tweetText
			}
		);
    }
}
