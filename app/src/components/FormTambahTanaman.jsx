export default function FormTambahTanaman({
  judul, setJudul,
  kategori, setKategori,
  namaLatin, setNamaLatin,
  frekuensiSiram, setFrekuensiSiram,
  kebutuhanCahaya, setKebutuhanCahaya,
  onSubmit, onBatal
}) {
  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="judul">Judul</label>
        <input id="judul" type="text" value={judul} onChange={(e) => setJudul(e.target.value)} />
      </div>
      <div>
        <label htmlFor="kategori">Kategori</label>
        <select id="kategori" value={kategori} onChange={(e) => setKategori(e.target.value)}>
          <option value="Tanaman daun">Tanaman daun</option>
          <option value="Sukulen">Sukulen</option>
          <option value="Paku-pakuan">Paku-pakuan</option>
          <option value="Kaktus">Kaktus</option>
        </select>
      </div>
      <div>
        <label htmlFor="namaLatin">Nama Latin</label>
        <input id="namaLatin" type="text" value={namaLatin} onChange={(e) => setNamaLatin(e.target.value)} />
      </div>
      <div>
        <label htmlFor="frekuensiSiram">Frekuensi Siram</label>
        <input id="frekuensiSiram" type="text" value={frekuensiSiram} onChange={(e) => setFrekuensiSiram(e.target.value)} />
      </div>
      <div>
        <label htmlFor="kebutuhanCahaya">Kebutuhan Cahaya</label>
        <input id="kebutuhanCahaya" type="text" value={kebutuhanCahaya} onChange={(e) => setKebutuhanCahaya(e.target.value)} />
      </div>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem' }}>
        <button type="submit">Simpan</button>
        <button type="button" onClick={onBatal}>Batal</button>
      </div>
    </form>
  );
}