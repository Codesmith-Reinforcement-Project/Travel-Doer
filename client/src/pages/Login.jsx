const login = () => {
  return (
    <div className = 'login-container'>
      <form action='' method='post' className='login-form'>
        <div className='login-form'>
          <label>Enter your email: </label>
          <input type='email' name='email' id='email' placeholder = 'email' required />
        </div>
        <div className='login-form'>
          <label>Enter your password: </label>
          <input type='password' name='password' id='password' placeholder = 'password' required />
        </div>
        <div className='login-form'>
          <button type="submit" id="loginBtn">Login</button>
        </div>
      </form>
    </div>
  );
};

export default login;
