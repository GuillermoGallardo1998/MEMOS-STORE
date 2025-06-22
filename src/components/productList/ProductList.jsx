import "./ProductList.css";
import Card from "../card/Card";
import iconSearch from "/icons/magnifying-glass-solid.svg";
import backgroundImage from "/img/Resident-evil-9-requiem.jpg";
import { useState } from "react";

export default function ProductList({
  cardsInformation,
  addItemToCart,
  getCountUpdateItem,
  addCountUpdateItem,
  restCountUpdateItem,
}) {

  // 🆕 Estados locales para búsqueda y filtro
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all"); // "game", "movie", "all"

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // 🆕 Lógica de filtrado combinando nombre + tipo
  const filteredCards = cardsInformation.filter((card) => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || card.type === filterType;
    return matchesSearch && matchesType;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);


  return (
    <section className="productList">
      <img className="productList-background"
        src={backgroundImage}
        alt="Banner showing Resident Evil 9: Requiem"
      />
      <h2 className="productList-title">EXPLORE THE FULL RESIDENT EVIL LEGACY</h2>



      <div className="productList-filters">
        <div className="productList-filters-search">
          <input 
            className="productList-filters-search_input" 
            type="text"
            placeholder="Search by name"
            value={searchTerm} // 🆕
            onChange={(e) => setSearchTerm(e.target.value)} // 🆕
          /> 
          <button className="productList-filters-search_button">
            <img className="productList-filters-search_icon" src={iconSearch} alt="Search icon" />
          </button>
          
        </div>
        <div className="productList-filters-selector">
          <button 
            className={`productList-filters-selector-button ${filterType === "game" ? "active" : ""}`}
             onClick={() => setFilterType("game")}
          >Games</button>
          <button
            className={`productList-filters-selector-button ${filterType === "movie" ? "active" : ""}`}
            onClick={() => setFilterType("movie")}
          >
            Movies
          </button>
          <button
            className={`productList-filters-selector-button ${filterType === "all" ? "active" : ""}`}
            onClick={() => setFilterType("all")}
          >
            All
          </button>
        </div>
      </div>



      <div className="productList-cardContainer">
        {currentCards.length > 0 ? (
          currentCards.map((card) => (
            <Card
              key={card.id}
              getCountUpdateItem={getCountUpdateItem}
              addItemToCart={addItemToCart}
              name={card.name}
              id={card.id}
              description={card.description}
              price={card.price}
              image={card.image}
              addCountUpdateItem={addCountUpdateItem}
              restCountUpdateItem={restCountUpdateItem}
            />
          ))
        ) : (
          <p className="productList-cardContainer-noResults">
            🔍 No products found. Try a different name or filter.
          </p>
        )}
      </div>


      <div className="productList-pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`productList-pagination-button ${currentPage === i + 1 ? "active" : ""}`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
