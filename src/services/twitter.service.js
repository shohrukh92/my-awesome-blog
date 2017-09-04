export class TwitterService {
    static initTwitterWidget() {
        if (!window.twttr) {
            window.twttr = (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0],
                    t = window.twttr || {};
                if (d.getElementById(id)) return t;
                js = d.createElement(s);
                js.id = id;
                js.src = "https://platform.twitter.com/widgets.js";
                fjs.parentNode.insertBefore(js, fjs);

                t._e = [];
                t.ready = function(f) {
                    t._e.push(f);
                };

                return t;
            }(document, "script", "twitter-wjs"));
        }
    }

    static generateTweetBtn(targetId, tweetText, articleUrl) {
        twttr.widgets.createShareButton(
			articleUrl,
			document.getElementById(targetId),
			{
				size: "large",
				text: tweetText
			}
		);
    }
}
