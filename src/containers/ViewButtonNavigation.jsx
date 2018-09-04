import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    minHeight: 'calc(100vh - 180px)',
    backgroundColor: theme.palette.background.paper,
  },
  navtabs: {
    boxShadow: 'none',
  }
});

class ViewButtonNavigation extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const {value,} = this.state;
    const {
      classes,  
      accountInfoTab,
      newAccountTab,
      transferTokenTab,
      contractTab,
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" className={classes.navtabs}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            scrollable
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            wrapper
          >
            <Tab label="New Account" />
            <Tab label="Account Info"  />
            <Tab label="Transfet Token"  />
            <Tab label="Contract"  />

          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><div className={classes.appResponsive}>{newAccountTab}</div></TabContainer>}
        {value === 1 && <TabContainer><div className={classes.appResponsive}>{accountInfoTab}</div></TabContainer>}
        {value === 2 && <TabContainer><div className={classes.appResponsive}>{transferTokenTab}</div></TabContainer>}
        {value === 3 && <TabContainer><div className={classes.appResponsive}>{contractTab}</div></TabContainer>}

      </div>
    );
  }
}

ViewButtonNavigation.propTypes = {
  classes: PropTypes.object.isRequired,
  accountInfoTab: PropTypes.node,
  newAccountTab: PropTypes.node,
  transferTokenTab: PropTypes.node,
  contractTab: PropTypes.node,
};

export default withStyles(styles)(ViewButtonNavigation);
