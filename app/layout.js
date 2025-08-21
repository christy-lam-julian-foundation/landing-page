import "@/styles/index.scss"
// import {} from "@/components/index"

export const metadata = {
  title: "Christy Lam Julian Foundation",
  description: "Christy Lam Julian Foundation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
