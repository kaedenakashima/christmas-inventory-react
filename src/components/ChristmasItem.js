import React from 'react';
import DetailItem from './DetailItem';

export default ({item}) => {
    const {name, concept, material, type, details} = item;

    return <div style={{margin: 20}}>
        <div>Name: {name}</div>
        <div>Concept: {concept}</div>
        <div>Material: {material}</div>
        <div>Type: {type}</div>
        <div>Product Details: </div>
        {
            details.map(item => <DetailItem item = {item} />)
        }
    </div>
}