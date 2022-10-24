import './App.css';
import imgDesktop from './images/image-product-desktop.jpg';
import imgMobile from './images/image-product-mobile.jpg';
import iconCart from './images/icon-cart.svg';

function App() {
  return (
    <main className="body">
      <div className="product">
        <picture>
          <source media="(min-width: 610px)" srcset={ imgDesktop } />
          <img src={ imgMobile } alt="teste" width={300} className="img-div" />
        </picture>
        <section className="product-info">
          <span className="product-type">P E R F U M E</span>
          <h1 className="product-title">Gabrielle Essence Eau De Parfum</h1>
          <span className="product-desc">A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfume-Creator for the House of CHANEL.</span>
          <div className="prices">
            <span className="promo-price">$149.99</span>
            <span className="normal-price"><del>$169.99</del></span>
          </div>
          <button type="button" onClick={ () => console.log('Hello there!') } className="button">
            <img src={ iconCart } alt="iconCart" />
            Add to Cart
          </button>
        </section>
      </div>
    </main>
  );
}

export default App;
