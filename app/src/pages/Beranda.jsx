import useKoleksi from '../hooks/useKoleksi.js'

export default function Beranda() {
    const { items = [], loading, error } = useKoleksi()

    // Untuk menghitung jumlah kategori unik
    const jumlahKategori = new Set(items.map((item) => item.kategori)).size

    return (
        <div className="beranda">
            <h1>Koleksi Tanaman Hias</h1>
            <p> Selamat datang di aplikasi manajemen koleksi tanaman hias.</p>

            {!loading && !error && (
                <div className="ringkasan" style={{ marginTop: '1.5rem' }}>
                    <p><strong>Total Koleksi:</strong> {items.length} item</p>
                    <p><strong>Total Kategori:</strong> {jumlahKategori} kategori</p>
                </div>
            )}
        </div>
    )
}