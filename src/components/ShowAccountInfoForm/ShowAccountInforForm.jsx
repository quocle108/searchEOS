import React from 'react'
import withStyles from "@material-ui/core/styles/withStyles";

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

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

class ShowAccountInforForm extends React.Component {
    constructor(props) {
        super(props);
        const { classes } = props;
        this.state = {
            data: null,
        }
    }
    componentDidMount() {
        fetch('https://api.coinmarketcap.com/v2/ticker/1765/')
            .then(results => results.json())
            .then(data => {
                console.log("tam__", data.data.quotes.USD.price);
                this.setState({ data: data.data.quotes.USD.price })
            });
    };
    render() {
        return (
            <div>
                <Grid xs={12} direction="column" justify="space-evenly" alignItems="flex-start">
                    <Grid container item xs={12} direction="row" justify="center" >
                        <Typography variant="headline" className={this.props.classes.layout}>
                            Account: <b>{this.props.account.account_name}</b><br />
                        </Typography>
                    </Grid>
                    <Divider />
                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>EOS Balance:</b></Grid>
                        <Grid >{this.props.account.core_liquid_balance}</Grid>
                    </Grid>
                    <Divider />
                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>USD value:</b></Grid>
                        <Grid >{(parseInt(this.props.account.core_liquid_balance, 10) * this.state.data).toFixed(2)} $</Grid>
                    </Grid>
                    <Divider />
                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>CPU stake:</b></Grid>
                        <Grid >{this.props.account.total_resources.cpu_weight} </Grid>
                    </Grid>
                    <Divider />
                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>NET stake:</b></Grid>
                        <Grid >{this.props.account.total_resources.net_weight} </Grid>
                    </Grid>
                    <Divider />
                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>RAM used:</b></Grid>
                        <Grid >{this.props.account.ram_usage}/{this.props.account.ram_quota} bytes </Grid>
                    </Grid>
                    <Divider />

                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>CPU used:</b></Grid>
                        <Grid >{this.props.account.cpu_limit.used}/{this.props.account.cpu_limit.available} µs</Grid>
                    </Grid>
                    <Divider />

                    <Grid container item xs={12} direction="row" className={this.props.classes.layout}>
                        <Grid item xs={4} ><b>NET used:</b></Grid>
                        <Grid item xs={8}>{this.props.account.net_limit.used} / {this.props.account.net_limit.available} bytes</Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default withStyles(ShowAccountInforFormStyle)(ShowAccountInforForm);




