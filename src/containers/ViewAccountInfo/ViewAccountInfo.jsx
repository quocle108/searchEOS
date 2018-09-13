import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import SearchAccount from '../SearchAccount/index'

const styles = theme => ({
  root: {
    flex: 1, 
  },
  searchBar:{
    align: "center",
    margin: "auto",
  },
});

class ViewAccountInfo extends React.Component {
  state = {
    spacing: '16',
  };

  handleChange = key => (event, value) => {
    this.setState({
      [key]: value,
    });
  };

  render() {
    const { classes } = this.props;
    const { spacing } = this.state;

    return (
      <Grid container className={classes.root} spacing={16}>
        <Grid item xs={12} direction="column" justify="center" alignItems="center" >
          <Grid item className={classes.searchBar}>
            <SearchAccount />
          </Grid>

        </Grid>
      </Grid>
    );
  }
}

ViewAccountInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewAccountInfo);