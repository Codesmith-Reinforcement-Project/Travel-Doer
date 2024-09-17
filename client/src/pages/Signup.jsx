const signup = () => {
  return (
    <div>
      <form action='' method='post' className='signup-form'>
        <div className='signup-form'>
          <label>Enter your name: </label>
          <input type='text' name='name' id='name' required />
        </div>
        <div className='signup-form'>
          <label>Enter your email: </label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className='signup-form'>
          <input type='submit' value='Sign Up!' />
        </div>
      </form>
    </div>
  )
};

export default signup;
