import { FcOrgUnit } from "react-icons/fc";
import {AiOutlineWallet, AiOutlineFolder, AiOutlineSetting} from 'react-icons/ai'
import {BiMessageAlt} from 'react-icons/bi'
import { IoLogOutOutline } from "react-icons/io"

import './index.css'

const MenuBar =()=>(
    <div className="menu-container">
        <h1 className="title-heading">
            Bgn
        </h1>
        <div>
        <FcOrgUnit className='menu-icon'/>
        <AiOutlineWallet className='menu-icon'/>
        <AiOutlineFolder className='menu-icon'/>
        <BiMessageAlt className='menu-icon'/>
        <AiOutlineSetting className='menu-icon'/>
        </div>
        <IoLogOutOutline  className='menu-icon'/>
    </div>
)
export default MenuBar