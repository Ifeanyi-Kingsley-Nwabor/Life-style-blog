import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faTwitter,
    faFacebook,
    faInstagram
} from '@fortawesome/free-brands-svg-icons'


const SocialFollow = () => {
    return (
        <div className='social-container'>
            <h2 className='social-title'>Follow us on social media.</h2>
            <a href='#' className='youtube social'>
                <FontAwesomeIcon icon={faYoutube} size='2x'/>
            </a>
            <a href='#' className='facebook social'>
                <FontAwesomeIcon icon={faFacebook} size='2x'/>
            </a>
            <a href='#' className='instagram social'>
                <FontAwesomeIcon icon={faInstagram} size='2x'/>
            </a>
            <a href='#' className='twitter social'>
                <FontAwesomeIcon icon={faTwitter} size='2x'/>
            </a>
        </div>
    )
}

export default SocialFollow;
