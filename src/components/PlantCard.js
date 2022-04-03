import React, {useState} from "react";

function PlantCard({plant}) {

  const { id , name, image, price} = plant
const [inStock, setInStock] = useState(true)
function updateStock(e){
  if (inStock){
 setInStock(false);
  } else setInStock(true)
}

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={updateStock}>In Stock</button>
      ) : (
        <button onClick={updateStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
 