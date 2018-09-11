import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import { List, ListItem } from '@material-ui/core';


//style using in Footer
const ShowAccountInforFormStyle = theme => ({
    root: {
        marginBottom: "10px",
        marginTop: "10px",
        marginLeft: "10px",
    },
    layout: {
        marginBottom: "10px",
        marginTop: "10px",
        marginLeft: "20px",
    },
})
function GetData  () {
    fetch('https://api.coinmarketcap.com/v2/ticker/1765/')
    .then(results =>{
        results.json();
    })
    .then(myJson =>{
        console.log("tam_", myJson.data.quotes.USD.price);
        return myJson.data.quotes.USD.price

    })

};

class ShowAccountInforForm extends React.Component {
    constructor(props){
        super(props);
        const { classes, account } = props;
    }
    

    componentDidMount  () {
        fetch('https://api.coinmarketcap.com/v2/ticker/1765/')
        .then(results =>{
            console.log("tam_", results.json());
            console.log("tam_", results.json().data);
            return results.json();
        })

    
    };


render(){
    return (
        <div>
            <Grid xs={12} direction="column" justify="space-evenly" alignItems="flex-start">
                <Grid container item xs={12} direction="row" justify="center" >
                    <Typography variant="headline">
                    </Typography>
                </Grid>
                <Divider />

                {/* <Grid container item xs={12} direction="row" className={classes.layout}>
                    <Grid item xs={4} ><b>Balance:</b></Grid>
                    <Grid >{account.core_liquid_balance} </Grid>
                </Grid>
                <Divider />
                <Grid container item xs={12} direction="row" className={classes.layout}>
                    <Grid item xs={4} ><b>RAM:</b></Grid>
                    <Grid >{account.ram_usage}/{account.ram_quota} bytes </Grid>
                </Grid>
                <Divider />

                <Grid container item xs={12} direction="row" className={classes.layout}>
                    <Grid item xs={4} ><b>CPU:</b></Grid>
                    <Grid >{account.total_resources.cpu_weight}({(account.cpu_limit.used / account.cpu_limit.available * 100).toFixed(2)}% used) </Grid>
                </Grid>
                <Divider />

                <Grid container item xs={12} direction="row" className={classes.layout}>
                    <Grid item xs={4} ><b>NET:</b></Grid>
                    <Grid item xs={8}>{account.total_resources.net_weight}({(account.net_limit.used / account.net_limit.available * 100).toFixed(2)}% used)</Grid>
                </Grid> */}
            </Grid>
        </div>
    )
}
}
export default withStyles(ShowAccountInforFormStyle)(ShowAccountInforForm);




