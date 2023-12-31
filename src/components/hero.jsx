const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP WITH YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE
        </p>
        <div className="hero-btn">
          <button className="btn-start">Shop Now</button>
          <button className="btn-end">Category</button>
        </div>
        <div className="shopping">
          <p>Also available</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="" />
            <img src="/images/flipkart.png" alt="" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
