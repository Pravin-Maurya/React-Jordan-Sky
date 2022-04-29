import Details from '../Details'

const transactionsList = [
    {
        id: 1,
        imgUrl:'https://res.cloudinary.com/dunnzyptg/image/upload/v1649825120/samples/male_boy_person_people_avatar_icon_159358_mffeqb.png',
        name: 'Queen Rose',
        amount: '+$5044',
        transactionTime: '6 hour ago'

    },
    {
        id: 2,
        imgUrl:'https://res.cloudinary.com/dunnzyptg/image/upload/v1649825117/samples/man-2_icon-icons.com_55041_eul8vz.png',
        name: 'Andan Paul',
        amount: '-$21540',
        transactionTime: '6 hour ago'
        
    },
    {
        id: 3,
        imgUrl:'https://res.cloudinary.com/dunnzyptg/image/upload/v1649825110/samples/woman_icon-icons.com_55031_rmdh38.png',
        name: 'Jender Molane',
        amount: '+$35266',
        transactionTime: '6 hour ago'
        
    },
    {
        id: 4,
        imgUrl:'https://res.cloudinary.com/dunnzyptg/image/upload/v1649825064/samples/iconfinder-1-avatar-2754574_120513_qxe8ha.png',
        name: 'Lowrence Ann',
        amount: '+$42046',
        transactionTime: '6 hour ago'
        
    },
    {
        id: 5,
        imgUrl:'https://res.cloudinary.com/dunnzyptg/image/upload/v1649825090/samples/iconfinder-3-avatar-2754579_120516_qjv5pv.png',
        name: 'Cara Maria',
        amount: '-$61440',
        transactionTime: '6 hour ago'
        
    },
     
]

const RecentTransactions =()=>(
    <div className="transaction-container">
        <div className="title-container">
            <h1 className="title">Recent Transactions</h1>
            <div className="symbol-container">
                +
            </div>
        </div>
        <ul className="transaction-details-container">
            {transactionsList.map(eachItem =>(
                <Details personDetails ={eachItem} />
            ))}
        </ul>
        <button>
            See More
        </button>
    </div>
)

export default RecentTransactions