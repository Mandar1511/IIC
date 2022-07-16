import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='grid3'>

<div className='IIClogo'>
    <div><img className='favicon' src="/favicon.png"></img></div>
    <div><p>IIT Dharwad, WALMI Campus, Near High Court, PB Road, Dharwad, Karnataka - 580011, India</p></div>
    
</div>

<div className="about_us">
<h4 className='white'>About Us</h4>
    <p >Institute Innovation Council (IIC) of IIT Dharwad is established to conduct various innovation and entrepreneurship related activities, 
    and to systematically foster the culture of innovation in IIT Dharwad. Towards this aim it organises workshops, hackathons, seminars
     and arranges interactions with entrepreneurs, investors and professionals. It also works towards creation of a mentor pool for student
      innovators and envisages to develop a network with peers and national entrepreneurship development organisations.
    </p>
</div>

<div className='quick_links'>
<h4 className='white'>Quick Links</h4>
<div>Home</div>
<div>About Us</div>
<div>Events</div>
<div>Gallery</div>
<div>Members</div>
<div>Contact Us</div>
<div>Follow Us</div>
<div>IIT Dharwad</div>
</div>
</div>
<hr color='#737373' width="80%" className='hr'></hr>
<div className='copyright'>
<p className="copypara">Copyright ©2022, Institute Innovation Council of IIT Dharwad, All rights reserved</p>
</div>
    </div>
  )
}

export default Footer;