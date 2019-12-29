export default function filterProductsByName(inventory, name) {
    return inventory.filter(item => 
    item.name.includes(name))
}