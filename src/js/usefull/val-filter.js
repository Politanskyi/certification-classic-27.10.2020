import { filter } from "js#/usefull/years-filter";

export function getFilterVal () {

    let pageNum = $('.pagination__number--current').find('span').text();
    const filterData = new FormData(filter[0]);
    let filterVal = {
        params: {
                brand: filterData.getAll('brand'),
                manufacturer: filterData.get('manufacturer'),
                model: filterData.get('model'),
                year: Number(filterData.get('year')),
                price: filterData.getAll('price').map((str) => Number(str))
                },
        pagination: {
                sort: filterData.get('sort'),
                perPage: Number(filterData.get('perPage')),
                page: Number(pageNum)
                }
        };

    console.log(filterVal);
}
