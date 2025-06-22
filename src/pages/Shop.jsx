import { useEffect, useState } from "react";

import Header from "../components/header/Header";
import PurchaseHistory from "../components/purchaseHistory/PurchaseHistory";
import ShoppingCard from "../components/shoppingCard/ShoppingCard";
import Footer from "../components/footer/Footer";
import ProductList from "../components/productList/ProductList";
 //  import cardsInformation from "../../ProductsInformation";

export default function Shop({
  cartItem,
  setCartItem,
  addItemToCart,
  getCountUpdateItem,
  addCountUpdateItem,
  restCountUpdateItem,
  removeItemFromCart,
  setIsModalOpen,
  selectToCartBill,
  counterCartUnidItem,
  calculateEstimated,
  isModalOpen,
  setIsAuthModalOpen,
  setAuthType,
  user,
  purchaseHistory,
  setPurchaseHistory,
  mostrarHistorial,
  setMostrarHistorial
}) {

  const [cardsInformation, setCardsInformation] = useState([]);

  useEffect(() => {
    fetch("https://685646a11789e182b37d86ed.mockapi.io/products/resident-evil")
      .then((res) => res.json())
      .then((data) => setCardsInformation(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  return (
    <>
      <Header
        setIsModalOpen={setIsModalOpen}
        counterCartUnidItem={counterCartUnidItem}
        setIsAuthModalOpen={setIsAuthModalOpen}  
        setAuthType={setAuthType}                
        user={user}   
        mostrarHistorial={mostrarHistorial}
        setMostrarHistorial={setMostrarHistorial}                           
      />
      
      {mostrarHistorial ? (
        <PurchaseHistory purchaseHistory={purchaseHistory} />
      ) : (
        <ProductList
          getCountUpdateItem={getCountUpdateItem}
          addItemToCart={addItemToCart}
          cardsInformation={cardsInformation}
          addCountUpdateItem={addCountUpdateItem}
          restCountUpdateItem={restCountUpdateItem}
        />
      )}

      {isModalOpen && (
        <ShoppingCard
          cartItem={cartItem}
          setCartItem={setCartItem}
          selectToCartBill={selectToCartBill}
          removeItemFromCart={removeItemFromCart}
          setIsModalOpen={setIsModalOpen}
          addCountUpdateItem={addCountUpdateItem}
          restCountUpdateItem={restCountUpdateItem}
          counterCartUnidItem={counterCartUnidItem}
          calculateEstimated={calculateEstimated}
          user={user}
          setIsAuthModalOpen={setIsAuthModalOpen}
          setAuthType={setAuthType}
          setPurchaseHistory={setPurchaseHistory}
          purchaseHistory={purchaseHistory}
        />
      )}
      <Footer/>
    </>
  );
}