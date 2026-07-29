import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const metadataBase = new URL(`${protocol}://${host}`);

  return {
    metadataBase,
    title: "Donasi Agustusan GSR 2026",
    description:
      "Transfer, unggah bukti ke Drive, dan isi formulir konfirmasi untuk Kegiatan Agustusan 2026 Graha Swarna Residence.",
    openGraph: {
      title: "GSR Merdeka 2026",
      description: "Donasi mudah: transfer, unggah bukti, lalu isi formulir konfirmasi.",
      images: [{ url: "/og.png", width: 1734, height: 907 }],
      locale: "id_ID",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "GSR Merdeka 2026",
      description: "Donasi mudah untuk Kegiatan Agustusan Graha Swarna Residence.",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body className={`${sans.variable} ${display.variable}`}>
        {children}
      </body>
    </html>
  );
}
