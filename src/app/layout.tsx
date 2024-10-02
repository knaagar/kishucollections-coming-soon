import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kishu | Coming Soon",
  description: "Kishu Collections is coming soon.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz@6..96&family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
