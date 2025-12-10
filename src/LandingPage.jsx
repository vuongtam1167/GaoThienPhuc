import React, { useState } from 'react';
import './index.css';
import heroImg from './assets/hero.jpg';
import product1 from './assets/product1.jpg';
import product2 from './assets/product2.jpg';
import product3 from './assets/product3.jpg';
import certImg from './assets/certificate.jpg';
import news1 from './assets/news1.jpg';
import news2 from './assets/news2.jpg';
import { Footer } from './Footer';
import avatar1 from './assets/avatar1.jpg';
import avatar2 from './assets/avatar2.jpg';
import avatar3 from './assets/avatar3.jpg';

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const products = [
    {
      img: product1,
      title: 'Gạo trắng',
      desc: 'Gồm gạo thơm ST24, ST25, Jasmine, Tám xoan Hải Hậu, OM18, OM380, Tài Nguyên, Hương Lài và các loại gạo đặc sản khác.'
    },
    {
      img: product2,
      title: 'Gạo lứt',
      desc: 'Gồm gạo lứt đỏ, gạo lứt trắng, gạo lứt đen (tím than), gạo lứt tẻ và gạo lứt nếp.'
    },
    {
      img: product3,
      title: 'Gạo nếp',
      desc: 'Gồm nếp cái hoa vàng, nếp cẩm, nếp nương, nếp sáp và nếp nhung. Ngoài ra còn có nếp Tú Lệ, nếp chùm, nếp Bắc và nếp vải.'
    }
  ];

  const reviews = [
    { text: 'Gạo tốt', by: 'Vinh', time: '3 tiếng trước', avatar: avatar1 },
    { text: 'Ngon, bổ, rẻ', by: 'Trang', time: '1 tuần trước', avatar: avatar2 },
    { text: '5 star', by: 'Hoang', time: '1 tuần trước', avatar: avatar3 }
  ];

  return (
    <div className="landing">
      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="site-name">Gạo Thiên Phúc</div>

          <nav className={`nav ${mobileOpen ? 'open' : ''}`} aria-label="Chính">
            <a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Liên Hệ</a>
            <a href="#products" className="nav-link" onClick={() => setMobileOpen(false)}>Sản Phẩm</a>
            <a href="#contact" className="nav-link" onClick={() => setMobileOpen(false)}>Tuyển Dụng</a>
            <button className="nav-cta btn" onClick={() => setMobileOpen(false)}>Trang Chủ</button>
          </nav>

          <div className="mobile-toggle">
            <button
              aria-label={mobileOpen ? "Đóng menu" : "Mở menu"}
              className="mobile-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        {/* Giới thiệu / Hero */}
        <section id="about" className="hero">
          <h2 className="hero-title">Giới thiệu</h2>

          <div className="hero-top-row">
            <div className="intro-text">
              <p className="hero-lead">
                Thiên Phúc không chỉ là hạt gạo ngon – sạch – bổ dưỡng, mà còn là sự an tâm trong từng bữa ăn,
                gắn kết tinh thần trong gia đình và khẳng định trách nhiệm gìn giữ nông nghiệp Việt Nam bền vững cho thế hệ sau.
              </p>
            </div>
            <div className="intro-cta">
              <button className="btn hero-detail large">Chi tiết</button>
            </div>
          </div>

          <div className="hero-image-wrap hero-image-card">
            <img src={heroImg} alt="Nông dân thu hoạch lúa" className="hero-image" />
          </div>
        </section>

        {/* Sản phẩm */}
        <section id="products" className="section products">
          <h3 className="section-title">Sản phẩm</h3>
          <div className="product-grid">
            {products.map((p, i) => (
              <article key={i} className="product-card">
                <img src={p.img} alt={p.title} className="product-image" />
                <div className="product-copy">
                  <h4 className="product-title">{p.title}</h4>
                  <p className="product-desc">{p.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Cam kết + Chứng nhận */}
        <section className="section commitments">
          <div className="commitments-text">
            <h3 className="section-title center">Cam kết</h3>
            <ol className="commitments-list">
              <li>
                <h4 className="commit-title">1. Cam kết chất lượng hạt gạo</h4>
                <p className="commit-desc">Chỉ chọn lúa giống đạt chuẩn, thu hoạch đúng vụ và xay xát trong ngày. Mỗi hạt gạo đều được sàng lọc kỹ để đảm bảo trắng, đều không lẫn tạp chất hay hạt hỏng.</p>
              </li>
              <li>
                <h4 className="commit-title">2. Cam kết an toàn & dinh dưỡng</h4>
                <p className="commit-desc">Không sử dụng chất tẩy trắng hay hương liệu tổng hợp. Gạo được chế biến theo quy trình chuẩn, giữ lại tối đa vitamin và khoáng chất tự nhiên, an toàn cho mọi thành viên trong gia đình.</p>
              </li>
              <li>
                <h4 className="commit-title">3. Cam kết nguồn gốc minh bạch</h4>
                <p className="commit-desc">Gạo được trồng tại vùng nguyên liệu quy hoạch, canh tác theo tiêu chuẩn VietGAP/GlobalGAP. Mỗi bao gạo đều có mã QR truy xuất hành trình từ cánh đồng đến bàn ăn.</p>
              </li>
            </ol>
          </div>
          <div className="cert-wrap">
            <img src={certImg} alt="Chứng nhận" className="cert-image" />
          </div>
        </section>

        {/* Tin tức */}
        <section id="news" className="section news">
          <h3 className="section-title">Tin tức</h3>
          <div className="news-grid">
            <article className="news-card">
              <img src={news1} alt="news" className="news-image" />
              <div className="news-copy">
                <h4 className="news-title">Xuất khẩu nông lâm thủy sản vượt 52 tỷ USD sau 9 tháng</h4>
                <p className="news-desc">Xuất khẩu nông lâm thủy sản 9 tháng đạt hơn 52 tỷ USD, tăng 14% so với cùng kỳ năm ngoái, nhờ nhiều nhóm hàng chủ lực tăng trưởng mạnh cả giá trị lẫn thị trường.</p>
              </div>
            </article>
            <article className="news-card">
              <img src={news2} alt="news" className="news-image" />
              <div className="news-copy">
                <h4 className="news-title">Thủ tướng yêu cầu tăng tín dụng, mở rộng thị trường xuất khẩu gạo</h4>
                <p className="news-desc">Thủ tướng yêu cầu tăng tín dụng, đa dạng thị trường để đảm bảo an ninh lương thực trước biến động xuất khẩu gạo.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Đánh giá */}
        <section className="section reviews">
          <h3 className="section-title">Đánh giá</h3>
          <div className="reviews-grid">
            {reviews.map((r, idx) => (
              <div key={idx} className="review-card">
                <p className="review-quote">"{r.text}"</p>
                <div className="review-meta-row">
                  <img src={r.avatar} alt={r.by} className="avatar" />
                  <div className="review-meta-col">
                    <div className="review-author">{r.by}</div>
                    <div className="review-time">{r.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Support bar */}
        <div className="support-bar" style={{ marginTop: '24px' }}>
          <div className="container support-inner">
            <h3 className="support-heading">Hỗ trợ</h3>
            <div className="support-buttons">
              <button className="btn btn-primary">Chăm sóc khách hàng</button>
              <button className="btn btn-outline">Khiếu nại</button>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
}
