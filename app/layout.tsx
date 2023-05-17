import Header from './sections/Header'
import './globals.css'

export const metadata = {
  title: "Viktor's Portfolio",
  description: 'Where a dream start',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        </body>
    </html>
  )
}
