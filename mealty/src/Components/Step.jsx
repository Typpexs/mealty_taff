import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
      maxWidth: 300
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    list: {
        paddingTop: "5px",
        paddingBottom: 0,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
  }));

export default function Step(props) {
    const classes = useStyles();
    const [step, setStep] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/step/'+props.id,);
            setStep(result.data.step);
        };
        fetchData();
    }, [props.id])

    return(
        <div>
            <Grid item>
                <Typography variant="h6" className={classes.title}>
                    {step.order}
                </Typography>
                <Paper className={classes.paper}>
                    {step.description}
                </Paper>
            </Grid>
        </div>
    );
};