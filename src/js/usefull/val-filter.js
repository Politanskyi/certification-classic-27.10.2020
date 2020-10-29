export function getFilterVal () {
    let filterVal = {params: {}, pagination: {}};
    let filterArr = $('.js-filters').find('input, select');
    let pageNum = $('.pagination__number--current');

    filterArr.each(function (index, element) {
        let elem = $(element);
        //console.log(elem.attr('name'));
        //console.log(elem.val());

        if (elem.val()) {
            if (elem.attr('name') === 'brand') {

            }
            filterVal[elem.attr('name')] = elem.val();
        }

    });

    //console.log(filterVal);
}

let example = {
    params: {
        brand: ['string', 'string'],
        manufacturer: 'string',
        model: 'string',
        year: 1992,
        price: [100, 3000]
    },
    pagination: {
        sort: 'string',
        perPage: 10,
        page: 3
    }
}
