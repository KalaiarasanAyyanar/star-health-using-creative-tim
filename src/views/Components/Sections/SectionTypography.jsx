import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Table from "@material-ui/core"


// @material-ui/icons

// core components




import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import cardProfile1Square from "assets/img/faces/card-profile1-square.jpg";
import Muted from "components/Typography/Muted.jsx";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";
import cardProfile4Square from "assets/img/faces/card-profile4-square.jpg";
import cardProfile5Square from "assets/img/faces/card-profile5-square.jpg";
import Carousel from "react-slick";
import typographyStyle from "assets/jss/material-kit-react/views/componentsSections/typographyStyle.jsx";
import image1 from "./Images/family-image1.jpg";
import image2 from "./Images/Landing_Page.png";
import image3 from "./Images/Landing_Page3.png";
import image4 from "./Images/Landing-Page2.png";
import image5 from "./Images/section3image1.png";
import image6 from "./Images/section3image2.png";
import image7 from "./Images/section3image3.png";
import { Hidden } from "@material-ui/core";
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';

import Button from "components/CustomButtons/Button.jsx";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false
};

const CustomSkinMap = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.43353, lng: 26.093928 }}
      defaultOptions={{
        scrollwheel: false,
        zoomControl: true,
        styles: [
          {
            featureType: "water",
            stylers: [
              { saturation: 43 },
              { lightness: -11 },
              { hue: "#0088ff" }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.fill",
            stylers: [
              { hue: "#ff0000" },
              { saturation: -100 },
              { lightness: 99 }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry.stroke",
            stylers: [{ color: "#808080" }, { lightness: 54 }]
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry.fill",
            stylers: [{ color: "#ece2d9" }]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [{ color: "#ccdca1" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.fill",
            stylers: [{ color: "#767676" }]
          },
          {
            featureType: "road",
            elementType: "labels.text.stroke",
            stylers: [{ color: "#ffffff" }]
          },
          { featureType: "poi", stylers: [{ visibility: "off" }] },
          {
            featureType: "landscape.natural",
            elementType: "geometry.fill",
            stylers: [{ visibility: "on" }, { color: "#b8cb93" }]
          },
          { featureType: "poi.park", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.sports_complex",
            stylers: [{ visibility: "on" }]
          },
          { featureType: "poi.medical", stylers: [{ visibility: "on" }] },
          {
            featureType: "poi.business",
            stylers: [{ visibility: "simplified" }]
          }
        ]
      }}
    >
      <Marker position={{ lat: 44.43353, lng: 26.093928 }} />
    </GoogleMap>
  ))
);
const gridData = [
  {
    title: "Easy EMI Options",
    content: "The book was first published on 26 March 1956"
  },
  {
    title: "Easy EMI Options",
    content: "The book was first published on 26 March 1956"
  },
  {
    title: "Easy EMI Options",
    content: "The book was first published on 26 March 1956"
  },
  {
    title: "Easy EMI Options",
    content: "The book was first published on 26 March 1956"
  },
  {
    title: "Easy EMI Options",
    content: "The book was first published on 26 March 1956"
  }
]


function mediaQueryInit(){
  console.log("hiiiiiiii")
  return useMediaQuery('(min-width:600px)');
}

class SectionTypography extends React.Component {

  componentDidMount(){
  
  }
  render() {
    
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
       
          <div className={classes.space50} />
          <div id="images">
          <div className={classes.title}>
              <p className={classes.headingForImageSection}>Why Star Health Insurance is a smart choice</p>
              <p className={classes.dataForImageSection}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
             
            </div>
            <br />
            <div style={{marginLeft: "15%"}}>
            <GridContainer spacing={24} lg={10} md={10} sm={12} xs={12} cellHeight={200} align="center">
              <GridItem lg={6} xs={12} md={6} sm={6}>
                <GridContainer spacing={24} >
                  <GridItem lg={12} md={12}>
                    <div className= {classes.ImageDiv}>
                    <img src={image1} width="200" alt="janu" className={classes.ImageEven1+" "+classes.column} />
                    <div className={classes.Overlay} style={{'@media(minWidth: 780px)' : {
    width: '80%'
  }}}>
                    <div className={classes.socialIcons}>
                   
                        <i className="fab fa-facebook-square" style={{fontSize:"medium",paddingBottom:"90%",cursor:"pointer"}}/>
                     
                      
                        <i className="fab fa-twitter" style={{fontSize:"small",paddingBottom:"90%",cursor:"pointer"}}/>
                  
                        <i className="fab fa-skype" style={{fontSize:"small",paddingBottom:"90%",cursor:"pointer"}} />
                   
                    </div>
                    <GridItem lg={1} sm={1} xs={1} md={1} className={classes.HeadingImageSection}>
                    Myself
                    </GridItem>
                    <div className={classes.OverlayPara}>The Treaty of Versailles permitted the German navy to keep eight obsolete battleships, including Schlesien, to defend the German coast. Modernized in the mid-1920s, the ship saw limited combat during World War II, briefly bombarding Polish forces during the invasion of Poland in September 1939. After escorting minesweepers during the invasion of Norway and Denmark 
                    </div>

                   <GridContainer lg={12} md={11} sm={6} xs={8}>
                    <GridItem lg={6} md={7} sm={12} xs={12} justify="center">
                    <Button
                    color="success"
                    target="_blank" 
                    round
                    style={{backgroundColor:"limegreen"}}
                  >
                    REQUEST A QUOTE
                  </Button>
                  </GridItem>
                  <GridItem lg={6} md={1} sm={12} xs={12} justify="center">
              <Button
                    color="success"
                    target="_blank"
                    style={{backgroundColor:"limegreen"}}
                    round
                  >
                    LEARN MORE
                  </Button>
                  </GridItem>
                  </GridContainer>
                 
                  </div>
                  <div className={classes.BeforeOnhoverHeading}>Myself</div>

                    </div>
                  
                  </GridItem>

                  <GridItem>
                    <img src={image4} width="200" alt="janu" className={classes.ImageOdd1} />
                  </GridItem>

                </GridContainer>
              </GridItem>
              <GridItem lg={6} xs={12} sm={6} md={6}>
                <GridContainer spacing={24} >
                  <GridItem>
                    <img src={image2} width="200" alt="janu" className={classes.ImageOdd2}/>
                  </GridItem>

                  <GridItem>
                    <img src={image3} width="200" alt="janu" className={classes.ImageEven2}/>

                  </GridItem>

                </GridContainer>
              </GridItem>
            </GridContainer>
            </div>
 
            <div className={classes.headingForImageSection}>            
              <Button
                    color="success"
                    target="_blank"
                    style={{backgroundColor:"green"}}
                    round
                  >
                    view all sections
                  </Button>
                  </div>

</div>

            <GridContainer />
            <br />
            <div className={classes.numbersGridBackground}>
              <div className={classes.numbersGridContainer}>
                <GridContainer>
                  <GridItem xs={12} sm={4}>
                    <div className={classes.numbersGrid}>
                    <p className={classes.numbersGridContainerHeader}>Health Insurance Portability</p>
                    <p className={classes.numbersGridContainerData}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
                    </div>
                  </GridItem>
                  <GridItem xs={12} sm={8} className={classes.marginLeft}>
                    <GridContainer>
                      {
                        gridData.map((prop) => {
                          return (
                            <GridItem md={6} lg={4} xs={12} sm={12}>
                              <div className={classes.whiteBoxes}>
                                <div className={classes.whiteBoxContent}>
                                  <p className={classes.headingForImages}>{prop.title}</p>
                                  <p className={classes.dataForImages}>{prop.content}</p>
                                </div>
                              </div>
                            </GridItem>
                          );
                        })
                      }
                    </GridContainer>
                  </GridItem>
                </GridContainer>
              </div>
            </div>
          <div className={classes.space50} />
          <div id="images">
            <div className={classes.title}>
              <p className={classes.headingForImageSection}>Why Star Health Insurance is a smart choice</p>
              <p className={classes.dataForImageSection}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
            </div>
            <br />
            <GridContainer>
              <GridItem xs={12} sm={4}>
                <img
                  src={image5}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <p className={classes.headingForImages}>Health Insurance Portability</p>
                <p className={classes.dataForImages}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.marginLeft}>
                <img
                  src={image6}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <p className={classes.headingForImages}>Easy EMI Options</p>
                <p className={classes.dataForImages}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
              </GridItem>
              <GridItem xs={12} sm={4} className={classes.marginLeft}>
                <img
                  src={image7}
                  alt="..."
                  className={classes.imgRounded + " " + classes.imgFluid}
                />
                <p className={classes.headingForImages}>Senior Citizens Red Carpet</p>
                <p className={classes.dataForImages}>The book was first published on 26 March 1956. The story centres on Bond's investigation of a diamond-smuggling operation that originates in the mines of Sierra Leone and runs to Las Vegas. Along the way Bond meets and falls in love with one</p>
              </GridItem>
            </GridContainer>
            <br />
            <br />
            <br />
            <br />
            <div>
              <GridItem xs={12} sm={12} md={12}>
                <GridContainer justify="center" >
                  <GridItem xs={8} lg={8} sm={8} md={8} className={classes.MapHeader} >
                    <Card raised className={classes.card}>
                      <CardBody formHorizontal>
                        <form  >
                          <GridContainer style={{paddingTop:"-90px"}}>
                            <GridItem xs={12} sm={3} md={3} >
                              <CustomInput
                                id="state"
                                inputProps={{
                                  placeholder: "State"
                                }}
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.formControl
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={3} md={3}>
                              <CustomInput
                                id="city"
                                inputProps={{
                                  placeholder: "City"
                                }}
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.formControl
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={3} md={3}>
                              <CustomInput
                                id="hospital"
                                inputProps={{
                                  placeholder: "Hospital",
                                }}
                                formControlProps={{
                                  fullWidth: true,
                                  className: classes.formControl
                                }}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={3} md={3}  style={{paddingTop:"2%"}}>
                              <Button
                                block
                                color="success"
                                className={classes.button}
                                style={{backgroundColor:"green"}}
                              >
                                SEARCH
                        </Button>
                            </GridItem>
                          </GridContainer>
                        </form>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem>
                    <div className={classes.bigMap}>
                      <CustomSkinMap
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyAbmUO4W_TMnbGZFIRLFXhfmeCSneJKCl4&libraries=places"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={
                          <div
                            style={{
                              height: `100%`,
                              borderRadius: "6px",
                              overflow: "hidden"
                            }}
                          />
                        }
                        mapElement={<div style={{ height: `100%` }} />}
                      />
                    </div>
                  </GridItem>
                </GridContainer>
                <Card >
                </Card>

              </GridItem>

            </div>
            <Carousel {...settings}>
              {/* Carousel 1 START */}
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card testimonial plain>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={cardProfile1Square} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h4 className={classes.title}>Mike Andrew</h4>
                        <Muted>
                          <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                        </Muted>
                        <h5 className={classes.cardDescription}>
                          "I speak yell scream directly at the old guard on
                          behalf of the future. I gotta say at that time I’d
                          like to meet Kanye I speak yell scream directly at the
                          old guard on behalf of the future."
                        </h5>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card testimonial plain>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={cardProfile2Square} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h4 className={classes.title}>Mike Andrew</h4>
                        <Muted>
                          <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                        </Muted>
                        <h5 className={classes.cardDescription}>
                          "I speak yell scream directly at the old guard on
                          behalf of the future. I gotta say at that time I’d
                          like to meet Kanye I speak yell scream directly at the
                          old guard on behalf of the future."
                        </h5>
                      </CardBody>
                    </Card>
                  </GridItem>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card testimonial plain>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={cardProfile4Square} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h4 className={classes.title}>Mike Andrew</h4>
                        <Muted>
                          <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                        </Muted>
                        <h5 className={classes.cardDescription}>
                          "I speak yell scream directly at the old guard on
                          behalf of the future. I gotta say at that time I’d
                          like to meet Kanye I speak yell scream directly at the
                          old guard on behalf of the future."
                        </h5>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
              <div>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <Card testimonial plain>
                      <CardAvatar testimonial plain>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <img src={cardProfile5Square} alt="..." />
                        </a>
                      </CardAvatar>
                      <CardBody plain>
                        <h4 className={classes.title}>Mike Andrew</h4>
                        <Muted>
                          <h6>CEO @ MARKETING DIGITAL LTD.</h6>
                        </Muted>
                        <h5 className={classes.cardDescription}>
                          "I speak yell scream directly at the old guard on
                          behalf of the future. I gotta say at that time I’d
                          like to meet Kanye I speak yell scream directly at the
                          old guard on behalf of the future."
                        </h5>
                      </CardBody>
                    </Card>
                  </GridItem>
                </GridContainer>
              </div>
            </Carousel>
            {/* <GridContainer /> */}
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(typographyStyle)(SectionTypography);
