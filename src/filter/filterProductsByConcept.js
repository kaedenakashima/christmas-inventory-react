export default function filterProductsByConcept (inventory, concept) {
    return inventory.filter(item =>
    item.concept.includes(concept))
}