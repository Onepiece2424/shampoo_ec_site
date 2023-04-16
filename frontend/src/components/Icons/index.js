import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import logo from '../..//20230416_シャンプー画像.jpg'

const MediaCard = ({ name, description, price, stock }) => {
  return (
    <Button>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={logo}
          title="shampoo"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <div>
          <Typography size="small">¥{price}</Typography>
          <Typography size="small">在庫数{stock}</Typography>
        </div>
      </Card>
    </Button>
  );
}

export default MediaCard;
