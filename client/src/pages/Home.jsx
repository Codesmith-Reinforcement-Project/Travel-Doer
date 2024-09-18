import SearchBar from './../components/SearchBar';
import Typography from '@mui/joy/Typography';


const homepage = () => {
  return (
    <div className = 'homepage-container'>
      <Typography level="h1" sx={{ 
        fontSize: '75px', 
        mb: 0.5, 
        color:'#272324',
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'center',
        width: '104%',
        height: '25vh',
        }}>
        Véntûre
        </Typography>
        <SearchBar/>
    </div>
  );
};

export default homepage;
