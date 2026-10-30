import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout-container" id="app-tanaman">
      <header className="header" id="navigasi-tanaman">
        <div className="header-inner">
          <div className="brand">
            <span className="brand-badge">Flora</span>
            <span className="brand-title">Koleksi Tanaman Hias</span>
          </div>
          <nav className="nav-menu">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Beranda
            </NavLink>
            <NavLink to="/koleksi" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Koleksi
            </NavLink>
            <NavLink to="/tambah" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Tambah
            </NavLink>
            <NavLink to="/statistik" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Statistik
            </NavLink>
            <NavLink to="/tentang" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Tentang
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="main-content" id="konten-tanaman">
        <div className="content-container">
          <Outlet />
        </div>
      </main>

      <footer className="footer" id="kaki-tanaman">
        <div className="footer-inner">
          <p className="footer-text">
            Koleksi Tanaman Hias &copy; {new Date().getFullYear()} Eka Putri Azhari Ritonga &bull; 123140028
          </p>
        </div>
      </footer>
    </div>
  );
}