// -----------------------------------------------------------------------------
// Deps
// -----------------------------------------------------------------------------

// styles
import 'sass/style.scss';
// use full
import {pushFilter} from 'js/usefull/years-filter'
import {getFilterVal} from 'js/usefull/val-filter'
import {createGetString} from 'js/usefull/get-post-filter'
import { cardRenderStart, cardRenderData} from 'js/usefull/card-template'
import data from 'js/data/goods.json'

// -----------------------------------------------------------------------------
// Initialize
// -----------------------------------------------------------------------------
$(document).ready(function (){

    //cardRenderStart(data);

    const filters = $('.js-filters');
    let getObject = null;

    pushFilter($('#year'));

    filters.find('input, select').on('change', function (){
        getObject = getFilterVal();

        createGetString(getObject);
        cardRenderData(getObject, data);
    });

})
