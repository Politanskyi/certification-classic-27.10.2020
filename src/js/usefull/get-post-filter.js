'use strict';

export function createGetString(elements) {
	let params = decodeURI($.param(elements.params, true));
	let pagination = decodeURI($.param(elements.pagination, true));
	let getString = `${params}&${pagination}`;

	window.history.pushState('', document.title, getString);
}
