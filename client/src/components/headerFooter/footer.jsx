import "./../../styles/footer.css";

export default function Footer() {
  return (
    <div className="footer-background">
      <div className="footer-info">
        <div className="company">
          <div className="company-info-title">HIFURDEZ</div>
          <div className="company-icon">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
        <div className="product">
          <div className="product-header">
            <div className="product-header-product">PRODUCT</div>
            <div className="product-header-info">MORE INFO</div>
            <div className="product-header-contact">CONTACT</div>
          </div>
          <div className="product-info">
            <a href="/" className="product-text-a">
              Homepage
            </a>
            <a href="/" className="product-text-b">
              Disclaimer
            </a>
            <a href="/" className="product-text-c">
              268 Ly Thuong Kiet, Ward 11, District 10, Ho Chi Minh City
            </a>
          </div>
          <div className="more-info">
            <a href="/" className="more-info-text-a">
              Collection
            </a>
            <a href="/" className="more-info-text-b">
              Privacy policy
            </a>
            <a href="/" className="more-info-text-c">
              contact@hifurdez.com
            </a>
          </div>
          <div className="contact">
            <a href="/" className="contact-text-a">
              Product
            </a>
            <a href="/" className="contact-text-b">
              Term of use
            </a>
            <a href="/" className="contact-text-c">
              0938604853
            </a>
          </div>
        </div>
      </div>
      <div className="copy-right">
        <p>COPYRIGHT: ©2022 Hifurdez. All rights reserved.</p>
      </div>
    </div>
  );
}
