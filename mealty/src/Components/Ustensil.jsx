import React from 'react';
import axios from "axios";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Unity from './Unity';

const useStyles = makeStyles(theme => ({
    list: {
        display: "contents",
    },
}));

export default function Ustensil(props) {
    const classes = useStyles();
    const [ustensil, setUstensil] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/ustensil/'+props.id,);
            setUstensil(result.data.ustensil);
        };
        fetchData();
    }, [props.id]);

    return (
        <div className={classes.list}>
            <Grid item xs>
                <Typography gutterBottom variant="body2">{ustensil.name}</Typography>
            </Grid>
            { ustensil.capacity ? <Unity id={{number: ustensil.capacity, unity: ustensil.unityID}} /> : undefined }
        </div>
    )
}