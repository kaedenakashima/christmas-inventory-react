import _ from 'lodash';

export function filterProductsByPriceRangeInItem(item, min, max) {
    const result = [];
    for (let i = 0; i < item.details.length; i++) {
        const price = item.details[i].price;
            if(min <= price && price<= max) {
                result.push(item.details[i]);
            }
    }
    return result;
}

export default function filterProductsByPriceRange(inventory, min, max) {
    let result = [];
    for (let i = 0; i < inventory.length; i++) {
        const item = _.cloneDeep (inventory[i]);
        const priceItems = filterProductsByPriceRangeInItem(item, min, max);
        if(priceItems.length > 0) {
            item.details = priceItems;
            result.push(item);
        }
    }
    return result;
}