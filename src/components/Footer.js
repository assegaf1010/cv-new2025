import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social-links">
          <a href="https://www.instagram.com/aassgf_/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.tiktok.com/@aassgf_?_t=ZS-8t2M2IIl5bU&_r=1" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-assegaf/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/assegaf1010?tab=overview&from=2025-01-01&to=2025-01-14" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="bi bi-github"></i>
          </a>
        </div>
        <p className="copyright">© {currentYear} Muhammad Assegaf</p>
      </div>
    </footer>
  );
}

export default Footer;

