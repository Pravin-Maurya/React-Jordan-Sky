import { BiSearch } from "react-icons/bi"
import { BsBell} from "react-icons/bs"

import CardCarousel  from '../CardCarousel'
import RecentTransactions from "../RecentTransactions"
import './index.css'

const RecentCard =()=>(
    <div className="recent-details-container">
        <div className="header-container">
            <div className="icon-container">
                <BiSearch className='icon-symbol'/>
            </div>
            <div className="icon-container">
                <BsBell/>
            </div>
            <p className="title-name">August Brown</p>
            <div className="profile-img-container">
                <img src='https://res.cloudinary.com/dunnzyptg/image/upload/v1651175930/samples/_pdp_sq__ycfdo6.jpg' alt='profile' className="profile-img"/>
            </div>
        </div>
        <div className="transaction-card-container">
            <div className="card-title-container">
                <h1 className="card-title">My Cards</h1>
                <div className="symbol-container">
                    +
                </div>
            </div>
            <div className="carousal-container">
                <CardCarousel />
            </div>
        </div>
        <RecentTransactions />
    </div>
)
export default RecentCard