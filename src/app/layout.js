import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/shared/NavBar'
import Footer from '@/components/shared/Footer'
import { Container } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <Container maxWidth='lg' className='min-h-screen'>
        {children}
        </Container>
        <Footer />
        </body>
    </html>
  )
}
