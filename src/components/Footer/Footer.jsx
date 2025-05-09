import Logo from '../../assets/big-logo-peaceapp_darkmode.svg';
import ubicationLogo from '../../assets/ubication-logo.svg';

import FacebookIcon from "../../assets/facebook-icon.svg"
import TwitterIcon from "../../assets/twitter-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import WhatsappIcon from "../../assets/whatsapp-icon.svg"
import YoutubeIcon from "../../assets/youtube-icon.svg"

import { Button } from '../Button/Button';

export const Footer = () => {
    return (
        <section className="bg-footer py-20">
            <div className='mb-20 h-full flex justify-center items-center '>
                <img className='w-64' src={Logo} />
            </div>

            <div className="text-center text-white">
                <p>©{new Date().getFullYear()} PeaceAPP, All rights reserved.</p>
            </div>


        </section>
    )
}
