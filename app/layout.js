import "@/styles/index.scss"
// import {} from "@/components/index"

export const metadata = {
  title: "Lam Julian Foundation",
  description: "Lam Julian Foundation",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
