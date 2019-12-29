export default function filterProductsByType(inventory, type) {
    return inventory.filter(item => 
    item.type.includes(type))
}