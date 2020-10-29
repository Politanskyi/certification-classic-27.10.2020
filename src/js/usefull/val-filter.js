import { filter } from "js#/usefull/years-filter";

export function getFilterVal () {

    let filterArr = $('.js-filters').find('input, select');
    let pageNum = $('.pagination__number--current').find('span').text();
    const filterData = new FormData(filter[0]);
    let filterVal = {
        params: {},
        pagination: {}
    };

    filterArr.each(function (index, element) {
        let el = $(element);
        let elName = el.attr('name');

        if (el.val()) {
            if (elName === 'brand') {
                filterVal.params[elName] = filterData.getAll(elName);
            } else if (elName === 'manufacturer') {
                filterVal.params[elName] = filterData.get(elName);
            } else if (elName === 'model') {
                filterVal.params[elName] = filterData.get(elName);
            } else if (elName === 'year') {
                filterVal.params[elName] = Number(filterData.get(elName));
            } else if (elName === 'price') {
                filterVal.params[elName] = filterData.getAll(elName).map((str) => Number(str));
            } else if (elName === 'sort') {
                filterVal.pagination[elName] = filterData.get(elName);
            } else if (elName === 'perPage') {
                filterVal.pagination[elName] = Number(filterData.get(elName));
            }
            filterVal.pagination.page = Number(pageNum);
        }
    });
    console.log(filterVal);
}
