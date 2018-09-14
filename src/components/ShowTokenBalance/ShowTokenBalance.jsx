/*eslint-disable no-unused-vars */
import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"

const styles = {
    root: {

    },

}

const ShowTokenBalace = props => {
    const { tokenBalance } = props;

    return (
        <div>

            <Typography variant="headline">
                <b>Token Balances</b>
            </Typography>
            <Divider />

            <Grid container item xs={12} direction="row">
                {

                    Object.keys(tokenBalance).map((key) =>{
                        console.log("tam _ 1", key);
                        console.log("tam _ 2", tokenBalance[key].account);
                        return <Grid > {tokenBalance[key].account} : {tokenBalance[key].balance} </Grid>
                    })

                }
            </Grid>
        </div>
    )
}
export default withStyles(styles)(ShowTokenBalace);
