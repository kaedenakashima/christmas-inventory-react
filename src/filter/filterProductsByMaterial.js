export default function filterProductsByMaterial (inventory, material) {
    return inventory.filter(item =>
    item.material.includes(material))
}