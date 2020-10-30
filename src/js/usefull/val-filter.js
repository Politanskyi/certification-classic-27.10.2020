import { filter } from "js#/usefull/years-filter";

export function getFilterVal () {

    let filterArr = $('.js-filters').find('input, select');
    let pageNum = $('.pagination__number--current').find('span').text();
    let param = [];
    const filterData = new FormData(filter[0]);
    let filterVal = {
        params: {},
        pagination: {}
    };

    filterArr.each(function (index, element) {
        let el = $(element);
        let elName = el.attr('name');
        param.push(elName);

        if (el.val()) {
            if (elName === 'brand' || elName === 'price' || elName === 'manufacturer' || elName === 'model' || elName === 'year')
                filterVal.params[elName] = filterData.getAll(elName);
        }
    });

    console.log(param);
    console.log(filterVal);
}
