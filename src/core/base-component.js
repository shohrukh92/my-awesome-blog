export class BaseComponent {
	constructor() {
		this.params = {};
	}

	render() {
        // implementation required
        // this trick emulates abstract method for es6 classes
		throw new Error('render method should be implemented!');
	}

	setState(newParams) {
        for (const key in newParams) {
            if (this.params.hasOwnProperty(key)) {
                this.params[key] = newParams[key];
            }
        }
    }

    addEventListeners() {
        // addEventListeners method is optional for implementation
    }

    static renderToDom(element, selector) {
        document.querySelector(selector).innerHTML = element.render();
        element.addEventListeners();
    }
}
