"use client"

import styles from "../css/header.module.css"
import Image from "next/image"
import {useEffect, useState} from "react"

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    useEffect(() => {
        let lastScrollY = window.scrollY
        const header = document.querySelector(`.${styles.header}`)

        if (!header) {
            return
        }

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                header.classList.add(styles.hidden)
            } else {
                header.classList.remove(styles.hidden)
            }

            lastScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    useEffect(() => {
        let lastScrollY = window.scrollY
        const mobile_nav = document.querySelector(`.${styles.mobile_nav}`)

        if (!mobile_nav) {
            return
        }

        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setMenuOpen(false)
            }

            lastScrollY = window.scrollY
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header>
            <section className={styles.header}>
                <article className={styles.image}>
                    <a href="/"><Image src="/icon.webp" width={50} height={50} alt="logotype"/></a>
                </article>

                <nav className={styles.list}>
                    <ul>
                        <li><a href="/#about">Обо мне</a></li>
                        <li><a href="/#contacts">Контакты</a></li>
                        <li><a href="/#projects">Проекты</a></li>
                        <li><a href="/#github">GitHub</a></li>
                        <li><a href="/#youdo">Youdo</a></li>
                        <li><a href="/#habr">Habr</a></li>
                        <li><a href="/#fl">Fl</a></li>
                    </ul>
                </nav>

                <article className={styles.mobile_header_title}>
                    <h1>{"Kirill's Portfolio"}</h1>
                </article>

                <article className={styles.mobile_header}>
                    <i className="bx bx-menu" onClick={toggleMenu}></i>
                </article>
            </section>

            <section className={styles.mobile_nav_section}>
                <nav className={`${styles.mobile_nav} ${menuOpen ? styles.show : ''}`}>
                    <ul>
                        <li><a href="/#about">Обо мне</a></li>
                        <li><a href="/#contacts">Контакты</a></li>
                        <li><a href="/#projects">Проекты</a></li>
                        <li><a href="/#github">GitHub</a></li>
                        <li><a href="/#youdo">Youdo</a></li>
                        <li><a href="/#habr">Habr</a></li>
                        <li><a href="/#fl">Fl</a></li>
                    </ul>
                </nav>
            </section>
        </header>
    )
}