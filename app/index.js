class App {

	constructor() {
		debugger
		// find required pages
		const viewsWrapElements = Array.prototype.slice.call(document.querySelectorAll('[data-view]'));

		// load all pages async and insert them into DOM as they come
		viewsWrapElements.forEach(this.loadView);
	}

	/**
	 * Finds view name from data-view attribute and inserts view contents into the DOM
	 * @param {HTMLElement} viewWrapDom
	 */
	static loadView(viewWrapDom) {
		// TODO: make it async

		const viewName = viewWrapDom.dataset.view;
		viewWrapDom.innerHTML = require('./views/' + viewName + '/index');
	}

}

// start the app
window.addEventListener('load', () => new App());