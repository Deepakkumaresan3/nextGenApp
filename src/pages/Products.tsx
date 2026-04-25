import React from 'react';
import './Products.css';

const Products: React.FC = () => {
  const products = [
    {
      id: 1,
      title: 'Solar Panels',
      description: 'High-efficiency photovoltaic panels for maximum energy conversion.',
      image: '/assets/products/solar-panel.svg',
      highlights: ['95% Efficiency', '25 Year Warranty', 'Weather Resistant'],
      color: 'color-0'
    },
    {
      id: 2,
      title: 'Solar Inverters',
      description: 'Advanced inverters for optimal power conversion and grid compatibility.',
      image: '/assets/products/inverter.svg',
      highlights: ['Smart Monitoring', 'Grid-Tied', 'Energy Storage Ready'],
      color: 'color-1'
    },
    {
      id: 3,
      title: 'Solar Batteries',
      description: 'Reliable energy storage solutions for uninterrupted power supply.',
      image: '/assets/products/battery.svg',
      highlights: ['Long Lifespan', 'Fast Charging', 'Scalable'],
      color: 'color-2'
    },
    {
      id: 4,
      title: 'Mounting Systems',
      description: 'Durable mounting solutions for various roof types and installations.',
      image: '/assets/products/mounting.svg',
      highlights: ['Universal Fit', 'Corrosion Resistant', 'Easy Installation'],
      color: 'color-3'
    }
  ];

  return (
    <div className="products-page">
      <div className="products-container">
        <div className="section-header">
          <h1 className="section-title">Our Solar Products</h1>
          <p className="section-description">
            Explore our range of premium solar solutions for homes, businesses, and industry.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product, index) => (
            <div key={product.id} className={`product-card ${product.color}`}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-highlights">
                  {product.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className="highlight-dot"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;