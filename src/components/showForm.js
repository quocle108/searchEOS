/*eslint-disable no-unused-vars */
import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const showForm = props =>{
  const{account } = props;

  return(
    <div>


    <hr />
    <Card > 
    <Typography color="textSecondary" variant="display1" style={{ margin: 100 }}>   
          Name     : {account.account_name} <br/>
          EOS      : {account.core_liquid_balance} <br/>
          RAM      : {account.ram_usage} bytes used<br/>
                     {account.ram_quota} bytes owned <br/>                      
          CPU      : {account.total_resources.cpu_weight} ({account.cpu_limit.used}% used) <br/>
          NET      : {account.total_resources.net_weight} {account.net_limit.used}% used) <br/>
    </Typography>
    </Card>
  </div>
  )
}


export default showForm
