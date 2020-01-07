import React from 'react';
import './CreateRecipe.css';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';

class CreateRecipe extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputsIngredients: [{name:'ingredient 1', description: ""}]
        };
    }

    appendInputIngredient() {
        let newInput = `ingredient ${this.state.inputsIngredients.length+1}`;
        this.setState(prevState => ({inputsIngredients: prevState.inputsIngredients.concat([{name: newInput, description: ""}]) }));
    }

    changeInputIngredient(event, ing) {
        this.setState(state => {
            const inputsIngredients = state.inputsIngredients.map((ingredient, j) => {
                if (j === ing.i) {
                    return {name: ing.name, description: event};
                } else {
                    return ingredient;
                }
            });

            return {inputsIngredients};
        })
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
                        <div>
                            <Typography variant="body2">
                                Ingredients
                            </Typography>
                            {this.state.inputsIngredients.map((ingredient, index) => (
                                <div>
                                    <TextField
                                        id={ingredient.name}
                                        label={ingredient.name}
                                        style={{ margin: 8 }}
                                        placeholder={ingredient.name}
                                        margin="normal"
                                        key={index}
                                        onChange={(event) => this.changeInputIngredient(event.target.value, {name:ingredient.name, i:index})}
                                    />
                                    {/* <TextField 
                                        id={ingredient.name}
                                        label="quantité"
                                        style={{ margin: 8 }}
                                        placeholder={'quantité pour '+ (ingredient.description | index+1)}
                                        margin="normal"
                                        key={999-index}
                                    /> */}
                                </div>
                            ))}
                            <Fab size="small" color="primary" aria-label="add" 
                                onClick={() => this.appendInputIngredient() }>
                                <AddIcon />
                            </Fab>
                        </div>
                </div>
                <Fab size="small" color="primary"
                    onClick={() => this.printInput() }>
                    <NavigationIcon />
                </Fab>
            </div>
        );
    }

    printInput() {
        console.log(this.state.inputsIngredients)
    }

};

export default CreateRecipe;