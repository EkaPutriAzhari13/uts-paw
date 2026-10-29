import mahasiswa from '../../mahasiswa.json'

export default function Tentang() {
    return (
        <div className="tentang">
            <h1> Tentang Pembuat</h1>
            <dl>
                <dt>Nama</dt>
                <dd>{mahasiswa.nama}</dd>
                <dt>NIM</dt>
                <dd>{mahasiswa.nim}</dd>
                <dt>Kelas</dt>
                <dd>{mahasiswa.kelas}</dd>
                <dt>Tema</dt>
                <dd>{mahasiswa.tema}</dd>
            </dl>
            <p>
                <a href="https://github.com/EkaPutriAzhari13/uts-paw" target="_blank" rel="noreferrer">
                Repository Github
                </a>
            </p>
        </div>
    )
}