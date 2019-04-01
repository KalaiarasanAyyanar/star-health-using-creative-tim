import { container, title } from "assets/jss/material-kit-react.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

const typographyStyle = {
  section: {
    padding: "70px 0"
  },
  container,
  space50: {
    height: "50px",
    display: "block"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative",
    width: "100%"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
 
  ImageOdd1: {
    objectFit: "cover",
    height: "320px",
    width: "100%",
    borderRadius: "2%"
  },
  ImageOdd2: {
    objectFit: "cover",
    height: "300px",
    width: "100%",
    borderRadius: "2%",
  },
  ImageEven1: {

    objectFit: "cover",
    height: "350px",
    width: "100%",
    borderRadius: "2%"

  },
  Overlay: {
    display: "none",
  },
  "@media (max-width: 990px)": {
    OverlayPara: {
      display: "none !important"
    },
    buttonContainer: {
      display: "block !important",
      marginTop: "80% !important",
      marginRight: "10% !important",
      marginLeft: "10% !important"
    },
    buttonImageSection1: {
      marginLeft: "10% !imprtant",
      width: "100% !important",

    },
    buttonImageSection2: {
      marginLeft: "10% !important",
      width: "100% !important"

    },
    HeadingImageSection:{
      marginLeft:"35% !important  "
   },
   BeforeOnhoverHeading:{
     marginLeft:"5% !important"
   }
  },
  ImageDiv: {
    '&:hover ': {
      '& $ImageEven1':{
      filter:"brightness(50%)",
      },
      '& $Overlay': {

      
        transition: "all 1s ease-in-out",
        position: "absolute",
        zIndex: "9999",
        margin: "0 auto",
        left: "0",
        right: "0",
        top: "5%", /* Adjust this value to move the positioned div up and down */
        textAlign: "center",
        width: "94%",
        height: "91%",
        color: "white",
        borderRadius: "2%",
        display: "block",
        transition: "1.5s !important"
      },
     '& $BeforeOnhoverHeading':{
      display:"none !important"
     },
   
    }
  },
  buttonImageSection1: {
    marginLeft: "10%",
    width: "40%",
    fontSize: "80%",
    fontWeight: "1000",
    float: "right"
  },
  buttonImageSection2: {

    marginLeft: "5%",
    width: "40% ",
    fontSize: "80%",
    fontWeight: "1000",
    float: "right"
  },
  buttonContainer: {
    display: "flex"
  },
  OverlayPara: {
    marginTop: "36%",
    fontSize: "60%",
    padding: "3%",
    textAlign: "left",
    lineSpacing: "100%"
  },
  HeadingImageSection: {
    position: "absolute",
    top: '30%',
    fontSize: "160%",
    fontWeight: "1000"
  },
  BeforeOnhoverHeading:{
    marginLeft: "0%",
    width: "40%",
    fontSize: "80%",
    fontWeight: "1000",
    float: "right",
    position: "absolute",
    zIndex: "9999",
    margin: "0 auto",
    left: "0",
    right: "0",
    top: "5%",
    color:"white !important",
  
    top: '80%',
    fontSize: "160%",
    left: "0%",
    fontWeight: "1000"
  },
  socialIcons: {

    float: "right",
    fontSize: "20px !important",
    paddingTop: "7% !important",
    paddingRight: "7% !important",
    display: "inline-grid",

  },
  ImageEven2: {

    objectFit: "cover",
    height: "370px",
    width: "100%",
    borderRadius: "2%"

  },


  headingForImageSection: {
    color: "#013a4c",
    fontSize: "23px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "15px",
    marginLeft: "auto !important"
  },
  dataForImageSection: {
    opacity: "0.3",
    fontSize: "13px",
    textAlign: "center",
    marginLeft: "12%",
    marginRight: "12%",
  },
  numbersGridBackground: {
    background: "#f3ecf3",
    position: "relative",
    // margin: "-60px 30px 0px",
    // borderRadius: "6px",
    // boxShadow:
    //   "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  numbersGridContainer: {
    padding: "50px",
  },
  numbersGrid: {
    marginTop: "12%",
    color: "#D4D4D4",
  },
  numbersGridContainerHeader: {
    marginBottom: "15px",
    color: "#013A4C",
    fontWeight: "500",
    fontSize: "20px"
  },
  numbersGridContainerData: {
    color: "#1B1B1B",
    fontWeight: "500",
    opacity: "0.5",
    fontSize: "15px"
  },
  marginLeft: {
    marginLeft: "auto !important"
  },
  whiteBoxes: {
    background: "#FFFFFF",
    margin: "10px",
  },
  whiteBoxContent: {
    padding: "5px",
  },
  headingForImages: {
    color: "#013a4c",
    fontSize: "13px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "15px",
    marginLeft: "auto !important"
  },
  dataForImages: {
    opacity: "0.7",
    fontSize: "13px",
    textAlign: "center",
  },
  bigMap: {
    height: "55vh",
    maxHeight: "550px",
    width: "100%",
    display: "block"
  },
   MapHeader: {
 
    position:"absolute",
    zIndex: "9999",
    top:"-20%",

  },
  "@media (max-width: 600px)": {
    MapHeader: {
      position: "relative "
    }
  },

  ...imagesStyles
};

export default typographyStyle;
