import SearchBar from './../components/SearchBar';
import Typography from '@mui/joy/Typography';


const homepage = () => {
  return (
    <div className = 'homepage-container'>
      <Typography level="h1" sx={{ 
        fontSize: '55px', 
        mb: 0.5, 
        color:'#272324',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        width: '104%',
        height: '33vh'}}>
        Véntûre
        </Typography>
        {/* <h1 className = 'home-div'> Véntûre
        </h1>
        <h3 className = 'home-div'>
            Quality Traveling on a Budget
        </h3> */}
        <SearchBar/>
    </div>
  );
};

export default homepage;
