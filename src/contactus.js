import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Contactus = () => {
  return (
    <div className='container'>
    <div className='location'><LocationOnIcon color="primary"/><div className="colorchange">IIT Dharwad, WALMI Campus, Near High Court, PB Road, Dharwad, Karnataka - 580011, India</div></div>
     <div className='mail'><div><MailOutlineIcon color="primary"/></div><div><a className='color' href="">outreach.iic@iitdh.ac.in </a></div></div>
    </div>
  )
}

export default Contactus;
