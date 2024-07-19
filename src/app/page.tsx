"use client"

import styles from "../css/page.module.css"
import Projects from "../components/projects"
import Image from "next/image"
import {useEffect, useState} from "react"

export default function Page() {
    const [images, setImages] = useState({
        github: "/logotypes/github-desktop.webp",
        youdo: "/logotypes/youdo-desktop.webp",
        habr: "/logotypes/habr-desktop.webp",
        fl: "/logotypes/fl-desktop.webp"
    })

    let maxWidth = 768

    useEffect(() => {
        const updateImageSrc = () => {
            if (window.innerWidth <= maxWidth) {
                setImages({
                    github: "/logotypes/github-mobile.webp",
                    youdo: "/logotypes/youdo-mobile.webp",
                    habr: "/logotypes/habr-mobile.webp",
                    fl: "/logotypes/fl-mobile.webp"
                })
            } else {
                setImages({
                    github: "/logotypes/github-desktop.webp",
                    youdo: "/logotypes/youdo-desktop.webp",
                    habr: "/logotypes/habr-desktop.webp",
                    fl: "/logotypes/fl-desktop.webp"
                })
            }
        }

        window.addEventListener('resize', updateImageSrc)
        updateImageSrc()

        return () => {
            window.removeEventListener('resize', updateImageSrc)
        }
    }, [])


    return (
        <main className={styles.main}>
            <section className={styles.first_section}>
                <article id="about">
                    <h2 className={styles.center_h2}>Обо мне</h2>

                    <p>
                        <em>
                            Я — разработчик, имеющий два года опыта в создании веб-приложений и чат-ботов. В своей
                            работе я использую:
                        </em>
                    </p>
                    <br/>

                    <ul>
                        <li><strong>Фронтенд</strong>: React, Next.js</li>
                        <li><strong>Бэкенд</strong>: C#, Java, Node.js</li>
                        <li><strong>Базы данных</strong>: PostgreSQL, MySQL</li>
                        <li><strong>Чат-боты</strong>: Python (боты для Discord, Telegram, VK)</li>
                    </ul>
                    <br/>

                    <p>
                        Я стремлюсь создавать удобные и эффективные решения для пользователей, активно использую
                        современные технологии и постоянно совершенствую свои навыки. Кроме того, я увлекаюсь
                        разработкой игр.
                    </p>
                </article>

                <article id="contacts">
                    <div className={styles.contact_container}>
                        <h2>Контактная информация</h2>
                        <p>Хотите связаться? Вот мои контактные данные:</p>

                        <div className={styles.contact_info}>
                            <div className={styles.contact_item}>
                                <h3>Телеграм</h3>
                                <p>
                                    <a href="https://t.me/kazuha7777" target="_blank">@kazuha7777</a>
                                </p>
                            </div>

                            <div className={styles.contact_item}>
                                <h3>Дискорд</h3>
                                <p>
                                    <a href="https://discord.com/users/1020969688475369502" target="_blank">
                                        kazuha046
                                    </a>
                                </p>
                            </div>

                            <div className={styles.contact_item}>
                                <h3>Электронная почта</h3>
                                <p><a href="mailto:info@qwy-games.ru">info@qwy-games.ru</a></p>
                            </div>
                        </div>
                    </div>
                </article>


                <article id="projects">
                    <h2 className={styles.center_h2}>Проекты</h2>
                    <Projects/>
                </article>
            </section>

            <section className={styles.two_section}>
                <h2 className={styles.center_h2}>Мои аккаунты</h2>

                <article id="github">
                    <h2>GitHub</h2>
                    <Image className={styles.github_account} width={800} height={400} src={images.github} alt="site logo"/>
                    <p><a href="https://github.com/mrkirill046" target="_blank">Профиль</a></p>
                </article>

                <article id="youdo">
                    <h2>YOUDO</h2>
                    <Image className={styles.youdo_account} width={800} height={400} src={images.youdo} alt="site logo"/>
                    <p><a href="https://youdo.com/u12060783" target="_blank">Профиль</a></p>
                </article>

                <article id="habr">
                    <h2>Habr</h2>
                    <Image className={styles.habr_account} width={800} height={400} src={images.habr} alt="site logo"/>
                    <p><a href="https://freelance.habr.com/freelancers/mr_kirill046" target="_blank">Профиль</a></p>
                </article>

                <article id="fl">
                    <h2>Fl</h2>
                    <Image className={styles.fl_account} width={400} height={400} src={images.fl} alt="site logo"/>
                    <p><a href="https://www.fl.ru/users/molin4670/portfolio/" target="_blank">Профиль</a></p>
                </article>
            </section>

            <section className={styles.three_section}>

            </section>
        </main>
    );
}
