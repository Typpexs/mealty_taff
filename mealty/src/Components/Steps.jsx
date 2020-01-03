import React from 'react';
import Step from './Step';
import Grid from '@material-ui/core/Grid';


export default function Steps(props) {
    const steps = props.steps

    return(
        <div>
            <Grid 
                container 
                spacing={2} 
                direction="column"
                justify="center"
                alignItems="stretch"
                >
                {steps.map((stepID, index) => (
                    <Step id={stepID} key={index}/>
                ))}
            </Grid>
        </div>
    );
};