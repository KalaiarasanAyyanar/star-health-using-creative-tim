/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
//import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Translate,Search } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  {console.log("classes",classes)}
  return (
  
    <List className={classes.list}>
      
      <ListItem className={classes.listItem}>
        
          <Button
            href="https://twitter.com/CreativeTim"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
           HOME
          </Button>
        
      </ListItem>
      <ListItem className={classes.listItem}>
        
        <Button
          href="https://twitter.com/CreativeTim"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
         PLANS
        </Button>
      
    </ListItem>
    <ListItem className={classes.listItem}>
        
        <Button
          href="https://twitter.com/CreativeTim"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
         RENEWALS
        </Button>
      
    </ListItem>

    <ListItem className={classes.listItem}>
        
        <Button
          href="https://twitter.com/CreativeTim"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
         CLAIMS
        </Button>
      
    </ListItem>



<ListItem className={classes.listItem}>
  <CustomDropdown
    noLiPadding
    buttonText="LOGIN"
    buttonProps={{
      className: classes.navLink,
      color: "transparent"
    }}
   
    dropdownList={[
      <Link to="/" className={classes.dropdownLink}>
        All components
      </Link>,
      <a
        href="https://creativetimofficial.github.io/material-kit-react/#/documentation"
        target="_blank"
        className={classes.dropdownLink}
      >
        Documentation
      </a>
    ]}
  />
</ListItem>
<ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Search className={classes.icons} /> 
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Translate className={classes.icons} />
        </Button>
      </ListItem>

    {/* <ListItem className={classes.listItem}>
        
        <Button
          href="https://twitter.com/CreativeTim"
          target="_blank"
          color="transparent"
          className={classes.navLink}
        >
         CLAIMS
        </Button>
      
    </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
