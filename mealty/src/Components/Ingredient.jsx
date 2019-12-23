import React from 'react';
import axios from "axios";
import Unity from "./Unity";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles(theme => ({
    list: {
        display: "contents",
    },
}));

export default function Ingredient(props) {
    const classes = useStyles();
    const [ingredient, setIngredient] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/ingredient/'+props.id.ingredient,);
            setIngredient(result.data.ingredient);
        };
        fetchData();
    }, [props.id]);

    return (
        <div className={classes.list}>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="body2">{ingredient.name}</Typography>
                </Grid>
            { props.id.unity ? <Unity id={props.id} /> : undefined }
            </Grid>
        </div>
    )
}