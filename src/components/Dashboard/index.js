import MenuBar from '../MenuBar'
import MidDashBoard from '../MidDashBoard'
import RecentCard from '../RecentCard'


const DashBoard =()=>(
    <div>
        <div>
            <MenuBar/>
        </div>
        <div>
            <MidDashBoard/>
        </div>
        <div>
            <RecentCard />
        </div>
    </div>
)
export default DashBoard