import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import student_data from './student.js';

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
export default function MediaCard_students() {
  return (
      <>
      <div className="studentlist">
    {student_data.map((student_char) =>{
        return <Person {...student_char}></Person>
    })}
        </div>
        </>
    
  );
}
