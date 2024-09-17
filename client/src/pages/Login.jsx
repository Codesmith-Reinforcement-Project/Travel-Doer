const login = () => {
  return (
    <div>
      <form action='' method='post' className='login-form'>
        <div className='login-form'>
          <label>Enter your name: </label>
          <input type='text' name='name' id='name' required />
        </div>
        <div className='login-form'>
          <label>Enter your email: </label>
          <input type='email' name='email' id='email' required />
        </div>
        <div className='login-form'>
          <input type='submit' value='Login' />
        </div>
      </form>
    </div>
  );
};

export default login;
