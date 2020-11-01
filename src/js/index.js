// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// styles
import 'sass/style.scss';
// use full
import { pushFilter } from 'js/usefull/years-filter';
import { getFilterVal } from 'js/usefull/val-filter';
import { createGetString } from 'js/usefull/get-post-filter';
import { cardRenderStart, cardRenderData } from 'js/usefull/card-template';
import data from 'js/data/goods.json';

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------
$(document).ready(function () {
	const filters = $('.js-filters');
	let getObjectFilter = getFilterVal();

	cardRenderStart(data, getObjectFilter);
	pushFilter($('#year'));

	filters.find('input, select').on('change', function () {
		getObjectFilter = getFilterVal();
		createGetString(getObjectFilter);
		cardRenderData(data, getObjectFilter);
	});
});
