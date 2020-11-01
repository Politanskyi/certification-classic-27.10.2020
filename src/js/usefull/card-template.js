'use strict';

let grid = $('[data-card-grid]');
let card = document.querySelector('[data-render-card]').content;
let cardBrand = $(card).find('.card__brand');
let cardImage = $(card).find('.card__image');
let cardManufacturer = $(card).find('.card__manufacturer');
let cardYear = $(card).find('.card__year');
let cardModel = $(card).find('.card__model');
let cardPrice = $(card).find('.card__price');

function supportsTemplate () {
    return 'content' in document.createElement('template');
}

export function cardRenderStart (data) {
    if (supportsTemplate()) {

        for (let key in data) {
            let elem = data[key];

            cardBrand.text(elem.brand.name);
            cardImage.attr({
                alt: elem.image.alt,
                src: elem.image.sizes['card-preview']
            });
            cardManufacturer.text(elem.manufacturer.name);
            cardYear.text(`${elem.year} год`);
            cardModel.text(elem.model.name);
            cardPrice.text(`${elem.price.currency.symbol}${elem.price.value}`);

            grid.append(card.cloneNode(true));
        }
    }
}

export function cardRenderData (filterObject, data) {
    if (supportsTemplate()) {
        let params = filterObject.params;

        for (let key in params) {
            let paramsKey = params[key];

            switch (key) {
                case 'brand':
                    let brands = paramsKey;
                    data = data.filter((elem) => {
                        if (brands.includes(elem.brand.id.toString())) {
                            return elem;
                        }
                    });
                    break;
                case 'price':
                    console.log(key);
            }
        }
    }
    cardRender(data);
}

function cardRender (data) {
    console.log('render start');
    grid.empty();
    console.log('grid was clear');

    for (let key in data) {
        console.log('grid new items');
        let elem = data[key];

        cardBrand.text(elem.brand.name);
        cardImage.attr({
            alt: elem.image.alt,
            src: elem.image.sizes['card-preview']
        });
        cardManufacturer.text(elem.manufacturer.name);
        cardYear.text(`${elem.year} год`);
        cardModel.text(elem.model.name);
        cardPrice.text(`${elem.price.currency.symbol}${elem.price.value}`);

        grid.append(card.cloneNode(true));
    }
}