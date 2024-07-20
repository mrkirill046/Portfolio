"use client"

import {useEffect, useRef, useState, CSSProperties} from "react"
import styles from "../css/posts.module.css"
import {TableSelect} from "../db/vercel"
import Loader from "react-spinners/BarLoader";

type ReviewType = {
    id: string;
    title: string;
    content: string;
    stars: number;
}

const style: CSSProperties = {
    marginTop: "10px",
    width: "60vw"
}

const MAX_STARS = 5;

export default function Reviews() {
    const [reviews, setReviews] = useState<ReviewType[]>([])
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

    useEffect(() => {
        if (isHovered) {
            return
        }

        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [reviews.length, isHovered])

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        touchEndX.current = e.changedTouches[0].clientX
        const touchDiff = touchStartX.current - touchEndX.current

        if (Math.abs(touchDiff) > 50) {
            setActiveIndex((prevIndex) => (touchDiff > 0 ? (prevIndex + 1) % reviews.length : (prevIndex - 1 + reviews.length) % reviews.length))
        }
    }

    useEffect(() => {
        async function fetchPosts() {
            setLoading(true)

            const posts = await TableSelect("reviews")

            setReviews(posts)
            setLoading(false)
        }

        fetchPosts().then(() => console.log("Loading reviews..."))
    }, [])

    function handleNext() {
        setActiveIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }

    function handlePrevious() {
        setActiveIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
    }

    const renderStars = (numStars: number) => {
        let stars = '★'.repeat(numStars)
        let emptyStars = '☆'.repeat(MAX_STARS - numStars)
        return <span>{stars}{emptyStars}</span>
    }

    return (
        <article id="reviews" className={styles.carousel}
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
                    {reviews.length > 0 ? (
                        <>
                            <button className={styles.carousel_back} onClick={handlePrevious}>{"<"}</button>
                            <article>
                                <div className={styles.carousel_item}>
                                    <h3>{reviews[activeIndex].title}</h3>
                                    <p>{reviews[activeIndex].content}</p>
                                    <div className={styles.review_stars}>
                                        {renderStars(reviews[activeIndex].stars)}
                                    </div>
                                </div>
                            </article>
                            <button className={styles.carousel_next} onClick={handleNext}>{">"}</button>
                        </>
                    ) : (
                        <div>
                            <p>На данный момент нет ни одного отзыва :(</p>
                        </div>
                    )}
                </>
            )}
        </article>
    )
}
