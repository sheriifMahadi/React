import star from '../images/Star 1.png';


export default function Card(props) {
    let prop = props.item
    let badgeText;
    if (prop.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (prop.location === 'Online') {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className='card--badge'>{badgeText}</div>}
            <img src={`../images/${prop.coverImg}`} alt="" className="card--image" />
            <div className="card--stats">
                <img src={star} alt="" className="card--star" />
                <span>{prop.stats.rating}</span>
                <span className="gray">({prop.stats.reviewCount}) • </span>
                <span className="gray">{prop.location}</span>
            </div>
            <p className="card--title">{prop.title}</p>
            <p className="card--price"><span className="bold">From ${prop.price}</span> / person</p>
        </div>
    )
}

