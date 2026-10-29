import { useParams, useNavigate, Link } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi'

export default function Detail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { items = [], hapus } = useKoleksi()

  // Mencari item berdasarkan ID (konversi String untuk antisipasi beda tipe data)
  const item = items.find((i) => String(i.id) === String(id))

  // Jika item tidak ditemukan
  if (!item) {
    return <p>tidak ditemukan</p>
  }

  // Handler tombol hapus dengan konfirmasi
  const handleHapus = () => {
    const setuju = window.confirm('Yakin ingin menghapus tanaman ini?')
    if (setuju) {
      hapus(item.id)
      navigate('/koleksi')
    }
  }

  return (
    <div className="halaman-detail">
      <h1>{item.judul}</h1>

      <dl>
        <dt>Kategori</dt>
        <dd>{item.kategori}</dd>

        <dt>Nama Latin</dt>
        <dd>{item.namaLatin}</dd>

        <dt>Frekuensi Siram</dt>
        <dd>{item.frekuensiSiram}</dd>

        <dt>Kebutuhan Cahaya</dt>
        <dd>{item.kebutuhanCahaya}</dd>
      </dl>

      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button onClick={handleHapus}>Hapus</button>
        <Link to="/koleksi">Kembali</Link>
      </div>
    </div>
  )
}