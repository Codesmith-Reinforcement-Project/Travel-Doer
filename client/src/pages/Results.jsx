// import { useState } from 'react';
import ResultCard from '../components/ResultCard';
// import { useSelector, useDispatch } from 'react-redux';

const Results = () => {
  const [locations, setLocations] = useState([]);
  const [bool, setBool] = useState(false);
  function cardClick() {
    setBool(true);
  }

  //   const locales = useSelector((state) => state.locations);
  return (
    <div>
      <h1>Your Vacation!!</h1>
      <button>Cheapest</button>
      <button>Furthest</button>
      <div>
        {locations.map((locale, index) => {
          return (
            <ResultCard
              locale={locale}
              key={index}
              locations={locations}
              setLocations={setLocations}
              cardClick={cardClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Results;

// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Avatar from '@mui/material/Avatar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import Skeleton from '@mui/material/Skeleton';

// interface MediaProps {
//   loading?: boolean;
// }

// function Media(props: MediaProps) {
//   const { loading = false } = props;

//   return (
//     <Card sx={{ maxWidth: 345, m: 2 }}>
//       <CardHeader
//         avatar={
//           loading ? (
//             <Skeleton animation="wave" variant="circular" width={40} height={40} />
//           ) : (
//             <Avatar
//               alt="Ted talk"
//               src="https://pbs.twimg.com/profile_images/877631054525472768/Xp5FAPD5_reasonably_small.jpg"
//             />
//           )
//         }
//         action={
//           loading ? null : (
//             <IconButton aria-label="settings">
//               <MoreVertIcon />
//             </IconButton>
//           )
//         }
//         title={
//           loading ? (
//             <Skeleton
//               animation="wave"
//               height={10}
//               width="80%"
//               style={{ marginBottom: 6 }}
//             />
//           ) : (
//             'Ted'
//           )
//         }
//         subheader={
//           loading ? (
//             <Skeleton animation="wave" height={10} width="40%" />
//           ) : (
//             '5 hours ago'
//           )
//         }
//       />
//       {loading ? (
//         <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
//       ) : (
//         <CardMedia
//           component="img"
//           height="140"
//           image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/72bda89f-9bbf-4685-910a-2f151c4f3a8a/NicolaSturgeon_2019T-embed.jpg?w=512"
//           alt="Nicola Sturgeon on a TED talk stage"
//         />
//       )}
//       <CardContent>
//         {loading ? (
//           <React.Fragment>
//             <Skeleton animation="wave" height={10} style={{ marginBottom: 6 }} />
//             <Skeleton animation="wave" height={10} width="80%" />
//           </React.Fragment>
//         ) : (
//           <Typography variant="body2" component="p" sx={{ color: 'text.secondary' }}>
//             {
//               "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
//             }
//           </Typography>
//         )}
//       </CardContent>
//     </Card>
//   );
// }

// export default function Facebook() {
//   return (
//     <div>
//       <Media loading />
//       <Media />
//     </div>
//   );
// }

//AND/OR

{
  /* <Container maxWidth={false} disableGutters>
   <Box style={styles.background}>
      <Grid sx={{flexGrow:1}} spacing={0} container justifyContent="space- 
       evenly">
        <Grid  item >
          <HowToCard title="" 
          description='Entre le numéro de téléphone de la personne que tu 
          aimes' />
        </Grid>
        <Grid  item >
          <HowToCard title="" 
          description='La personne que tu aimes est inscrite sur le site'/>
        </Grid>
        <Grid  item >
          <HowToCard title="" 
          description='Vous serez tous les deux prévenus si vous vous aimez 
          mutuellement !'/>
        </Grid>
      </Grid>
  </Box>
</Container> */
}
