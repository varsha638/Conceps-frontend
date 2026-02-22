import { useState, useMemo } from "react";

const products = [
  {
    id: 1,
    name: "Badminton Racket",
    price: "₹1200",
    img: "/images/racket1.png",
    description: "High quality lightweight racket for professional play."
  },
  {
    id: 2,
    name: "Badminton Shoes",
    price: "₹2200",
    img: "/images/shoes1.webp",
    description: "Comfortable non-slip shoes designed for badminton courts."
  },
  {
    id: 3,
    name: "T-Shirt",
    price: "₹800",
    img: "/images/tshirts1.webp",
    description: "Breathable sports t-shirt for everyday training."
  },
  {
    id: 4,
    name: "Track Pants",
    price: "₹900",
    img: "/images/trackpants1.webp",
    description: "Flexible and stretchable track pants for practice."
  },
  {
    id: 5,
    name: "Shorts",
    price: "₹700",
    img: "/images/shorts1.jpeg",
    description: "Lightweight badminton shorts for maximum comfort."
  },
  {
    id: 6,
    name: "Grip",
    price: "₹150",
    img: "/images/grip1.jpg",
    description: "Anti-slip overgrip for better racket control."
  },
  {
    id: 7,
    name: "Shuttlecock Pack",
    price: "₹300",
    img: "/images/shuttle1.webp",
    description: "Durable shuttlecocks suitable for tournaments."
  },
  {
    id: 8,
    name: "Bag",
    price: "₹1800",
    img: "/images/bags1.jpg",
    description: "Spacious badminton kit bag with multiple compartments."
  }
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [query, setQuery] = useState("");
  const [sortType, setSortType] = useState("");
  const [cart, setCart] = useState([]);

  const filtered = useMemo(() => {
    let list = products.slice();

    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(q));
    }

    if (sortType === "price-asc") {
      list.sort((a, b) => parseInt(a.price.replace(/\D/g, "")) - parseInt(b.price.replace(/\D/g, "")));
    } else if (sortType === "price-desc") {
      list.sort((a, b) => parseInt(b.price.replace(/\D/g, "")) - parseInt(a.price.replace(/\D/g, "")));
    } else if (sortType === "alpha-asc") {
      list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortType === "alpha-desc") {
      list.sort((a, b) => b.name.localeCompare(a.name));
    }

    return list;
  }, [query, sortType]);

  // show all filtered products on one page
  const currentProducts = filtered;

  const addToCart = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  const increaseQty = (id) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  const decreaseQty = (id) => {
    setCart((c) => {
      const next = { ...c };
      if (!next[id]) return next;
      next[id] = next[id] - 1;
      if (next[id] <= 0) delete next[id];
      return next;
    });
  };

  return (
    <>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, gap: 12}}>
        <div className="product-controls" style={{flex: 1}}>
          <input
            className="search-input"
            placeholder="Search products..."
            value={query}
              onChange={(e) => { setQuery(e.target.value); }}
          />

          <div className="sort-buttons">
            <button onClick={() => setSortType('price-asc')}>Price ↑</button>
            <button onClick={() => setSortType('price-desc')}>Price ↓</button>
            <button onClick={() => setSortType('alpha-asc')}>A-Z</button>
            <button onClick={() => setSortType('alpha-desc')}>Z-A</button>
            <button onClick={() => { setSortType(''); setQuery(''); }}>Reset</button>
          </div>
        </div>
      </div>

      <div className="product-grid">
        {currentProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-box">
              <img src={product.img} alt={product.name} />
            </div>

            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>

            <div style={{display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center'}}>
              <button
                className="view-btn"
                onClick={() => setSelectedProduct(product)}
              >
                View Details
              </button>

              {cart[product.id] ? (
                <div className="qty-controls">
                  <button className="qty-btn" onClick={() => decreaseQty(product.id)}>-</button>
                  <div className="qty-value">{cart[product.id]}</div>
                  <button className="qty-btn" onClick={() => increaseQty(product.id)}>+</button>
                </div>
              ) : (
                <button
                  className="add-cart-btn"
                  onClick={() => addToCart(product.id)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination removed - showing all products on one page */}

      {/* MODAL */}
      {selectedProduct && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedProduct.img}
              alt={selectedProduct.name}
            />
            <h2>{selectedProduct.name}</h2>
            <p className="price">{selectedProduct.price}</p>
            <p className="description">
              {selectedProduct.description}
            </p>

            <button
              className="close-btn"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}