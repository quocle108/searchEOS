import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import SearchBar from "components/SearchBar/SearchBar.jsx";
import Avatar from '@material-ui/core/Avatar';
import image from "assets/images/avatar.jpg";
import CustomDropdown from 'components/CustomDropdown/CustomDropdown.jsx'

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
 
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
const styles = {
  root: {
    flexGrow: 1,
  },
  tile: {
    flexGrow: 1,
    padding: 8 * 2,
  },
  search:{
    //flexGrow: 1,
    border: 20,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  avatar: {
    margin: 0,
  }

};

class Header extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <AppBar position="static">
        
          <Toolbar>
          <Avatar alt="Remy Sharp" src={image} className={classes.avatar} />
            <Typography variant="display1" color="inherit" component="div" className={classes.tile}>
              EOSGUI
            </Typography>

            <SearchBar className={classes.search} 
              placeholder= {'Search By Account'}
            />
            <CustomDropdown/>

          </Toolbar>
        </AppBar>
           
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);