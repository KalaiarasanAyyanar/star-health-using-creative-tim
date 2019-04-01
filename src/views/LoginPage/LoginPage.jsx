import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
//import InputAdornment from "@material-ui/core/InputAdornment";
//import Icon from "@material-ui/core/Icon";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
//import Check from "@material-ui/icons/Check";
// @material-ui/icons
//import Email from "@material-ui/icons/Email";
//import People from "@material-ui/icons/People";
// core components
//import Header from "components/Header/Header.jsx";
//import HeaderLinks from "components/Header/HeaderLinks.jsx";
//import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
//import CardHeader from "components/Card/CardHeader.jsx";
//import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";


class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "",
      checked: [24, 22],
    };
    
  }
  
    
    
  
  handleToggle(value) {
    const { checked } = this.state;
    console.log("checked")
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
           <div className={classes.container}>
            <GridContainer justify="left" >
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>
                  <form className={classes.form} >
                    <CardBody>
                      <h3 style={{fontWeight:"bold"}}>The Health Insurance Specialist</h3>
                    <p style={{marginBottom:"0px",color:"black",opacity:"0.6"}} >You are just 60 seconds away from getting the best possible insurance cover for you and your family</p>
              
                      <CustomInput
                        labelText="Name"
                        id="first"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "text",
                        
                        }}
                     
                      />
                      <CustomInput
                        labelText="Email Address"
                        id="email"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "email",
                         
                        }}
                      />
                      <CustomInput
                        labelText="Mobile Number"
                       
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "tel",
                          
                        }}

                      />
                       <FormControlLabel
                    control={
                      <Checkbox
                        tabIndex={-1}
                        onClick={() => this.handleToggle(21)}
                      //  checkedIcon={<Check className={classes.checkedIcon} />}
                       // icon={<Check className={classes.uncheckedIcon} />}
                      //  classes={{ checked: classes.checked }}
                      />
                    }
                    classes={{ label: classes.label }}
                    label="I'm not a robot"
                   style={{opacity:"0.5",marginTop:"10px",fontSize:"0.8rem"}}
                  />
                
                       <Button simple color="success" size="sm"  style={{marginTop:"15px"}}>
                        GET QUOTE
                      </Button>
                    </CardBody>
                   
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          
      
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
