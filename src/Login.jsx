import React from "react";
import axios from "axios";
import ReactBootstrap, {Form, Button,Row,Col} from 'react-bootstrap'
  

    class LoginMode extends React.Component
    {
      constructor(props)
      {
        super(props);
        //this.props=props;
        //this.props.isLoggedInUser=props.isLoggedInUser;
        this.state = {emailId:"",password:"",isExistingUser:this.props.isLoggedInUser};
        
        this.showForm = this.showForm.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.registerUser=this.registerUser.bind(this);
        this.handleEmailChange =this.handleEmailChange.bind(this);
        this.handlePasswordChange =this.handlePasswordChange.bind(this);
        this.alertUser=this.alertUser.bind(this)
        this.registerUser=this.registerUser.bind(this)
       // this.showLoginForm=this.showLoginForm.bin
       
      }
      showForm(e)
      {

        if(e.target.id === "register"){
        this.setState({"isExistingUser":false});
        }
        else
        {
          this.setState({"isExistingUser":true});
        }
      }
      handleSubmit = e => {
        e.preventDefault();
        const data = {
          email: this.state.emailId,
          password: this.state.password
        };
        axios
          .post(" http://localhost:3000/users/login", data)
          .then(res => {this.props.onChange("true"); this.render()})
          .catch(err => {console.log(err) ;alert("Please check your credentials")});
      };
      registerUser= e => {
        e.preventDefault();
        const data = {
          email: this.state.emailId,
          password: this.state.password
          
        };
        axios
          .post(" http://localhost:3000/signup", data)
          .then(res => {this.setState({isExistingUser:true})})
          .catch(err => {console.log(err) ;alert("Please check your credentials")});
      };
      handleEmailChange(e)
      {
        
        this.setState({emailId : e.target.value})
       

      }
      handlePasswordChange(e)
      {
       
          this.setState({password : e.target.value})

        

      }
     
     renderLogin() {
        
          return (
            <div class="loginDiv">
              <div>
              <Form id="login_form"  onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" id="loginEmailID" placeholder="Enter email"  value={this.state.emailId} onChange={this.handleEmailChange}/>
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
              </Form.Group>
              {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group> */}
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
            </div>
            <div>
                          <p >Not a user ?  <button  id="register" class="transparentButton" type="submit" onClick={this.showForm}>
                Register
              </button></p></div>
            </div>
          );
      
          }
         renderRegister(){
           return(
              <div class="loginDiv">
                <div>
                  <Form id="registration_form" onSubmit={this.registerUser}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter email"  value={this.state.emailId} onChange={this.handleEmailChange}/>
                    </Form.Group>
                  
                    <Form.Group as={Col} controlId="formGridPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password"value={this.state.password} onChange={this.handlePasswordChange} />
                    </Form.Group>
                  </Row>
                  
                  <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                  </Form.Group>
                  
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label>City</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label>State</Form.Label>
                      <Form.Select defaultValue="Choose...">
                        <option>Choose...</option>
                        <option>...</option>
                      </Form.Select>
                    </Form.Group>
                  
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control />
                    </Form.Group>
                  </Row>
                  
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  </Form>
                  </div>
                  <div>
                  <p>Already Existing USer ?<button  class="transparentButton" id="login" type="submit" onClick={this.showForm}>
                Login
              </button></p>
                  </div>
                  </div>
                    
           );
          }
      alertUser(){
        alert("You are logged In!!");
      }
      render() {
        if(this.props.isLoggedInUser)
        {
          return (<div>
          {this.alerUser}
          </div>)
        }
      else if( this.state.isExistingUser)
      {
       return this.renderLogin();
      }
       else{
    return    this.renderRegister();
          
      }
  

          }
      
    }


export default LoginMode;