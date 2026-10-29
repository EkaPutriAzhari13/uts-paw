import useKoleksi from '../hooks/useKoleksi'

export default function Statistik() {
  const { items = [] } = useKoleksi()

  const rekap = items.reduce((acc, item) => {
    acc[item.kategori] = (acc[item.kategori] || 0) + 1
    return acc
  }, {})

  return (
    <div className="halaman-statistik">
      <h1>Statistik Koleksi</h1>

      <table>
        <thead>
          <tr>
            <th>Kategori</th>
            <th>Jumlah</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(rekap).map(([kat, total]) => (
            <tr key={kat}>
              <td>{kat}</td>
              <td>{total}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>{items.length}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}