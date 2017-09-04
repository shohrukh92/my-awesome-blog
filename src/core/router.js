export class Router {
    static findUrlParam(parameterName) {
        let result = null;
        
        const urlParams = location.search.substr(1).split('&');
        urlParams.forEach((item) => {
            const tmp = item.split('=');
            if (tmp[0] === parameterName) {
                result = decodeURIComponent(tmp[1]);
            }
        });

        return result;
    }

    static generateHref(key, value) {
        return `href="?${key}=${value}"`;
    }

    static getAppNavItems() {
        return [
            {title: 'Home', url: 'home'},
            {title: 'Most Popular', url: 'most-popular'},
            {title: 'Audio', url: 'audio'},
            {title: 'Technology', url: 'technology'},
            {title: 'Creativity', url: 'creativity'},
            {title: 'Culture', url: 'culture'}
        ];
    }
}