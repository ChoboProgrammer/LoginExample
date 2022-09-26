

const LoginForm = () =>{
  return(
    <div className="Login-wrap">
      <h1>ACCOUNT LOGIN</h1>
      <form className="Login-form">
          <div className="txt-field">
            <input type="text" id="user-id" required></input>
            <span></span>
            <label htmlFor="user-id">User ID</label>
            <p className="user-id-valid-msg"></p>
          </div>
          <div className="txt-field">
            <input type="password" id="user-pw" required></input>
            <span></span>
            <label htmlFor="user-pw">User PW</label>
            <p className="user-pw-valid-msg"></p>
          </div>
          <div className="pass">비밀번호를 잊어버리셨나요?</div>
          <button type="submit">LOGIN</button>
      </form>
    </div>
  )
}


export default LoginForm;