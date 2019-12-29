export default function filterProductsByPrice(inventory, price) {
    for (let i = 0; i < inventory.length; i++) {
        for (let j = 0; j < inventory[i].details.length; j++) {
            return inventory[i].map(item => 
            item.details[j] === price)
        }
        
    }
}