let instance = null;

export class ArticleService {
    constructor() {
        if (!instance) {
            instance = this;
        }
        this.articles = articles;
        return instance;
    }

    getArticles() {
        return this.articles;
    }

    getArticleById(id) {
        // 'filter' method has better browser support than 'find'
        const filtered = this.articles.filter(article => article.id === id);
        if (filtered.length === 1) {
            return filtered[0];
        } else {
            return null;
        }
    }
}


const articles = [
    {
        id: 1,
        title: 'Title 1',
        author: 'author 1',
        date: '12/12/12',
        bannerImg: '',
        htmlContent: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Nullam in tincidunt augue. Fusce vel tincidunt nisi, in interdum diam. 
            Praesent faucibus lacinia enim, vel condimentum tortor.</p>

            <p>Nulla et purus vitae nibh rhoncus luctus vel nec dui. 
            Pellentesque at maximus magna. Quisque nec ligula justo.</p>
        `
    },
    {
        id: 2,
        title: 'Title 2',
        author: 'author 2',
        date: '12/12/12',
        bannerImg: '',
        htmlContent: `
            <p>22 222 2 222 Lorem ipsum dolor sit, consectetur adipiscing elit. 
            Nullam in tincidunt augue. Fusce vel tincidunt nisi, in interdum diam. 
            Praesent faucibus lacinia enim, vel condimentum tortor.</p>

            <p>Nulla et purus vitae nibh rhoncus luctus vel nec dui. 
            Pellentesque at maximus magna. Quisque nec ligula justo.</p>
        `
    },
    {
        id: 3,
        title: 'Title 3',
        author: 'author 3',
        date: '12/12/12',
        bannerImg: '',
        htmlContent: `
            <p>3 3 33333333 Lorem ipsum dolor sit, consectetur adipiscing elit. 
            Nullam in tincidunt augue. Fusce vel tincidunt nisi, in interdum diam. 
            Praesent faucibus lacinia enim, vel condimentum tortor.</p>

            <p>Nulla et purus vitae nibh rhoncus luctus vel nec dui. 
            Pellentesque at maximus magna. Quisque nec ligula justo.</p>
        `
    }
];