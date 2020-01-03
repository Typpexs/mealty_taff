import React from 'react';
import './CreateRecipe.css';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class CreateRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="CreateRecipe-body">
                <Typography variant="h6" className="CreateRecipe-title">
                    Créer une nouvelle recette !
                </Typography>
                <div className="CreateRecipe-root">
                        <TextField
                            id="title"
                            label="Titre"
                            style={{ margin: 8 }}
                            placeholder="Ecrivez ici le titre de votre recette :)"
                            helperText="Le Titre de la recette"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            required
                        />
                </div>
            </div>
        );
    }

};

export default CreateRecipe;