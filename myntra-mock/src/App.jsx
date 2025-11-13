import React from "react";
import "./App.css";
import ProductCard from "./components/ProductCard";
import mockData from "./mockData.json";

function App() {
  return (
    <div className="app-container">
      <h1>🛍️ My React Store</h1>
      <div className="product-list">
        {mockData.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </div>
    </div>
  );
}

export default App;