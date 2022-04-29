const Details =props=>{
    const {personDetails} = props
    const {id, imgUrl, name, transactionTime, amount} = personDetails

    const className = ()=>{
        if(amount[0]==='+'){
            return 'positive'
        }else{
            return 'negative'
        }
    }
    return(
        <li className="item-container" key={id}>
                    <div className="profile-container">
                        <img src={imgUrl} alt='profile' className="profile" />
                    </div>
                    <div className="name-time-container">
                        <p className="name">{name}</p>
                        <p className="time">{transactionTime}</p>
                    </div>
                    <p className={className}>{amount}</p>
                </li>
    )
}
export default Details