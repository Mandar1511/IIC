import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import former_members_data from './Former_Students.js';

const Person = ({image, work, name}) =>{
    return(
      <div className="person">
        <Card sx={{ maxWidth: 340 }}>
      <CardMedia
        component="img"
        height="250"
        image={image}
        alt="Image Unavailable"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {work}
        </Typography>
      </CardContent>
    </Card>
    </div>
    )
}
export default function MediaCard_Former_Members() {
  return (
      <>
      <div className="studentlist">
    {former_members_data.map((member_char) =>{
        return <Person {...member_char}></Person>
    })}
        </div>
        </>
    
  );
}

