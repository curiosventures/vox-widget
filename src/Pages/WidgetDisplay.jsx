
import { useEffect, useState } from "react"
import ReviewWidget from "../Components/ReviewWidget"
import { getReviews } from "../Utilities/api";

const WidgetDisplay = () => {

    const [currentCount, setCurrentCount] = useState(0)
    const [maxCount, setMaxCount] = useState(0)
    const [reviews, setReviews] = useState([])

    useEffect(() => {

        const timer = setInterval(() => {
            if (currentCount === maxCount - 1) {
                setCurrentCount(0);

            } else {
                setCurrentCount(currentCount + 1);

            }
        }, 2000);
        // clearing interval
        return () => clearInterval(timer);

    });




    useEffect(() => {
        (async () => {
            const reviewsData = await getReviews()
            setReviews(reviewsData['reviews'])
            setMaxCount(reviewsData['reviews'].length)
        })();
    }, [])








    if (reviews.length > 0) {
        return (
            <ReviewWidget review={reviews[currentCount]} />
        )
    } else {
        return (
            <div></div>
        )
    }

}

export default WidgetDisplay