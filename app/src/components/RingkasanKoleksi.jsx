export default function RingkasanKoleksi({ totalItem, totalKategori }) {
  return (
    <div className="ringkasan" style={{ marginTop: '1.5rem' }}>
      <p><strong>Total Koleksi:</strong> {totalItem} item</p>
      <p><strong>Total Kategori:</strong> {totalKategori} kategori</p>
    </div>
  );
}