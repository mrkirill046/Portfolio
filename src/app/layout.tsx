import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "./globals.css"
import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

const inter = Inter({subsets: ["cyrillic"]})

export const metadata: Metadata = {
    description: "Website portfolio for Kirill",
    icons: "https://i.imgur.com/RZawOrd.jpeg"
}

export default function RootLayout({children}: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="ru">
            <head>
                <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet"/>
                <title>{"Kirill's Portfolio"}</title>
            </head>

            <body className={inter.className}>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    )
}
