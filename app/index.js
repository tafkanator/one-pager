'use strict';

import ResourceManager from './lib/core/ResourceManager';

window.addEventListener('load', loadPages);

function loadPages() {
	debugger;
	const resourceManager = new ResourceManager();
	resourceManager.doSomething();

	console.log('hi!');
	console.log(document.querySelector('.contact-page'));
}
