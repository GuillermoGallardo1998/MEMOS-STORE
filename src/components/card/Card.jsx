import "./Card.css";
import { useEffect, useState } from "react";

export default function Card({
  name,                // nombre del producto
  id,                  // id único
  description,         // descripción
  price,               // precio
  image,               // URL de la imagen
  addItemToCart,       // función para agregar al carrito
  getCountUpdateItem,  // función para obtener la cantidad en el carrito
  addCountUpdateItem,  // función para sumar unidades en el carrito
  restCountUpdateItem, // función para restar unidades en el carrito
}) {
  // Estado para saber si la imagen ya cargó
  const [loaded, setLoaded] = useState(false);

  // Contador local, sirve cuando el producto aún no está en el carrito
  const [counter, setCounter] = useState(1);

  // Este valor se actualiza si el producto ya fue agregado al carrito
  const counterTrue = getCountUpdateItem(id);

  // Esta función se encarga de restar 1 al contador,
  // ya sea al local o al del carrito si el producto ya fue agregado.
  // También evita que baje de cero.
  const restar = () => {
    if (counterTrue) {
      if (counterTrue > 0) {
        restCountUpdateItem(id, counterTrue - 1);
      }
    } else {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }
  };

  // Esta función suma 1 a la cantidad, igual que la de restar:
  // si el producto ya está en el carrito, lo actualiza allá;
  // si no, lo aumenta localmente.
  const sumar = () => {
    if (counterTrue) {
      addCountUpdateItem(id, counterTrue + 1);
    } else {
      setCounter(counter + 1);
    }
  };

  // Cada vez que el valor en el carrito cambia (counterTrue),
  // si ya no hay producto en el carrito, reinicia el contador local a 1.
  useEffect(() => {
    if (counterTrue === null) {
      setCounter(1);
    }
  }, [counterTrue]);

  // Define la cantidad que se va a usar:
  // Si ya está en el carrito, usa la cantidad de allá.
  // Si no, usa el contador local.
  const cantidad = counterTrue ?? counter;

  return (
    <article key={id} className="cardContainer">
      <>
        {!loaded && <div className="skeleton-img" />}
        <img
          className="cardContainer-img"
          src={image}
          alt={name}
          onLoad={() => setLoaded(true)}
          style={{ display: loaded ? "block" : "none" }}
        />
      </>
      <div className="cardContainer-content">
        <div className="cardContainer-info">
          <h3 className="cardContainer-info_title">{name}</h3>
          <p className="cardContainer-info_description">{description}</p>
          <p className="cardContainer-info_price">$ {price}</p>
        </div>
        <div className="cardContainer-button">
          <button className="cardContainer-button_lot" onClick={restar}>
            -
          </button>
          <input
            className="cardContainer-button_quantity"
            type="number"
            readOnly
            // Muestra la cantidad del carrito si existe, si no, muestra la del contador local
            value={counterTrue ?? counter}
          />
          <button className="cardContainer-button_lot" onClick={sumar}>
            +
          </button>
        </div>
      </div>
      <button
        className="cardContainer-add"
        // Si la cantidad es 0 o menos, desactiva el botón para evitar agregarlo al carrito
        disabled={(counterTrue ?? counter) <= 0}
        // Cuando se hace clic, agrega el producto al carrito con la cantidad correcta
        onClick={() => {
          addItemToCart({ name, id, price, image }, cantidad);
        }}
      >
        Add to cart
      </button>
    </article>
  );
}
