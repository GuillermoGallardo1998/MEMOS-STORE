import { useState } from "react";
import { useRef } from "react";
import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import './App.css';
import Landing from "./pages/landing/Landing";
import Shop from "./pages/Shop";
import PurchaseHistory from "./components/purchaseHistory/PurchaseHistory";
import AuthModal from "./components/auth/AuthModal";

function App() {
  // Muestra el carrito
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Lista de productos en el carrito
  const [cartItem, setCartItem] = useState([]);
  // Modal de login/registro
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  // "login" o "register"
  const [authType, setAuthType] = useState("login"); 
  // Usuario autenticado
  const [user, setUser] = useState(null);
  // Historial de compra
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  // Toggle entre productos e historial
  const [mostrarHistorial, setMostrarHistorial] = useState(false); 

  // Marca o desmarca un producto para la facturación
  const selectToCartBill = (itemId) => {
    setCartItem((prevCartItem) =>
      prevCartItem.map((currentVal) => {
        if (currentVal.id === itemId) {
          return {
            ...currentVal,
            isCountToBill: !currentVal.isCountToBill,
          };
        }
        return {
          ...currentVal,
        };
      })
    );
  };

  // Previene spam de las notificaciones
  const toastLockRef = useRef(false);

  // Agrega un producto nuevo al carrito o actualiza la cantidad si ya existe y notifica que se agrego un nuevo producto o si solo se necesita actualizar la cantidad
  const addItemToCart = (item, countUpdateItem) => {
    setCartItem((prev) => {
      const exists = prev.some((i) => i.id === item.id);
      if (exists) {
        if (!toastLockRef.current) {
          toast.info(`This item is already in your cart. Simply update the quantity as needed.`);
          toastLockRef.current = true;
          setTimeout(() => {
            toastLockRef.current = false;
          }, 10000); // Bloquea el toast por 10 segundos
        }
        return prev.map((i) =>
          i.id === item.id ? { ...i, countUpdateItem } : i
        );
      } else {
        toast.success(`Added to the cart`);
        return [...prev, { ...item, countUpdateItem, isCountToBill: false }];
      }
    });
  };

  // Devuelve la cantidad actual de un producto
  const getCountUpdateItem = (itemId) =>
  cartItem.find((item) => item.id === itemId)?.countUpdateItem ?? null;

  // Actualiza la cantidad de un producto, o lo elimina si la cantidad es 0
  const updateItemCount = (itemId, newCount) => {
    if (newCount <= 0) {
      removeItemFromCart(itemId);
    } else {
      setCartItem((prev) =>
        prev.map((item) =>
          item.id === itemId ? { ...item, countUpdateItem: newCount } : item
        )
      );
    }
  };
  // Permite sumar o restar productos
  const addCountUpdateItem = updateItemCount;
  const restCountUpdateItem = updateItemCount;

  //Elimina un producto del carrito
  const removeItemFromCart = (itemId) => {
    setCartItem((prevCartItem) =>
      prevCartItem.filter((item) => item.id !== itemId)
    );
  };

  // Cuenta la cantidad de productos distintos en el carrito
  const counterCartUnidItem = () => cartItem.length;

  //Calcula el total del valor de productos marcados para pagar
  const calculateEstimated = () => {
    const selectedItems = cartItem.filter(item => item.isCountToBill === true);

    const result = selectedItems.reduce(
      (acc, item) => {
        acc.totalValue += item.price * item.countUpdateItem;
        acc.selectedItem += item.countUpdateItem;
        return acc;
      },{
        totalValue: 0,
        selectedItem: 0,
      }
    );
    return result;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/shop" element={<Shop
          cartItem={cartItem}
          setCartItem={setCartItem}
          addItemToCart={addItemToCart}
          getCountUpdateItem={getCountUpdateItem}
          addCountUpdateItem={addCountUpdateItem}
          restCountUpdateItem={restCountUpdateItem}
          removeItemFromCart={removeItemFromCart}
          setIsModalOpen={setIsModalOpen}
          selectToCartBill={selectToCartBill}
          counterCartUnidItem={counterCartUnidItem}
          calculateEstimated={calculateEstimated}
          isModalOpen={isModalOpen}
          setIsAuthModalOpen={setIsAuthModalOpen}
          setAuthType={setAuthType}
          user={user}
          setPurchaseHistory={setPurchaseHistory}
          purchaseHistory={purchaseHistory}
          mostrarHistorial={mostrarHistorial}
          setMostrarHistorial={setMostrarHistorial}
        />}/>
        <Route path="/history" element={<PurchaseHistory purchaseHistory={purchaseHistory}/>}/>
      </Routes>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        authType={authType}
        setAuthType={setAuthType}
        setUser={setUser}
        user={user}
      />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </>
  );
}

export default App;