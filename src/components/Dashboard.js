    import React from 'react'
    import Navbar from './Navbar'
    import LeftBar from './LeftBar'
    import TopLeft from './TopLeft'
    import TopRight from './TopRight'
    import MiddleRowSecond from './MiddleRowSecond'
    import MiddleRow from './MiddleRow'
    import BottomMenu from './BottomMenu'
    import RightBar from './RightBar'

    const Dashboard = ({ meetinginfo, postedjobdata, candidatedata, upcomingdata, activitydata, hiringdata }) => {
        return (
            <div className="container">
            <Navbar />
            <LeftBar />
            <TopLeft />
            <TopRight />
            <MiddleRow meetinginfo={meetinginfo}/>
            <MiddleRowSecond postedjobdata={postedjobdata}/>
            <BottomMenu candidatedata={candidatedata}/>
            <RightBar upcomingdata={upcomingdata} activitydata={activitydata} hiringdata={hiringdata} />
        </div>
    )
    }

    export default Dashboard