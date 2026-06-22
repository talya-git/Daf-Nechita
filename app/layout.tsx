import type { Metadata, Viewport } from 'next'
import { Assistant, Heebo } from 'next/font/google'
import './globals.css'

const assistant = Assistant({
  variable: '--font-assistant',
  subsets: ['hebrew', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
})

const heebo = Heebo({
  variable: '--font-heebo',
  subsets: ['hebrew', 'latin'],
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'A-Z by Oren Cohen Group | מעטפת ניהול נכסים בישראל',
  description:
    'מעטפת A-Z מבית Oren Cohen Group. ניהול מלא של כל אנשי המקצוע, הספקים והפרויקט שלכם בישראל תחת קורת גג אחת, משלב הרכישה ועד קבלת המפתח.',
  generator: 'v0.app',
}

export const viewport: Viewport = {
  themeColor: '#0c0f1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${assistant.variable} ${heebo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
