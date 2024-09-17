const signup = () => {
  return (
    <div className = 'signup-container'>
      <form action='' method='post' className='signup-form'>
        <div className='signup-form'>
          <label>Enter your email: </label>
          <input type='email' name='email' id='email' placeholder = 'email' required />
        </div>
        <div className='signup-form'>
          <label>Enter your password: </label>
          <input type='password' name='password' id='password' placeholder = 'password' required />
        </div>
        <div className='signup-form'>
          <button type="submit" id="signupBtn">Login</button>
        </div>
      </form>
    </div>
  )
};

export default signup;
