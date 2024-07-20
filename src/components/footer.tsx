"use client"

import styles from "../css/footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <article className="copy">
                <p className={styles.p}>
                    <a href="https://qwy-games.ru/" target="_blank">QWY_Games ©2022-2024</a>. Все права защищены
                </p>

                <div>
                    <a href="https://discord.gg/pYbYwHTrDd" aria-label='Discord' target="_blank">
                        <i className='bx bxl-discord-alt'></i>
                    </a>
                    <a href="https://t.me/qwy_games" aria-label='Telegram' target="_blank">
                        <i className='bx bxl-telegram'></i>
                    </a>
                    <a href="https://vk.com/qwy_games" aria-label='Vk' target="_blank">
                        <i className='bx bxl-vk'></i>
                    </a>
                    <a href="https://tiktok.com/@qwy_games" aria-label='TikTok' target="_blank">
                        <i className='bx bxl-tiktok'></i>
                    </a>
                </div>
            </article>
        </footer>
    )
}