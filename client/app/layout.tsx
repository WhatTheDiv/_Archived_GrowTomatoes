import './globals.css'
import NavBar from './Nav/navBar'


export const metadata = {
  title: 'Next App Test',
  description: 'Testing Next Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
