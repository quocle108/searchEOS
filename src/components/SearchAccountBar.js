/*eslint-disable no-unused-vars */
import React from 'react'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const ButtonStyle = {
  borderRadius: 3,
  backgroundColor: "#ffffff",
  textTransform: 'capitalize',
  color: '#4CAF50',
  border: '2px solid #4CAF50',
  fontSize: '23px',
  "&:hover": {
    color: "#FFFFFF",
    backgroundColor: "#4CAF50",
    cursor: 'pointer'
  },
};

const styles = theme => ({

});

class SearchAccountBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.handleClick = this.handleClick.bind(this);

  }


  onChangeText(e) {
    console.log("tam_ onChangeText ", e.target.value);
    this.setState({ name: e.target.value });


  };
  handleClick(e) {
    console.log("tam_ handle click ", this.state.name);
    this.props.handleAccountName(this.state.name);
  }

  render() {
    return (
      <div>
        <Grid container items xs={12} direction="row" justify="center" alignItems="flex-start" spacing={8}>
          <Grid container justify="center">
            <Input placeholder="Search Account" type="text" style = {{width: "50%"}}
              inputProps={{
                'aria-label': 'Description',
              }}
              onChange={this.onChangeText}
            />
          <Button variant="contained" color="primary" onClick={this.handleClick} >
              Search
            </Button>

          </Grid>
        </Grid>
      </div>
    )
  };
}

export default withStyles(styles)(SearchAccountBar);
