"use client";

import { useState } from "react";

const ACCOUNT_NUMBER = "005501080441502";
const WHATSAPP_NUMBER = "6281252041414";
// Google Form: unggah bukti (file upload -> folder Drive panitia) + konfirmasi.
// Pakai URL responder (/viewform), bukan URL /edit.
const FORM_URL =
  "https://docs.google.com/forms/d/1_yZWO-MqzWwybzB4IJdthUp-n9yG7hpC8G3-smHIYTg/viewform";

const whatsappMessage = encodeURIComponent(
  "Halo Panitia Agustusan GSR 2026, saya sudah berdonasi, mengunggah bukti transfer ke Drive, dan mengisi formulir konfirmasi. Mohon dibantu dicek. Terima kasih 🙏🇮🇩",
);

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="8" y="8" width="11" height="11" rx="2" />
      <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
    </svg>
  );
}

function FormIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path d="M9.5 10h5M9.5 13.5h5M9.5 17h3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}

export default function Home() {
  const [copied, setCopied] = useState(false);

  async function copyAccount() {
    await navigator.clipboard.writeText(ACCOUNT_NUMBER);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2200);
  }

  return (
    <main>
      <section className="hero" id="beranda">
        <nav className="nav shell" aria-label="Navigasi utama">
          <a className="brand" href="#beranda">
            <span className="brand-mark">17</span>
            <span className="brand-copy">
              <strong>GSR Merdeka</strong>
              <small>Agustusan 2026</small>
            </span>
          </a>
          <a className="nav-cta" href="#donasi">
            Mulai donasi
          </a>
        </nav>

        <div className="hero-content shell">
          <div className="hero-copy">
            <img
              className="hut-logo"
              src="/logo-hutri81.jpg"
              alt="Logo resmi HUT ke-81 Republik Indonesia: Indonesia Berdaulat, Adil dan Makmur"
            />
            <p className="eyebrow">Graha Swarna Residence mempersembahkan</p>
            <h1>
              Rayakan merdeka,
              <span>hangatkan kebersamaan.</span>
            </h1>
            <p className="hero-lead">
              Satu lingkungan, satu semangat. Mari gotong royong menyiapkan
              Kegiatan Agustusan GSR 2026 yang seru untuk anak-anak, keluarga,
              dan seluruh warga.
            </p>
            <a className="button hero-button" href="#donasi">
              Saya mau berdonasi <ArrowIcon />
            </a>
            <p className="microcopy">Tidak ada nominal minimum · proses ±2 menit</p>
          </div>

          <div className="hero-art" aria-label="Poster 17 Agustus GSR 2026">
            <div className="poster-rays" />
            <p>GSR PUNYA HAJAT</p>
            <strong>17</strong>
            <span>AGUSTUS 2026</span>
            <div className="poster-ribbon">RUKUN · KOMPAK · MERIAH</div>
            <div className="flag-line" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <span>LOMBA WARGA</span>
          <b>✦</b>
          <span>PANGGUNG KEBERSAMAAN</span>
          <b>✦</b>
          <span>SEMANGAT GOTONG ROYONG</span>
          <b>✦</b>
          <span>MERDEKA!</span>
        </div>
      </section>

      <section className="intro shell" id="donasi">
        <div>
          <p className="eyebrow red">Cukup dua langkah</p>
          <h2>Mudah dari ponsel,<br />selesai dalam sekali jalan.</h2>
        </div>
        <p>
          Transfer melalui aplikasi bank pilihan Anda, lalu unggah bukti dan
          konfirmasi sekaligus di satu formulir. Selesai.
        </p>
      </section>

      <section className="steps shell" aria-label="Langkah donasi">
        <article className="step-card payment-card">
          <div className="step-top">
            <span className="step-number">01</span>
            <span className="step-label">TRANSFER</span>
          </div>
          <div className="bank">
            <div className="bank-head">
              <span className="bri">BRI</span>
              <small>Rekening donasi panitia</small>
            </div>
            <p>Nomor rekening</p>
            <strong>{ACCOUNT_NUMBER.replace(/(\d{4})(?=\d)/g, "$1 ")}</strong>
            <span className="account-name">Kegiatan Agustusan GSR 2026</span>
          </div>
          <button className="button copy-button" type="button" onClick={copyAccount}>
            <CopyIcon />
            {copied ? "Rekening tersalin ✓" : "Salin nomor rekening"}
          </button>
          <a
            className="text-link"
            href="https://bri.co.id/brimo"
            target="_blank"
            rel="noreferrer"
          >
            Sudah tersalin? Buka BRImo ↗
          </a>
          <p className="card-note">
            Nominal dan persetujuan akhir tetap dilakukan dengan aman di
            aplikasi bank Anda.
          </p>
        </article>

        <article className="step-card upload-card">
          <div className="step-top">
            <span className="step-number">02</span>
            <span className="step-label">UNGGAH BUKTI &amp; KONFIRMASI</span>
          </div>
          <div className="icon-circle">
            <FormIcon />
          </div>
          <h3>Sudah transfer?<br />Selesaikan di satu formulir.</h3>
          <p>
            Cukup satu langkah: isi blok/nama, nominal, dan tanggal transfer,
            lalu unggah foto atau PDF bukti transfer — semuanya di dalam
            formulir. Praktis, ±1 menit.
          </p>
          <a
            className="button upload-button"
            href={FORM_URL}
            target="_blank"
            rel="noreferrer"
          >
            Unggah bukti &amp; konfirmasi <ArrowIcon />
          </a>
          <div className="secure-note">
            <span>✓</span>
            <p>
              Foto/PDF bukti otomatis tersimpan di Google Drive panitia. Warga
              perlu masuk ke akun Google saat mengunggah file.
            </p>
          </div>
          <p className="upload-help">
            Ada kendala?{" "}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp panitia 0812-5204-1414
            </a>
          </p>
        </article>
      </section>

      <section className="gallery shell" aria-label="Momen Agustusan tahun lalu">
        <div className="gallery-head">
          <p className="eyebrow red">Momen tahun lalu</p>
          <h2>Keseruan yang ingin<br />kita ulang tahun ini.</h2>
          <p className="gallery-lead">
            Senyum anak-anak, lomba warga, dan kebersamaan di HUT ke-80.
            Donasi Anda membuat keseruan ini kembali hadir di 2026.
          </p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item">
            <img
              src="/warga-anak.jpg"
              alt="Anak-anak warga GSR menerima hadiah pada malam puncak Agustusan"
              loading="lazy"
            />
            <figcaption>Malam puncak &amp; pembagian hadiah</figcaption>
          </figure>
          <figure className="gallery-item">
            <img
              src="/warga-panitia.jpg"
              alt="Panitia membawa ayam hadiah lomba saat Agustusan GSR"
              loading="lazy"
            />
            <figcaption>Lomba warga &amp; doorprize seru</figcaption>
          </figure>
        </div>
      </section>

      <section className="trust">
        <div className="shell trust-grid">
          <div className="trust-heading">
            <span>TRANSPARAN & TERORGANISIR</span>
            <h2>Bukti rapi,<br />panitia lebih mudah mengecek.</h2>
          </div>
          <div className="trust-points">
            <article>
              <strong>01</strong>
              <div>
                <h3>Rekening resmi panitia</h3>
                <p>Nomor rekening tersedia jelas dan dapat disalin sekali tekan.</p>
              </div>
            </article>
            <article>
              <strong>02</strong>
              <div>
                <h3>Bukti tersimpan terpusat</h3>
                <p>Foto dan PDF masuk ke penyimpanan Google Drive panitia.</p>
              </div>
            </article>
            <article>
              <strong>03</strong>
              <div>
                <h3>Konfirmasi lewat formulir</h3>
                <p>Data donasi tercatat rapi dan mudah dicocokkan panitia.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="closing shell">
        <p className="eyebrow red">Sekecil apa pun, sangat berarti</p>
        <h2>Terima kasih sudah ikut<br />menghidupkan lingkungan kita.</h2>
        <a className="button closing-button" href="#donasi">
          Donasi sekarang <ArrowIcon />
        </a>
      </section>

      <footer>
        <div className="shell footer-hut">
          <img
            src="/logo-hutri81.jpg"
            alt="Logo resmi HUT ke-81 Republik Indonesia: Indonesia Berdaulat, Adil dan Makmur"
          />
          <span>Dirgahayu Republik Indonesia ke-81 · 17 Agustus 2026</span>
        </div>
        <div className="shell footer-inner">
          <div className="brand footer-brand">
            <span className="brand-mark">17</span>
            <span className="brand-copy">
              <strong>GSR Merdeka</strong>
              <small>Agustusan 2026</small>
            </span>
          </div>
          <p>Gotong royong hari ini, kenangan untuk kita semua.</p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
              "Halo Panitia Agustusan GSR 2026, saya ingin bertanya tentang donasi.",
            )}`}
            target="_blank"
            rel="noreferrer"
          >
            Tanya panitia ↗
          </a>
        </div>
      </footer>
    </main>
  );
}
