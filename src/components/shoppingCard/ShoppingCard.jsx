// revisar el codigo


import "./ShoppingCard.css";
import { useRef } from "react";
import { toast } from "react-toastify";

export default function ShoppingCard({
  setIsModalOpen,
  removeItemFromCart,
  cartItem,
  addCountUpdateItem,
  restCountUpdateItem,
  selectToCartBill,
  calculateEstimated,
  user,
  setIsAuthModalOpen, 
  setAuthType,
  setCartItem,
  setPurchaseHistory,
}) {

  const { totalValue, selectedItem } = calculateEstimated();

  const cerrar = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const toastLockRef = useRef(false);
  
  const handlePurchase = () => {
    const selectedItems = cartItem.filter(item => item.isCountToBill);
    
    // Si no hay productos seleccionados, mostrar advertencia
    if (selectedItems.length === 0) {
      if (!toastLockRef.current) {
        toast.warn("Please select at least one item to proceed with the purchase.", {
          position: "bottom-right",
          autoClose: 4000,
          theme: "colored",
        });

        toastLockRef.current = true;
        setTimeout(() => {
          toastLockRef.current = false;
        }, 10000); // Bloquea el toast por 10 segundos
      }
      return;
    }

    // Si no hay usuario autenticado, abrir modal
    if (!user) {
      setAuthType("login");
      setIsAuthModalOpen(true);
      return;
    }

    // Crear objeto de compra
    const purchase = {
      id: crypto.randomUUID(), // 🆔 ID único moderno
      date: new Date().toLocaleString(),
      items: selectedItems,
      total: selectedItems.reduce((acc, item) => acc + item.price * item.countUpdateItem, 0)
    };

    // Guardar compra en historial
    setPurchaseHistory(prev => [...prev, purchase]);

    // Acciones finales
    toast.success("¡Compra realizada con éxito!", {
      position: "bottom-right",
      autoClose: 4000,
      theme: "colored",
    });

    setCartItem([]);         // Vaciar carrito
    setIsModalOpen(false);   // Cerrar modal
  };


  return (
    <section id="vacio" onClick={cerrar} className="shoppingCard">
      <div className="shoppingCard-container">
        <div className="shoppingCard-wrapper">
          <div className="shoppingCard-products">
            {cartItem.length > 0 ? (
              cartItem.map((item) => {
                return (
                  <article
                    key={item.id}
                    className="shoppingCard-products_section"
                  >
                    <input
                      className="shoppingCard-products-checkbox"
                      checked={item.isCountToBill}
                      onChange={() => selectToCartBill(item.id)}
                      type="checkbox"
                    />
                    <img
                      className="shoppingCard-products-img"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="shoppingCard-products-info">
                      <p className="shoppingCard-products-info_title">
                        {item.name}
                      </p>
                      <button
                        className="shoppingCard-products-delete"
                        onClick={() => removeItemFromCart(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="shoppingCard-products-counter">
                      <button
                        className="shoppingCard-products-counter_lot error-lot"
                        onClick={() =>
                          restCountUpdateItem(item.id, item.countUpdateItem - 1)
                        }
                      >
                        -
                      </button>
                      <input
                        className="shoppingCard-products-counter_quantity"
                        type="number"
                        value={item.countUpdateItem}
                        readOnly
                      />
                      <button
                        onClick={() =>
                          addCountUpdateItem(item.id, item.countUpdateItem + 1)
                        }
                        className="shoppingCard-products-counter_lot"
                      >
                        +
                      </button>
                    </div>
                    <p className="shoppingCard-products-price">{`$ ${item.price}`}</p>
                  </article>
                );
              })
            ) : (
              <div className="shoppingCard-products-empty">
                Your cart is empty! Explore amazing products and add them now.
              </div>
            )}
          </div>
        </div>
        <div className="shoppingCard-resumeClose">
          <div className="shoppingCard-resume">
            <h3 className="shoppingCard-resume-title">Purchase summary</h3>
            <div className="shoppingCard-resume-details">
              <div className="shoppingCard-resume-details-info">


                <div className="shoppingCard-resume-details-info-box">
                  <p>
                    Products <span>({selectedItem})</span>
                  </p>
                  <p>Shipment</p>
                </div>


                <div className="shoppingCard-resume-details-info-box">
                  <p>$ {totalValue}</p>
                  <p>Free</p>
                </div>
              </div>
              <div className="shoppingCard-resume-details-price">
                <p>Total</p>
                <p>$ {totalValue}</p>
              </div>



              
            </div>
            <button 
              className="shoppingCard-resume-purchase"
              onClick={handlePurchase}
            >
              Proceed with the purchase
            </button>
          </div>
          <button
            onClick={() => setIsModalOpen(false)}
            className="shoppingCard-Close"
          >
            Close
          </button>
        </div>
      </div>
    </section>
  );
}
