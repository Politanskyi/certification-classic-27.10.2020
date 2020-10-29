// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// styles
import 'sass/style.scss';
// use full
import {pushFilter} from 'js/usefull/years-filter'
import {getFilterVal} from 'js/usefull/val-filter'
import json from 'js/data/goods.json'

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------
$(document).ready(function (){

    pushFilter($('#year'));

    $('.js-filters').find('input, select').on('change', getFilterVal);
})
