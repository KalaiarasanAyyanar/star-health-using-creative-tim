import React from "react";
// nodejs library that concatenates classes
//import classNames from "classnames";
// react components for routing our app without refresh
//import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
//import Parallax from "components/Parallax/Parallax.jsx";
//import { GooglePlus } from "@material-ui/icons";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import SectionBasics from "./Sections/SectionBasics.jsx";
// import SectionNavbars from "./Sections/SectionNavbars.jsx";
// import SectionTabs from "./Sections/SectionTabs.jsx";
// import SectionPills from "./Sections/SectionPills.jsx";
// import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
// import SectionJavascript from "./Sections/SectionJavascript.jsx";
// import SectionCarousel from "./Sections/SectionCarousel.jsx";
// import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
// import SectionLogin from "./Sections/SectionLogin.jsx";
// import SectionExamples from "./Sections/SectionExamples.jsx";
// import SectionDownload from "./Sections/SectionDownload.jsx";
import LoginPage from "../../views/LoginPage/LoginPage"
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import land from "../../assets/img/pexels.jpeg";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Tooltip from "@material-ui/core/Tooltip";
//import HeaderLinks1 from "../../components/Header/HeaderLink1.jsx"
class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div >
        <Header
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 50,
            color: "white"
          }}
          {...rest}
        />
        <div style={{backgroundImage : `linear-gradient(
      rgba(16,16, 16, 0.45), 
      rgba(16, 16, 16, 0.45)
    ),url(${land})`,backgroundPosition: "center center",backgroundSize: "cover",}} >
        {/* <Parallax image={require("assets/img/pexels.jpeg")}> */}
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                <LoginPage />
                </div>
                
                
       <div style={{float:"right"}}>
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"}  style={{color:"white"}}/>
          </Button>
       
     
      
      
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} style={{color:"white"}} />
          </Button>
        
     
      
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} style={{color:"white"}} />
          </Button>
       
     
          </div>
              </GridItem>
            </GridContainer>
          </div>
         
        </div>
        <div className={classes.main}>
      <SectionTypography/>
      </div>
        
      <Footer
       
          content={
            <div >
               <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            style={{padding:"7px 7px"}}
          >
            <i className={classes.socialIcons + " fab fa-twitter"}  style={{color:"white"}}/>
          </Button>
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            style={{padding:"7px 7px"}}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} style={{color:"white"}} />
          </Button>

          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            style={{padding:"7px 7px"}}
          >
           <i className={classes.socialIcons + " fab fa-dribbble"} style={{color:"white"}} />
          </Button>
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            style={{padding:"7px 7px"}}
          >
           <i className={classes.socialIcons + " fab fa-google-plus-g"} style={{color:"white"}} />
          </Button>
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            style={{padding:"7px 7px"}}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} style={{color:"white"}} />
          </Button>
       
        
              <div className={classes.right}>
                Copyright &copy; {1900 + new Date().getYear()}{" "}
                <a
                  href="https://www.creative-tim.com"
                 style={{color:"white"}}
                >
                  Star Health
                </a>{" "}
                All Rights Reserved.
              </div>
            </div>
          }
        >
       
        
          <GridContainer  md={7} style={{margin: '0 auto',}}>
            <GridItem xs={12} sm={2} md={3}>
              <h5>UsefulLink</h5>
              <p>
               Anti Fraud Policy{" "}
              </p>
              <p>
               Corporate Health Claim{" "}
              </p>
              <p>
               Disclaimer{" "}
              </p>
              <p>
               DND Registration{" "}
              </p>
              <p>
              Downloads{" "}
              </p>
            </GridItem>
            <GridItem xs={12} sm={2} md={3}>
              <h5>Company</h5>
              <p>
              Employee Login{" "}
              </p>
              <p>
              GI Counsil{" "}
              </p>
              <p>
              Insurance Information{" "}
              </p>
              <p>
              Bureau{" "}
              </p>
              <p>
              Glossary{" "}
              </p>
              <p>
              Grievance{" "}
              </p>
            </GridItem>

            <GridItem xs={12} sm={2} md={3}>
              <h5>Support</h5>
              <p>
               Privacy{" "}
              </p>
              <p>
               FAQs{" "}
              </p>
              <p>
               Support{" "}
              </p>
              <p>
              Public Disclosure{" "}
              </p>
              <p>
              Team of Usage{" "}
              </p>
            </GridItem>
            <GridItem xs={12} sm={2} md={3}>
              <h5>Information</h5>
              <p>
              Health Insurance for{" "}
              </p>
              <p>
               Corporate{" "}
              </p>
              <p>
               Health Zone{" "}
              </p>
              <p>
               IRDAI{" "}
              </p>
              <p>
              IRDAI Consumer{" "}
              </p>
            </GridItem>
           
          </GridContainer>
         
        </Footer>
       
      </div> 
    );
  }
}

export default withStyles(componentsStyle)(Components);
