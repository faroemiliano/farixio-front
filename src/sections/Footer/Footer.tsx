import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>FARIXIO</h2>

          <p>
            Desarrollo de productos digitales, plataformas SaaS y experiencias
            web modernas.
          </p>
        </div>

        <div className="footer-links">
          <a href="#projects">Proyectos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Farixio. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
