import { useState } from 'react'
import { Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'

export default function Koleksi() {
  const { items = [], loading, error } = useKoleksi()
  const [cari, setCari] = useState('')
  const [kategori, setKategori] = useState('')

  if (loading) return <p>Memuat...</p>
  if (error) return <p role="alert">Gagal memuat data: {error}</p>

  const listKategori = Array.from(new Set(items.map((item) => item.kategori)))

  const dataFiltered = items.filter((item) => {
    const cocokJudul = item.judul.toLowerCase().includes(cari.toLowerCase())
    const cocokKategori = !kategori || item.kategori === kategori
    return cocokJudul && cocokKategori
  })

  return (
    <div className="halaman-koleksi">
      <h1>Daftar Koleksi Tanaman Hias</h1>

      <div className="filter-box">
        <input
          type="search"
          placeholder="Cari tanaman..."
          value={cari}
          onChange={(e) => setCari(e.target.value)}
        />

        <select value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="">Semua Kategori</option>
          {listKategori.map((kat) => (
            <option key={kat} value={kat}>
              {kat}
            </option>
          ))}
        </select>
      </div>

      {dataFiltered.length === 0 ? (
        <p>Tanaman tidak ditemukan</p>
      ) : (
        <div className="container-koleksi">
          {dataFiltered.map((item) => (
            <div key={item.id} className="card-item">
              <h3>{item.judul}</h3>
              <p>Kategori: {item.kategori}</p>
              <p>Nama Latin: {item.namaLatin}</p>
              <Link to={`/koleksi/${item.id}`}>Detail</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}