import React from 'react';
import Typography from '@material-ui/core/Typography';
import axios from "axios";

export default function Country(props) {
    const [country, setCountry] = React.useState("");
    React.useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://localhost:8080/recipe/country/'+props.id,);
            setCountry(result.data.country);
        };
        if (props.id)
            fetchData();
    }, [props.id]);

    return (
        <Typography gutterBottom variant="body2">{country.name}</Typography>
    )
}