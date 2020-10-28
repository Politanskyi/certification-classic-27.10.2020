'use strict';

const yearsArr = generateYears(1973, 2021);

function generateYears (yearFrom, yearTo) {
    let years = {};
    for (let i = yearFrom; i <= yearTo; i++) {
        let decade = Math.floor(i / 10) * 10;
        years[decade] = $.merge(years[decade] || [], [i]);
    }
    return years;
}

function pushFilter () {
    let yearFilter = $('#filter-year');
    for (let key in yearsArr) {
        yearFilter.append(`<option disabled>${key}</option>`);
        for (let i = 0; i < yearsArr[key].length; i++) {
            yearFilter.append(`<option>${yearsArr[key][i]}</option>`);
        }
    }
}

pushFilter();
