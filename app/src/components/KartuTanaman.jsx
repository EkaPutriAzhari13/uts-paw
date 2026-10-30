import { Link } from 'react-router-dom';

export default function KartuTanaman({ item }) {
  return (
    <div className="card-item">
      <h3>{item.judul}</h3>
      <p>Kategori: {item.kategori}</p>
      <p>Nama Latin: {item.namaLatin}</p>
      <Link to={`/koleksi/${item.id}`}>Detail</Link>
    </div>
  );
}