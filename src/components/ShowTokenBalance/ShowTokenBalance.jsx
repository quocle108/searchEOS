/*eslint-disable no-unused-vars */
import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles';
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import SvgIcon from '@material-ui/core/SvgIcon';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';


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

            <Grid>
                {

                    Object.keys(tokenBalance).map((key) => {
                        return <Grid container  xs={12} direction="row">
                            <Grid item xs={2} ><ThreeDRotationIcon/></Grid>
                            <Grid item xs={4} ><b>{tokenBalance[key].account} :</b></Grid>
                            <Grid item xs={6}>{tokenBalance[key].balance}</Grid>
                            <Divider />
                        </Grid>
                    })
                }
            </Grid>
        </div>
    )
}
export default withStyles(styles)(ShowTokenBalace);
