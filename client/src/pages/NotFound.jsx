const notfound = () => {
  return (
    <div className="notfound-container">
      <h1>404</h1>
      <h2>Oops! Looks like you're lost...
      <p>It seems the page you're looking for doesn't exist. How about exploring new destinations instead?</p>
      </h2>
      
    <a href="/" className="btn-home">Go Back Home</a>
  </div>
  )
};

export default notfound;
