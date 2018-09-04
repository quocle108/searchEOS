import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 350,
    width: 600,
  },
  history: {
    padding: '50px',
    margin: ' 20px auto',
    maxWidth: '80%',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
});

class ViewNewAccount extends React.Component {
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
        <Grid item xs={12}>
          <Grid container className={classes.demo} justify="center" spacing={Number(spacing)}>

              <Grid key={0} item>
                <Paper className={classes.paper} />
              </Grid>
              <Grid key={1} item>
                <Paper className={classes.paper} />
              </Grid>
          </Grid>
          <Grid item xs={12}>
          <Paper className={classes.history}>ViewNewAccountn</Paper>
        </Grid>
        </Grid>

      </Grid>
    );
  }
}

ViewNewAccount.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ViewNewAccount);