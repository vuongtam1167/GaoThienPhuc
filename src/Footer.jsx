import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="site-footer-component">
      <div className="footer-main">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <div className="brand-name">Gạo Thiên Phúc</div>
            <div className="brand-social" aria-hidden>
              <a className="social-link" href="#" aria-label="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
              <a className="social-link" href="#" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a className="social-link" href="#" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
              <a className="social-link" href="#" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>

          <div className="footer-col">
            <div className="col-title">Danh mục</div>
            <ul className="col-list">
              <li><a href="#about">Giới thiệu</a></li>
              <li><a href="#products">Sản phẩm</a></li>
              <li><a href="#contact">Liên hệ</a></li>
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
      <div id="contact"></div>
    </footer>
  );
}
