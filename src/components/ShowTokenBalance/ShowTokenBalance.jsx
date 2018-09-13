/*eslint-disable no-unused-vars */
import React from 'react'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const ShowTokenBalace = props => {
    const { tokenBalance } = props;

    return (
        <div>
            <hr />
            <Card >
                <pre> {JSON.stringify(tokenBalance, null, 2)}</pre>
            </Card>
        </div>
    )
}



export default ShowTokenBalace