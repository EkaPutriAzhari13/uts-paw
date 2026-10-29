import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'

export default function Tambah() {
  const navigate = useNavigate()
  const { tambah } = useKoleksi()

  const [judul, setJudul] = useState('')
  const [kategori, setKategori] = useState('Tanaman daun')
  const [namaLatin, setNamaLatin] = useState('')
  const [frekuensiSiram, setFrekuensiSiram] = useState('')
  const [kebutuhanCahaya, setKebutuhanCahaya] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!judul.trim()) {
      setError('Judul tidak boleh kosong')
      return
    }

    tambah({
      judul,
      kategori,
      namaLatin,
      frekuensiSiram,
      kebutuhanCahaya
    })

    navigate('/koleksi')
  }

  return (
    <div className="halaman-tambah">
      <h1>Tambah Tanaman</h1>

      {error && <p role="alert">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="judul">Judul</label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="kategori">Kategori</label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
          >
            <option value="Tanaman daun">Tanaman daun</option>
            <option value="Sukulen">Sukulen</option>
            <option value="Paku-pakuan">Paku-pakuan</option>
            <option value="Kaktus">Kaktus</option>
          </select>
        </div>

        <div>
          <label htmlFor="namaLatin">Nama Latin</label>
          <input
            id="namaLatin"
            type="text"
            value={namaLatin}
            onChange={(e) => setNamaLatin(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
          <input
            id="frekuensiSiram"
            type="text"
            value={frekuensiSiram}
            onChange={(e) => setFrekuensiSiram(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
          <input
            id="kebutuhanCahaya"
            type="text"
            value={kebutuhanCahaya}
            onChange={(e) => setKebutuhanCahaya(e.target.value)}
          />
        </div>

        <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
          <button type="submit">Simpan</button>
          <button type="button" onClick={() => navigate('/koleksi')}>Batal</button>
        </div>
      </form>
    </div>
  )
}