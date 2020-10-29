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
        let optGroup = `<optgroup label="${key}">`;

        for (let i = 0; i < yearsArr[key].length; i++) {
            optGroup += `<option>${yearsArr[key][i]}</option>`;
        }

        optGroup += `</optgroup>`;
        yearFilter.append(optGroup);
    }
}

const filterBtn = $('[data-button-show]');
export const filter = $('#filter');

filterBtn.on('click', function () {
    filter.slideToggle(300, function (){
        if (filter.is(':visible')) {
            filterBtn.text('Скрыть фильтр');
        } else {
            filterBtn.text('Показать фильтр');
        }
    });
})
