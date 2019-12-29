import React from 'react';

export default ({item}) => {
    const { price, stock, color } = item;
    return <div style={{margin:20}}>
        <div>price:{price}</div>
        <div>stock:{stock}</div>
        <div>color:{color}</div>
    </div>
}