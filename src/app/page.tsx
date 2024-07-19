"use client"

import styles from "../css/page.module.css"
import Projects from "../components/projects"

export default function Page() {
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
                <article id="github">

                </article>

                <article id="youdo">

                </article>

                <article id="habr">

                </article>

                <article id="workzilla">

                </article>

                <article id="fl">

                </article>
            </section>

            <section className={styles.three_section}>

            </section>
        </main>
    );
}
