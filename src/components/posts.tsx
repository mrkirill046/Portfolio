"use client"

import {useEffect, useRef, useState, CSSProperties} from "react"
import styles from "../css/posts.module.css"
import {TableSelect} from "../db/vercel"
import Loader from "react-spinners/BarLoader";

type PostType = {
    id: string;
    title: string;
    content: string;
    link?: string;
}

const style: CSSProperties = {
    marginTop: "10px",
    width: "60vw"
}

export default function Posts() {
    const [posts, setPosts] = useState<PostType[]>([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [loading, setLoading] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const carouselRef = useRef<HTMLDivElement>(null)
    const touchStartX = useRef(0)
    const touchEndX = useRef(0)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].clientX
        const touchDiff = touchStartX.current - touchEndX.current

        if (Math.abs(touchDiff) > 50) {
            setActiveIndex((prevIndex) => (touchDiff > 0 ? (prevIndex + 1) % posts.length : (prevIndex - 1 + posts.length) % posts.length))
        }
    }

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)

            const posts = await TableSelect("posts")

            setPosts(posts)
            setLoading(false)
        }

        fetchPosts().then(() => console.log("Loading posts..."))
    }, [])

    function handleNext() {
        setActiveIndex((prevIndex) => (prevIndex + 1) % posts.length)
    }

    function handlePrevious() {
        setActiveIndex((prevIndex) => (prevIndex - 1 + posts.length) % posts.length)
    }

    useEffect(() => {
        if (isHovered) {
            return
        }

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % posts.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [posts.length, isHovered])

    return (
        <article id="blog" className={styles.carousel}
                 onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                 onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}
                 ref={carouselRef}>

            {loading ? (
                <div>
                    <h1>Загрузка...</h1>
                    <Loader color="#fff" cssOverride={style}/>
                </div>
            ) : (
                <>
                    {posts.length > 0 ? (
                        <>
                            <button className={styles.carousel_back} onClick={handlePrevious}>{"<"}</button>
                            <article>
                                <div className={styles.carousel_item}>
                                    <h3>{posts[activeIndex].title}</h3>
                                    <p>{posts[activeIndex].content}</p>

                                    {posts[activeIndex].link && (
                                        <a href={posts[activeIndex].link} className={styles.carousel_a}
                                           target="_blank">
                                            Подробнее
                                        </a>
                                    )}
                                </div>
                            </article>
                            <button className={styles.carousel_next} onClick={handleNext}>{">"}</button>
                        </>
                    ) : (
                        <div>
                            <p>На данный момент нет ни одного поста :(</p>
                        </div>
                    )}
                </>

            )}
        </article>
    )
}
