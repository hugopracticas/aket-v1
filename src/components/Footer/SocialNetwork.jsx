import whats from '../../img/footer/whatsapp.png'
import facebook from '../../img/footer/facebook.png'
import instagram from '../../img/footer/instagram.png'
import linkedin from '../../img/footer/linkedin.png'
import gmail from '../../img/footer/gmail.png'


export const SocialNetwork = () => {
    return (
        <dev className="social-network">
            <ul className='list-social-network'>
                <li>
                    <img src={whats} alt='whats'/>
                </li>
                <li>
                    <img src={facebook} alt='facebook'/>
                </li>
                <li>
                    <img src={instagram} alt='facebook'/>
                </li>
                <li>
                    <img src={linkedin} alt='linkedin'/>
                </li>
                <li>
                    <img src={gmail} alt='gmail'/>
                </li>
            </ul>
        </dev>
    )
}