import React from "react";
import "../css/Footer.css";

function App() {
  return (
    <div className="app-container">
      <div className="content">{/* Konten utama di sini */}</div>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 Nama Perusahaan. All Rights Reserved.
          </p>
          <div className="footer-social">
            {/* Tambahkan ikon media sosial atau tautan lain di sini */}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
