'use strict';

import { filter } from "js#/usefull/years-filter";

export function getFilterVal () {

    let filterArr = $('.js-filters').find('input, select');
    let pageNum = $('.pagination__number--current').find('span').text();
    let pagOption = ['sort', 'perPage'];

    const filterData = new FormData(filter[0]);
    let filterVal = {
        params: {},
        pagination: {}
    };

    filterArr.each(function (index, element) {
        let el = $(element);
        let elName = el.attr('name');

        if (el.val()) {
            if (pagOption.indexOf(elName) !== -1) {
                filterVal.pagination[elName] = filterData.get(elName);
            } else {
                if (elName === 'brand' || elName === 'price') {
                    filterVal.params[elName] = filterData.getAll(elName);
                } else {
                    filterVal.params[elName] = filterData.get(elName);
                }
                filterVal.pagination.page = Number(pageNum);
            }
        }
    });

    for (let key in filterVal.params) {
        let reverseKey = 0;

        if (key === 'price') {
            filterVal.params[key] = filterVal.params[key].map(item => Number(item));
            if (filterVal.params[key][0] > filterVal.params[key][1]) {
                reverseKey = filterVal.params[key][0];
                filterVal.params[key][0] = filterVal.params[key][1];
                filterVal.params[key][1] = reverseKey;
            }
        } else if (key === 'year') {
            filterVal.params[key] = Number(filterVal.params[key]);
        }
    }

    for (let key in filterVal.pagination) {
        if (key === 'perPage') {
            filterVal.pagination[key] = Number(filterVal.pagination[key]);
        }
    }

    //console.log(filterVal);
    return filterVal;
}

// Вариант 2

// let filterVal = {
//     params: {
//         brand: filterData.getAll('brand'),
//         manufacturer: filterData.get('manufacturer'),
//         model: filterData.get('model'),
//         year: Number(filterData.get('year')),
//         price: filterData.getAll('price').map((str) => Number(str))
//     },
//     pagination: {
//         sort: filterData.get('sort'),
//         perPage: Number(filterData.get('perPage')),
//         page: Number(pageNum)
//     }
// };
