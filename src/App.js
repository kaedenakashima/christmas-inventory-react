import React, { useState, useEffect } from 'react';
import { inventory } from './data';
import ChristmasItem from './components/ChristmasItem'
import filterProductsByConcept from './filter/filterProductsByConcept';
import filterProductsByMaterial from './filter/filterProductsByMaterial';
import filterProductsByName from  './filter/filterProductsByName';
import filterProductsByType from  './filter/filterProductsByType';
import filterProductsByPrice from  './filter/filterProductsByPrice';
import filterProductsByPriceRange from  './filter/filterProductsByPriceRange';
import filterProductsByStockRange from  './filter/filterProductsByStockRange';
import RangeSliderMui from './components/FormInputs/RangeSliderMui';

function App () {
  const [items, setItems] = useState(inventory);
  const [name, setName] = useState('');
  const [concept, setConcept] = useState('');
  const [material, setMaterial] = useState('');
  const [type, setType] = useState('');
  const [priceMin, setPriceMin] = useState('');
  const [priceMax, setPriceMax] = useState('');  
  // const [stockMin, setStockMin] = useState('');
  // const [stockMax, setStockMax] = useState('');

  useEffect (() => {
    const min = parseInt(priceMin, 10);
    const max = parseInt(priceMax, 10);
    if(min && max) {
      const result = filterProductsByPrice(inventory, min, max);
      setItems(result);
    }
  },[priceMin, priceMax]);


  const findFromProductName = e => {
    setName(e.target.value);
    const result = filterProductsByName(inventory, e.target.value);
    setItems(result);
  };

  const findFromConcept = e => {
    setConcept(e.target.value);
    const result = filterProductsByConcept(inventory, e.target.value);
    setItems(result);
  };

  const findFromMaterial = e => {
    setMaterial(e.target.value);
    const result = filterProductsByMaterial(inventory, e.target.value);
    setItems(result);
  };

  const findFromType = e => {
    setType(e.target.value);
    const result = filterProductsByType(inventory, e.target.value);
    setItems(result);
  };

  const filterProductsByPriceMin = e => {
    setPriceMin(e.target.value);
  };

  const filterProductsByPriceMax = e => {
    setPriceMax(e.target.value);
  };

  const handlePriceRangeSliderChange = value => {
    const result = filterProductsByPriceRange(inventory, value[0], value[1]);
    setItems(result);
  }

  const handleStockRangeSliderChange = value => {
    const result = filterProductsByStockRange(inventory, value[0], value[1]);
    setItems(result);
  }

  return (
    <div className="App">
      <div style={{fontFamily: 'Courier Prime', width: '650px', textAlign: 'center', margin: '0 auto',}}>
        <h1 style={{color: '#222', fotWeight:'bold', paddding:'.2em .5em'}}>
          🎄Find Christmas Items🎄
        </h1>
        <table style={{marginTop:'1em', marginLeft:'5em', textAlign:'left'}}>
          <tr>
            <td>Find product from name</td>
            <td>
              <input type='text' value={name} onChange={findFromProductName} />
            </td>
          </tr>
          <tr>
            <td>Find product from concept</td>
            <td>
              <input type='text' value={concept} onChange={findFromConcept} />
            </td>
          </tr>
          <tr>
            <td>Find product from material</td>
            <td>
              <input type='text' value={material} onChange={findFromMaterial} />
            </td>
          </tr>
          <tr>
            <td>Find product from type</td>
            <td>
              <input type='text' value={type} onChange={findFromType} />
            </td>
          </tr>
          <tr>
            <td>Find product from price(min)</td>
            <td>
              <input type='text' value={priceMin} onChange={filterProductsByPriceMin} />
            </td>
          </tr>
          <tr>
            <td>Find product from price(max)</td>
            <td>
              <input type='text' value={priceMax} onChange={filterProductsByPriceMax} />
            </td>
          </tr>
        </table>
      <div style={{marginLeft: '5em'}}>
        <div style={{marginTop: '1em', textAlign: 'left'}}>Sort out from Price</div>
          <RangeSliderMui min={0} max={120} initialRange={[0, 120]} onChange={handlePriceRangeSliderChange} />
        <div style={{marginTop: '1em', textAlign: 'left'}}>Sort out from Stock</div>
          <RangeSliderMui min={0} max={300} initialRange={[0, 300]} onChange={handleStockRangeSliderChange} />
      </div>
      <div style={{width:'500px', textAlign:'left', margin:'auto', paddingLeft:'5em'}}>
        <div>
          {
            items.map(item => <ChristmasItem item = {item} />)
          }
        </div>
      </div>  
    </div>  
  </div>
  );
}
export default App;
