import { Roboto_Flex } from 'next/font/google'

const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
})

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
