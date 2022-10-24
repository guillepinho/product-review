import './App.css';
import iconCart from './images/icon-cart.svg';

function App() {
  return (
    <section className="body">
      <div className="product">
        <div className="img-div" />
        <div className="product-info">
          <span className="product-type">P E R F U M E</span>
          <span className="product-title">Gabrielle Essence Eau De Parfum</span>
          <span className="product-desc">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.</span>
          <div className="prices">
            <span className="promo-price">$149.99</span>
            <span className="normal-price">$169.99</span>
          </div>
          <button type="button" onClick={ () => console.log('Hello there!') } className="button">
            <img src={ iconCart } alt="iconCart" />
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
