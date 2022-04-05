import { Fragment } from "react";
import { useLocation, useNavigate } from 'react-router-dom';


const FullReview = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const review = location.state;

    const daysAgo = (date) => {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        const postedDate = new Date(date);
        const today = new Date();
        return Math.round(Math.abs((today - postedDate) / oneDay));
    };

    console.log(review['reviewerName'])

    return (
        <Fragment>
            <div id="vox-modal" style={{
                position: "fixed",
                backgroundColor: "rgba(255, 255, 255, 0.30)",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 999,
                width: "100vw",
                height: "100vh",
                transition: "all 0.3s",
                fontDamily: "Menlo, Consolas, monospace",
                fontSize: "large",
                padding: "2rem",
                lineHeight: 1.2

            }}



            >
                <div style={
                    {
                        width: "400px",
                        position: "absolute",
                        top: " 50%",
                        left: " 50%",
                        transform: "translate(-50%, -50%)",
                        padding: "2em",
                        caretColor: "transparent"

                    }
                }>
                    <div style={{
                        display: 'flex',
                        justifyContent: "end"
                    }} >
                        <div style={{
                            boxShadow: "0 0 5px -1px rgba(0,0,0,0.2)",
                            cursor: "pointer",
                            verticalAlign: "middle",
                            backgroundColor: "white",
                            color: "black",
                            borderRadius: "5px",
                            padding: '5px'
                        }} onClick={() => navigate(-1)}>Close</div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '5px' }}>
                        <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '25px', alignItems: 'center' }} id="voxreviewerphoto">
                            <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="name" style={{ width: '100%', borderRadius: '50%' }} />
                            <div id="voxreviewername" style={{ marginLeft: '5px' }}>{review["reviewerName"]}</div>
                        </div>
                        <div id="voxratings">
                            {
                                [...Array(parseInt(review["reviewRating"]))].map((e, i) => <span key={i}>&#127775;</span>)
                            }

                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginBottom: '5px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', padding: '3px' }} id="voxreviewtitle">
                            {review["reviewTitle"]}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', padding: '3px' }} id="voxreviewcontent">
                            {review["reviewBody"]}
                        </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <div id="voxdays" style={{ fontWeight: 100, fontStyle: 'italic' }}>
                            {daysAgo(review["reviewDate"]) + " days ago"}
                        </div>
                        <div style={{ maxWidth: '20px' }} id="voxsourcelink">
                            {/* <a href="#" target="_blank"> */}
                            <img src={review["reviewerImage"]} alt="source-link-icon" style={{ width: '100%' }} />

                            {/* </a> */}
                        </div>
                    </div>
                </div>

            </div>


        </Fragment >

    )
}

export default FullReview