import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BookmarkIcon from '@mui/icons-material/Bookmark';
const Followus = () => {
  return (
    <div className='followus'>
        <div className='insta'><a href="https://www.instagram.com/iic_iitdh/"><InstagramIcon color="primary"/></a></div>
       <div className='linkedin'><a href="https://www.linkedin.com/company/institute-innovation-council/"><LinkedInIcon color="primary"/></a></div>
     <div className='startup'><a href="https://startupdrafts.substack.com/"> <BookmarkIcon color="primary"/></a></div>
    </div>
  )
}

export default Followus;