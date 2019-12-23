import React from 'react';
import axios from "axios";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


export default function Unity(props) {
    const [unity, setUnity] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/unity/'+props.id.unity,);
            setUnity(result.data.unity.name);
        };
        fetchData();
    }, [props.id]);
    return (
        <div>
            <Grid container alignItems="center">
                <Grid item xs>
                    <Typography gutterBottom variant="body2">{props.id.number}</Typography>
                </Grid>
                <Grid item>
                    <Typography gutterBottom variant="body2">{unity}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}