"use client"

import {useEffect, useState} from "react"
import styles from "../css/projects.module.css"
import Image from "next/image"

export default function Projects() {
    const [active, setActive] = useState(2)

    const wd = 50
    const hg = 150

    const items = [
        {title: "Product 1", description: "Product description", url: "#", img: "/test.webp"},
        {title: "Product 2", description: "Product description", url: "#", img: "/test.webp"},
        {title: "Product 3", description: "Product description", url: "#", img: "/test.webp"},
        {title: "Product 4", description: "Product description", url: "#", img: "/test.webp"},
        {title: "Product 5", description: "Product description", url: "#", img: "/test.webp"}
    ]

    useEffect(() => {
        const items = document.querySelectorAll(`.${styles.carousel_item}`) as NodeListOf<HTMLElement>

        function loadShow() {
            let stt = 0

            if (items[active]) {
                items[active].style.transform = "none"
                items[active].style.zIndex = "1"
                items[active].style.filter = "none"
                items[active].style.opacity = "1"
            }

            for (let i = active + 1; i < items.length; i++) {
                stt++

                if (items[i]) {
                    items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`
                    items[i].style.zIndex = String(-stt)
                    items[i].style.filter = "blur(5px)"
                    items[i].style.opacity = stt > 2 ? "0" : "0.6"
                }
            }

            stt = 0

            for (let i = active - 1; i >= 0; i--) {
                stt++

                if (items[i]) {
                    items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`
                    items[i].style.zIndex = String(-stt)
                    items[i].style.filter = "blur(5px)"
                    items[i].style.opacity = stt > 2 ? "0" : "0.6"
                }
            }
        }

        loadShow()
    }, [active])

    const handleNext = () => {
        setActive((prev) => (prev + 1 < items.length ? prev + 1 : prev))
    }

    const handleBack = () => {
        setActive((prev) => (prev - 1 >= 0 ? prev - 1 : prev))
    }

    return (
        <div className={styles.carousel}>
            <div className={styles.carousel_box}>
                {items.map((item, index) => (
                    <div className={styles.carousel_item} key={index}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>

                        <Image width={wd} height={hg} className={styles.carousel_item_img} src={item.img}
                               alt={`project ${index + 1}`}/> <br/>

                        <a href={item.url}>Подробнее</a>
                    </div>
                ))}

                <button className={styles.carousel_back} onClick={handleBack}>{"<"}</button>
                <button className={styles.carousel_next} onClick={handleNext}>{">"}</button>
            </div>
        </div>
    )
}
