'use strict';

const yearsArr = generateYears(1973, 2021);

function generateYears (yearFrom, yearTo) {
    let years = {};
    for (let i = yearFrom; i <= yearTo; i++) {
        let decade = Math.floor(i / 10) * 10;

        if (decade < 2000) {
            decade = decade.toString().replace('19', '') + '-ые';
        } else {
            decade = decade.toString().replace(/(0)+/, 'k');
        }

        years[decade] = $.merge(years[decade] || [], [i]);
    }
    return years;
}

export function pushFilter (yearFilter) {
    for (let key in yearsArr) {
        yearFilter.append(`<option disabled>${key}</option>`);
        for (let i = 0; i < yearsArr[key].length; i++) {
            yearFilter.append(`<option>${yearsArr[key][i]}</option>`);
        }
    }
}
