'use strict';

let grid = document.querySelector('[data-card-grid]');
let card = document.querySelector('[data-render-card]').content;
let cardBrand = card.querySelector('.card__brand');
let cardImage = card.querySelector('.card__image');
let cardManufacturer = card.querySelector('.card__manufacturer');
let cardYear = card.querySelector('.card__year');
let cardModel = card.querySelector('.card__model');
let cardPrice = card.querySelector('.card__price');

function supportsTemplate () {
    return 'content' in document.createElement('template');
}

export function cardRenderStart (data) {
    if (supportsTemplate()) {

        for (let key in data) {
            cardBrand.textContent = data[key].brand.name;
            cardImage.src = data[key].image.sizes['card-preview'];
            cardImage.setAttribute('alt', data[key].image.alt);
            cardManufacturer.textContent = data[key].manufacturer.name;
            cardYear.textContent = `${data[key].year} год`;
            cardModel.textContent = data[key].model.name;
            cardPrice.textContent = `${data[key].price.currency.symbol}${data[key].price.value}`;

            grid.appendChild(card.cloneNode(true));
        }
    }
}

export function cardRenderData (filterObject, data) {
    if (supportsTemplate()) {
        let params = filterObject.params;

        for (let key in params) {
            switch (key) {
                case 'brand':
                    let brands = params[key];
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

    for (let key in data) {
        cardBrand.textContent = data[key].brand.name;
        cardImage.src = data[key].image.sizes['card-preview'];
        cardImage.setAttribute('alt', data[key].image.alt);
        cardManufacturer.textContent = data[key].manufacturer.name;
        cardYear.textContent = `${data[key].year} год`;
        cardModel.textContent = data[key].model.name;
        cardPrice.textContent = `${data[key].price.currency.symbol}${data[key].price.value}`;

        grid.appendChild(card.cloneNode(true));
    }
}