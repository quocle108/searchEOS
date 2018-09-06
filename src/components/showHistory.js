/*eslint-disable no-unused-vars */
import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const showHistory = props =>{
  const{history } = props;

  return(
    <div>


    <hr />
    <Card > 
    {/* <Typography color="textSecondary" variant="display1" style={{ margin: 100 }}>   

    </Typography> */}
    <pre> {JSON.stringify(history, null, 2)}</pre>
    </Card>
  </div>
  )
}



export default showHistory
