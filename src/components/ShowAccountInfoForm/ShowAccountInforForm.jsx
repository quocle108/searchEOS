import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import CustomLinearProgress from '../CustomLinearProgress/CustomLinearProgress'


//style using in Footer
const ShowAccountInforFormStyle = theme => ({
    layoutName:{
        marginBottom: "20px",
        marginTop: "10px",
        marginLeft: "20px",
    },
    layoutInfor:{
        marginBottom: "20px",
        marginTop: "10px",
        marginLeft: "20px",
    },
})

const ShowAccountInforForm = props => {
    const { classes, account } = props;

    return (
        <div>
            <Grid container item xs={12} direction="column">

                <Grid container spacing={16} item xs={12} direction="column" justify="space-evenly" alignItems="flex-start" className={classes.layoutName}>

                    <Typography variant="display1">
                        Account: <b>{account.account_name}</b><br/>
                    </Typography>

                    <Typography variant="headline">
                        Balance: <b>{account.core_liquid_balance}</b>
                    </Typography>
                </Grid>
                <Divider/>

                <Grid item xs={12} className={classes.layoutInfor}>
                    <Grid container item xs={12} direction="row">
                        <Grid item xs={4} ><b>RAM:</b></Grid>
                        <Grid >{account.ram_usage}/{account.ram_quota} bytes </Grid>
                    </Grid>
                    <CustomLinearProgress variant="determinate" color="success" value={account.ram_usage/account.ram_quota*100}/>

                    <Grid container item xs={12} direction="row">
                        <Grid item xs={4} ><b>CPU:</b></Grid>
                        <Grid >{account.total_resources.cpu_weight}({(account.cpu_limit.used/account.cpu_limit.available*100).toFixed(2)}% used) </Grid>
                    </Grid>
                    <CustomLinearProgress variant="determinate" color="info" value={account.cpu_limit.used/account.cpu_limit.available*100}/>

                    <Grid container item xs={12} direction="row">
                        <Grid item xs={4} ><b>NET:</b></Grid>
                        <Grid item xs={8}>{account.total_resources.net_weight}({(account.net_limit.used/account.net_limit.available*100).toFixed(2)}% used)</Grid>
                    </Grid>
                    <CustomLinearProgress variant="determinate" color="warning" value={account.net_limit.used/account.net_limit.available*100}/>           
                </Grid>

            </Grid>
        </div>
    )
}
export default withStyles(ShowAccountInforFormStyle)(ShowAccountInforForm);




