
import hero_img from '../images/Group 77.png';


export default function Hero() {
    return (
        <section className="hero">
        <img src={hero_img} className='hero--photo' alt="" />
            <h1 className='hero--header'>Online Experience</h1>
            <p className='hero--text'>Join unique interactive activities led 
                by one-of-a-kind hosts-all without leaving home</p>
        </section>
    )
}