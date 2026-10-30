import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

const dataMock = [
  {
    id: '1',
    judul: 'Monstera Deliciosa',
    kategori: 'Tanaman daun',
    namaLatin: 'Monstera deliciosa',
    frekuensiSiram: '2 hari sekali',
    kebutuhanCahaya: 'Sedang',
  },
]

describe('Pengujian Aplikasi Koleksi Tanaman Hias - Eka Putri Azhari Ritonga', () => {
  beforeEach(() => {
    window.localStorage.clear()
    vi.spyOn(globalThis, 'fetch').mockResolvedValue({
      ok: true,
      json: async () => dataMock,
    })
  })

  afterEach(() => {
    vi.resetAllMocks()
  })

  it('1. Menampilkan judul utama pada halaman Beranda', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('2. Menampilkan identitas pengembang dan NIM di halaman Tentang', () => {
    render(
      <MemoryRouter initialEntries={['/tentang']}>
        <App />
      </MemoryRouter>,
    )
    const elemenNama = screen.getAllByText(/Eka Putri/i)
    expect(elemenNama.length).toBeGreaterThan(0)

    const elemenNim = screen.getAllByText(/123140028/)
    expect(elemenNim.length).toBeGreaterThan(0)
  })

  it('3. Menampilkan tabel rekapitulasi kategori di halaman Statistik', () => {
    render(
      <MemoryRouter initialEntries={['/statistik']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('4. Menampilkan formulir input dengan label judul di halaman Tambah', () => {
    render(
      <MemoryRouter initialEntries={['/tambah']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByLabelText(/judul/i)).toBeInTheDocument()
  })

  it('5. Menampilkan pesan data tidak ditemukan jika ID koleksi salah', () => {
    render(
      <MemoryRouter initialEntries={['/koleksi/id-acak-tidak-ada']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByText(/tidak ditemukan/i)).toBeInTheDocument()
  })

  it('6. Menampilkan pesan atau heading 404 saat mengakses rute tidak dikenal', () => {
    render(
      <MemoryRouter initialEntries={['/rute-palsu-404']}>
        <App />
      </MemoryRouter>,
    )
    expect(screen.getByRole('heading', { name: /404/i })).toBeInTheDocument()
  })
})