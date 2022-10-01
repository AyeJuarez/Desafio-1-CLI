import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({ producData }) => {
    console.log({producData});
    return (
        
        <Card sx={{ margin: 5 }}>
            <CardMedia component='image' img={producData.img} alt='green iguana' />
            <CardContent>
                <Typography variant='body2' color='text.secondary'>
                    Title: {producData.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Description: {producData.description}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Category: {producData.category}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Price: ${producData.price}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                    Stock: {producData.stock}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CardComponent;
