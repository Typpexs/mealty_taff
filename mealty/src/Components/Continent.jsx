import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

export default function Continent(props) {
    const [continent, setContinent] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/continent/'+props.id,);
            setContinent(result.data.continent);
        };
        if (props.id) 
            fetchData();
    }, [props.id]);

    return (
       <Typography gutterBottom variant="body2">{continent.name}</Typography>
    )
}