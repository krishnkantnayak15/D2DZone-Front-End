import React from 'react'
import './SignUp.css'

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {"toggle": true}
        this.signUp = this.signUp;
        this.login = this.login;
        this.contain = this.contain;
        this.change = this.change.bind(this);
         this.changelogin = this.changelogin.bind(this)
        
    }

    change(){
        console.log(">>>>>>>kkk", this.state.toggle)
        this.setState({toggle : false})

    }
     changelogin(){
        this.setState({toggle : true})

    }
    render(){
         this.login = <form id="login-form" action="" method="post" role="form" >
									<div ClassName="form-group">
										<input type="text" name="username" id="username" tabindex="1" ClassName=" tooltip " placeholder="Username" value=""/>
									<span ClassName="tooltiptext">Tooltip text</span>
                                    </div>
									<div ClassName="form-group">
										<input type="password" name="password" id="password" tabindex="2" ClassName="form-control" placeholder="Password"/>
									</div>
									<div ClassName="form-group text-center">
										<input type="checkbox" tabindex="3" ClassName="" name="remember" id="remember"/>
										<label for="remember"> Remember Me</label>
									</div>
									<div ClassName="form-group">
										<div ClassName="row">
											<div ClassName="col-sm-6 col-sm-offset-3">
												<input type="submit" name="login-submit" id="login-submit" tabindex="4" ClassName="form-control btn btn-login" value="Log In"/>
											</div>
										</div>
									</div>
									<div ClassName="form-group">
										<div ClassName="row">
											<div ClassName="col-lg-12">
												<div ClassName="text-center">
													<a href="" tabindex="5" ClassName="forgot-password">Forgot Password?</a>
												</div>
											</div>
										</div>
									</div>
								</form>


 
         this.signUp = <div ClassName="panel-body">
						<div ClassName="row">
							<div ClassName="col-lg-12">
								
								<form id="register-form"  method="post" role="form" >
									<div ClassName="form-group">
										<input type="text" name="username" id="username" tabindex="1" ClassName="form-control" placeholder="Username" value=""/>
									</div>
									<div ClassName="form-group">
										<input type="email" name="email" id="email" tabindex="1" ClassName="form-control" placeholder="Email Address" value=""/>
									</div>
									<div ClassName="form-group">
										<input type="password" name="password" id="password" tabindex="2" ClassName="form-control" placeholder="Password"/>
									</div>
									<div ClassName="form-group">
										<input type="password" name="confirm-password" id="confirm-password" tabindex="2" ClassName="form-control" placeholder="Confirm Password"/>
									</div>
									<div ClassName="form-group">
										<div ClassName="row">
											<div ClassName="col-sm-6 col-sm-offset-3">
												<input type="submit" name="register-submit" id="register-submit" tabindex="4" ClassName="form-control btn btn-register" value="Register Now"/>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

                  this.contain =   this.state.toggle ? <div>{this.signUp}</div> : <div>{this.login}</div>

        
return(

						<div >
								<a ClassName = "hi" href="#"  onClick = {this.change}>Login</a>
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
                                &nbsp;&nbsp;
								<a   onClick = {this.changelogin}>Register</a>
							{this.contain}
						</div>
					
                 
)
    }
}
export default SignUp;