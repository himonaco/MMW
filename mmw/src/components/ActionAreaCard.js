import React from 'react';
import { Helmet } from 'react-helmet';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

export default function ActionAreaCard({ title, description, image, link }) {
  return (
    <div>
      {/* Add Helmet for meta tags */}
      <Helmet>
        <title>{title} - Monaco Media Works</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={`${title}, Monaco Media Works, media, projects, creative solutions`} />
        <meta property="og:title" content={`${title} - Monaco Media Works`} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={`https://www.monacomediaworks.com${link}`} />
        <link rel="canonical" href={`https://www.monacomediaworks.com${link}`} />
      </Helmet>
      
      {/* Card content */}
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea component={Link} to={link}>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
