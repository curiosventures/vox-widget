

const ReviewWidget = () => {

    return (
        <div style={{
            zIndex: 999,
            position: 'fixed',
            bottom: '2px',
            left: '2px',
            background: 'white',
            // opacity: 0,
            // transition: 'opacity 0.6s linear'
        }}
            id="review-widget">
            <div style={{
                border: '1px solid grey',
                borderRadius: '20px',
                boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2) 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: '300px', padding: '10px', borderBottomLeftRadius: '0px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', maxWidth: '25px', alignItems: 'center' }} id="voxreviewerphoto">
                        <img src="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png" alt="name" style={{ width: '100%', borderRadius: '50%' }} />
                        <div id="voxreviewername" style={{ marginLeft: '5px' }}>Reviewer Name</div>
                    </div>
                    <div id="voxratings">
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star checked" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', marginBottom: '5px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', fontWeight: 'bold', padding: '3px' }} id="voxreviewtitle">
                        Review Title
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '3px' }} id="voxreviewcontent">
                        Review Content
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                    <div id="voxdays" style={{ fontWeight: 100, fontStyle: 'italic' }}>
                        Days Since
                    </div>
                    <div style={{ maxWidth: '20px' }} id="voxsourcelink">
                        {/* <a href="#" target="_blank"> */}
                        <img src="https://cdn-icons-png.flaticon.com/512/282/282100.png" alt="source-link-icon" style={{ width: '100%' }} />

                        {/* </a> */}
                    </div>
                </div>


            </div >
        </div >

    )
}

export default ReviewWidget