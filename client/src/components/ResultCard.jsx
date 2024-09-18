import Results from '../pages/Results';

// const ResultCard = ({ cardClick, props }) => {
//   return (
//     <div onClick={cardClick}>
//       <div>{props.value.location}</div>
//       <div>{props.price}</div>
//     </div>
//   );
// };

// export default ResultCard;

// import * as React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ResultCard({
  locale,
  cardClick,
  airports,
  bool,
  setBool,
}) {
  // const depAirport = locale.best_flights[0].flights[0].departure_airport;
  const arrAirport = locale.flightsInfo[0].arrival.name;
  const price = locale.price;
  // if (best_flights[0].layovers.length)
  // const arrCity = locale.airports[0].arrival[0].city;
  // const arrCityPic = airports[0].arrival[0].image; //<----
  // const arrCityPicThumb = airports[0].arrival[0].thumbnail; //<----

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea onClick={cardClick}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {arrAirport}
          </Typography>
          <Typography variant='body2' sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions> */}
        <CardMedia
          sx={{ height: 140 }}
          image='/static/images/cards/contemplative-reptile.jpg'
          title='green iguana'
        />
      </CardActionArea>
    </Card>
  );
}
