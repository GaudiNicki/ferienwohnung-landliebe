import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
      <html lang="de" suppressHydrationWarning>
        <body suppressHydrationWarning>
            {children}
            <Analytics />
            <SpeedInsights />
        </body>
    </html>
    );
}
