export class BaseComponent {
	constructor() {
		this.params = {};
	}

	render() {
		throw new Error('render method should be implemented!');
	}

	setState(newParams) {
        const urlSearchParams = new URLSearchParams();
        for (const key in newParams) {
            if (this.params.hasOwnProperty(key)) {
                this.params[key] = newParams[key];
            }
        }
    }
}
