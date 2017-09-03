export class Router {
    static findGetParameter(parameterName) {
        let result = null,
            tmp = [];
        
        location.search.substr(1).split('&')
            .forEach((item) => {
                tmp = item.split('=');
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            });

        return result;
    }

    static getLink(pageName) {
        return `href="?page=${pageName}"`;
    }
}