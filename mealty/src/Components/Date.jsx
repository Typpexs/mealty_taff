import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    div: {
        paddingTop: "4%",
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

export default function Date(props) {
    const classes = useStyles();

    const created = props.created;

    const edited = props.edited;

    return (
        <div className={classes.div}>
            <Grid container spacing={2}>
                <Grid item xs={2} md={2}>
                    <Paper className={classes.paper}>
                        <Typography gutterBottom variant="body2">Created on {created}</Typography>
                        <Typography gutterBottom variant="body2">Edited on {edited}</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};