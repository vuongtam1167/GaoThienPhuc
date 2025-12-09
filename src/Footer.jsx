import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="site-footer-component">
      {/* Main Footer */}
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <div className="brand-name">Gạo Thiên Phúc</div>
            <div className="brand-social">
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faYoutube} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>

          <div className="footer-col">
            <div className="col-title">Danh mục</div>
            <ul className="col-list">
              <li>Giới thiệu</li>
              <li>Sản phẩm</li>
              <li>Liên hệ</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="col-title">Liên hệ</div>
            <ul className="col-list">
              <li>ctytnhhst.thienphuc@gmail.com</li>
              <li>0816999079</li>
              <li>An Thái - An Cư, Cái Bè, Việt Nam</li>
            </ul>
          </div>

          <div className="footer-col">
            <div className="col-title">Chính sách</div>
            <ul className="col-list">
              <li>Quy định chung</li>
              <li>Chính sách mua hàng & thanh toán</li>
              <li>Chính sách bảo mật</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
