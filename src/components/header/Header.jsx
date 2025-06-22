import "./Header.css";
import cartIcon from "/icons/grocery-store.png";
import userIcon from "/icons/profile-user.png";
import { useNavigate } from "react-router-dom";

export default function Header({
  setIsModalOpen,
  counterCartUnidItem,
  setIsAuthModalOpen,  
  setAuthType,          
  user,
  mostrarHistorial,
  setMostrarHistorial 
}) {

  const navigate = useNavigate();
  
  return (
    <section className="header">
      <h1 className="header-logo">MEMOS 
        <span> STORE</span>
      </h1>

      <div className="history-shopping-profile">
        <button
          className="history-button"
          aria-label="Purchase history"
          onClick={() => setMostrarHistorial(!mostrarHistorial)}
        >
          {mostrarHistorial ? "Store" : "Historical"}
        </button>


        <button
          className="shoppingCart-button"
          aria-label="Open shopping cart"
          onClick={() => setIsModalOpen(true)}
        >
          <img className="shoppingCart-img" src={cartIcon} alt="Shopping cart logo" />
          <span className="shoppingCart-counter">{counterCartUnidItem()}</span>
        </button>

        <button 
          className="profile-button" 
          aria-label="Login to your account"
          onClick={() => {
            if (user) {
              navigate("/shop");
            } else {
              setIsAuthModalOpen(true);
              setAuthType("login");
            }
          }}
        >
          <img className="profile-img" src={userIcon} alt="Profile logo" />
          <p className="profile-text">
            {user ? `Hi, ${user.username}` : "Login"}
          </p>
        </button>
      </div>

    </section>
  );
}
