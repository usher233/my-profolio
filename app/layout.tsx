import Header from './sections/Header'
import './globals.css'

export const metadata = {
  title: 'ViktorPortfolio',
  description: 'My first portfolio',
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
