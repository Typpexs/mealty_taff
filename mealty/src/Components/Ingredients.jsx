import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

export default function Ingredients(props) {
    const classes = useStyles();
    const ingredients = props.ingredientsArray
    return(
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} >
                    <Typography variant="h6" className={classes.title}>
                        Text only
                    </Typography>
                    <div className={classes.demo}>
                        {ingredients.map((text, index) => (
                            <List dense={false}>
                                <ListItem key={index}>
                                    <ListItemText primary={text} />
                                </ListItem>
                            </List>
                        ))}
                        
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};