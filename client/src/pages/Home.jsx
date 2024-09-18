import SearchBar from './../components/SearchBar';


const homepage = () => {
  return (
    <div className = 'homepage-container'>
      <SearchBar/>
      This is the homepage!
        
      {/* <div className = 'homepage-container'> */}
        <h1 className = 'home-div'> Véntûre
        </h1>
        <h3 className = 'home-div'>
            Quality Traveling on a Budget
        </h3>
        {/* <img className = 'homepage_img' src = '../assets/homepage.jpeg'></img> */}
      {/* </div> */}
    </div>
  );
};

export default homepage;
