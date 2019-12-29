import _ from 'lodash';

export function filterProductsByStockRangeInItem(item, min, max) {
    const result = [];
    for (let i = 0; i < item.details.length; i++) {
        const stock = item.details[i].stock;
            if(min <= stock && stock<= max) {
                result.push(item.details[i]);
            }
    }
    return result;
}

export default function filterProductsByStockRange(inventory, min, max) {
    let result = [];
    for (let i = 0; i < inventory.length; i++) {
        const item = _.cloneDeep (inventory[i]);
        const stockItems = filterProductsByStockRangeInItem(item, min, max);
        if(stockItems.length > 0) {
            item.details = stockItems;
            result.push(item);
        }
    }
    return result;
}