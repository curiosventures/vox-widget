
import { useEffect, useState, useContext } from "react"
import ReviewWidget from "../Components/ReviewWidget"
import { getReviews } from "../Utilities/api";
// import { useSocket } from "../Utilities/socket";
// import { io } from 'socket.io-client'
import { SocketContext } from '../Utilities/socket';

const WidgetDisplay = () => {

    const [currentCount, setCurrentCount] = useState(0)
    const [maxCount, setMaxCount] = useState(0)
    const [reviews, setReviews] = useState([])


    const socket = useContext(SocketContext);

    useEffect(() => {

        // const socket = io('http://localhost:7000')
        // socket.on('connect', () => console.log(socket.id))
        // socket.on('connect_error', () => {
        //     setTimeout(() => socket.connect(), 5000)
        // })
        socket.on('update', (data) => console.log(data))

    }, [socket])

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
            socket.emit('joinroom', JSON.stringify(
                {
                    voxclientsecret: localStorage.getItem("voxclientsecret"),
                    visitor_id: localStorage.getItem("visitor_id"),
                    visit_id: localStorage.getItem("visit_id"),
                    request_url: window.location.href,
                }
            ));
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