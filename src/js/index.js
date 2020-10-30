// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// styles
import 'sass/style.scss';
// use full
import {pushFilter} from 'js/usefull/years-filter'
import {getFilterVal} from 'js/usefull/val-filter'
import {createGetString} from 'js/usefull/get-post-filter'
import json from 'js/data/goods.json'

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------
$(document).ready(function (){
    const filters = $('.js-filters');
    let getObject = null;

    pushFilter($('#year'));

    filters.find('input, select').on('change', function (){
        getObject = getFilterVal();
        createGetString(getObject);
    });
})
