export default function KotakFilter({ cari, onCari, kategori, onKategori, listKategori = [] }) {
  return (
    <div className="filter-box">
      <input
        type="search"
        placeholder="Cari tanaman..."
        value={cari}
        onChange={(e) => onCari(e.target.value)}
      />
      <select value={kategori} onChange={(e) => onKategori(e.target.value)}>
        <option value="">Semua Kategori</option>
        {listKategori.map((kat) => (
          <option key={kat} value={kat}>
            {kat}
          </option>
        ))}
      </select>
    </div>
  );
}