import React from 'react'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    const wtficon = "http://cdn.shopify.com/s/files/1/0029/0629/2294/products/image_c8ec71e8-bb78-4805-8fab-08b1e3042679_1200x1200.png?v=1604053691"
    return (
        <div className='footer'>

            {/* first footer box */}
            <div>
                <Link to='#'><img src={wtficon} alt='Wtf img' style={{width:'100%' ,height:'50px'}}/></Link>
                <div className='socialmediaIconContainer'>
                    <div className='socialmediaIcons insta'><a href='https://www.instagram.com/wtfupme/' style={{ textDecoration: 'none' }}><InstagramIcon /></a></div>
                    <div className='socialmediaIcons'><a href='https://www.facebook.com/wtfupme/' style={{ textDecoration: 'none' }}><FacebookIcon /></a></div>
                    <div className='socialmediaIcons'><a href='https://www.linkedin.com/company/wtfupme/' style={{ textDecoration: 'none' }}> <LinkedInIcon /></a></div>
                </div>
            </div>


            {/* second footer box */}
            <div>
                <h3> Quick Links </h3>
                <Link to='#' className='textLink'><div className='quicklinks'> About</div></Link>
                <Link to='#' className='textLink'><div className='quicklinks'> FAQs</div></Link>
                <Link to='#' className='textLink'><div className='quicklinks'> Privacy Policy</div></Link>
                <Link to='#' className='textLink'><div className='quicklinks'> Terms & Conditions</div></Link>
                <Link to='#' className='textLink'><div className='quicklinks'> Refund & Cancellation</div></Link>
            </div>


            {/* third footer box */}

            <div>
                <h3> Explore </h3>
                <Link to='#' className='textLink'><div className='explorelinks'>  Arenas </div></Link>
                <Link to='#' className='textLink'><div className='explorelinks'>  Studios </div></Link>
                <Link to='#' className='textLink'><div className='explorelinks'>  Nutrition </div></Link>
            </div>

            {/* fourth footer box */}

            <div >
                <h3>Contact</h3>
                <Link to='#' className='textLink'>
                    <div className='contactMenu'>
                        <div><LocationOnIcon /></div>
                        <div className='contactsubmenu'>
                            Ro: S 1502, Amarapali Silicon city, sector 76, Noida, Uttar Pradesh, India
                        </div>
                    </div>
                </Link>

                <Link to='#' className='textLink'>
                    <div className='contactMenu'>
                        <div><LocationOnIcon /></div>
                        <div className='contactsubmenu'>
                            Ho: C-86 B, Ground Floor, sector 8, Noida, Uttar Pradesh, India
                        </div>

                    </div>
                </Link>

                <Link to='#' className='textLink'>
                    <div className='contactMenu'>
                        <div><PhoneIcon /></div>
                        <div className='contactsubmenu'>
                            +919090639005
                        </div>
                    </div>
                </Link>

                <Link to='#' className='textLink'>
                    <div className='contactMenu'>
                        <div><MailIcon /></div>
                        <div className='contactsubmenu'>
                            support@wtfup.me
                        </div>
                    </div>
                </Link>
                
            </div>

        </div>
    )
}

export default Footer