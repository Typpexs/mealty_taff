import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Ustensil from './Ustensil';

const useStyles = makeStyles(theme => ({
    grid: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: 300
      },
    title: {
        margin: theme.spacing(4, 0, 2),
      },
    list: {
        paddingTop: "5px",
        paddingBottom: 0,
    }
}))

export default function Ustensils(props) {
    const classes = useStyles();
    const ustensils = props.ustensils

    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} md={2}>
                    <Typography variant="h6" className={classes.title}>
                        Ustensils
                    </Typography>
                    <div className={classes.grid}>
                        {ustensils.map((text, index) => (
                            <List dense={true} className={classes.list} key={index}>
                                <ListItem key={index} className={classes.list}>
                                    <Ustensil id={text} />
                                </ListItem>
                            </List>
                        ))
                        }
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}