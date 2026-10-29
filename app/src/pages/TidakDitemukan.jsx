import { Link } from 'react-router-dom'

export default function TidakDitemukan() {
  return (
    <div className="halaman-404">
      <h1>404</h1>
      <p>Halaman tidak ditemukan</p>
      <Link to="/">Kembali ke Beranda</Link>
    </div>
  )
}