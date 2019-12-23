import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

export default function TypeRecipe(props) {
    const [typeRecipe, setTypeRecipe] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/typeRecipe/'+props.id,);
            setTypeRecipe(result.data.typeRecipe);
        };
        if (props.id) 
            fetchData();
    }, [props.id]);

    return (
       <Typography gutterBottom variant="body2">{typeRecipe.name}</Typography>
    )
}