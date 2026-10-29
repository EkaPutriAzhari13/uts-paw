
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('Testing halaman aplikasi', () => {
  it('menampilkan NIM di halaman tentang', () => {
    render(
      <MemoryRouter initialEntries={['/tentang']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/123140028/)).toBeInTheDocument()
  })

  it('menampilkan pesan jika data koleksi tidak ada', () => {
    render(
      <MemoryRouter initialEntries={['/koleksi/999']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByText(/tidak ditemukan/i)).toBeInTheDocument()
  })

  it('menampilkan tabel di halaman statistik', () => {
    render(
      <MemoryRouter initialEntries={['/statistik']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('table')).toBeInTheDocument()
  })

  it('menampilkan input judul di halaman tambah', () => {
    render(
      <MemoryRouter initialEntries={['/tambah']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByLabelText(/judul/i)).toBeInTheDocument()
  })
})
