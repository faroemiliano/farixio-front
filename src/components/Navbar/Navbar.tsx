import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">FARIXIO</div>

        <nav className="navbar-links">
          <a href="#projects">Proyectos</a>
          <a href="#services">Servicios</a>
          <a href="#contact">Contacto</a>
        </nav>

        <button className="navbar-button">Trabajemos</button>
      </div>
    </header>
  );
}
