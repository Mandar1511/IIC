import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import faculty_data from './Faculty';
const Person = ({image, work, name}) =>{
    return(
      <div className="person">
        <Card sx={{ maxWidth: 345}}>
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

export default function MediaCard() {
  return (
      <>
      <div className="facultylist">
    {faculty_data.map((char) =>{
        return <Person {...char}></Person>
        
    })}
        </div>
        </>
    
  );
}
