import React from 'react';
import API from "../Config/API";
import './CreateRecipe.css';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

class CreateRecipe extends React.Component {

    constructor(props) {
        console.log("URL : ", process.env.REACT_APP_BACKEND_URL)
        super(props);

        this.state = {
            inputsIngredients: [{name:'ingredient 1', description: "", quantity:0, unity:""}],
            unities: [],
            inputsUstensils: [{name: 'ustensil 1', description: "", capacity: 0, unity: ""}]
        };

    }

    componentDidMount() {
        this.getUnities();
    }

    appendInputIngredient() {
        let newInput = `ingredient ${this.state.inputsIngredients.length+1}`;
        this.setState(prevState => ({inputsIngredients: prevState.inputsIngredients.concat([{name: newInput, description: "", quantity:0, unity:""}]) }));
    }

    appendInputUstensil() {
        let newInput = `ustensil ${this.state.inputsUstensils.length+1}`;
        this.setState(prevState => ({inputsUstensils: prevState.inputsUstensils.concat([{name: newInput, description: "", capacity:0, unity: "" }])}))
    }

    changeInputIngredient(index, ing) {
        this.setState(state => {
            const inputsIngredients = state.inputsIngredients.map((ingredient, j) => {
                if (j === index) {
                    return ing;
                } else {
                    return ingredient;
                }
            });

            return {inputsIngredients};
        })
    }

    changeInputUstensil(index, ing) {
        this.setState(state => {
            const inputsUstensils = state.inputsUstensils.map((ingredient, j) => {
                if (j === index) {
                    return ing;
                } else {
                    return ingredient;
                }
            });

            return {inputsUstensils};
        })
    }

    getUnities() {
        API.get('/all/unities/')
        .then((result) => {
            this.setState({ unities: result.data.unities })
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
                                <div key={index}>
                                    <TextField
                                        id={ingredient.name}
                                        label={ingredient.name}
                                        style={{ margin: 8 }}
                                        placeholder={ingredient.name}
                                        margin="normal"
                                        onChange={(event) => this.changeInputIngredient(index, {name:ingredient.name, description: event.target.value, quantity: ingredient.quanity, unity: ingredient.unity})}
                                    />
                                    <TextField 
                                        id={"quantity " + ingredient.name}
                                        label="quantité"
                                        style={{ margin: 8 }}
                                        placeholder={'quantité pour '+ (ingredient.description ? ingredient.description : index+1)}
                                        margin="normal"
                                        type="number"
                                        onChange={(event) => this.changeInputIngredient(index, {name:ingredient.name, description:ingredient.description, quantity: event.target.value, unity: ingredient.unity})}                                    
                                    />

                                    <FormControl className="CreateRecipe-formControl">
                                        <InputLabel id={ "input-select-label" + ingredient.name }>Unité</InputLabel>
                                        <Select
                                        id={ "select " + ingredient.name }
                                        value={ ingredient.unity }
                                        onChange={(event) => this.changeInputIngredient(index, {name:ingredient.name, description:ingredient.description, quantity: ingredient.quanity, unity: event.target.value})}
                                        >
                                            {this.state.unities.map((unity, index) => (
                                                <MenuItem value={unity.name ? unity.name : '' } key={index}>{unity.name}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </div>
                            ))}
                            <Fab size="small" color="primary" aria-label="add" 
                                onClick={() => this.appendInputIngredient() }>
                                <AddIcon />
                            </Fab>
                        </div>
                        <div>
                            <Typography variant="body2">
                                Ustensils
                            </Typography>
                            {this.state.inputsUstensils.map((ustensil, index) => (
                                <TextField
                                id={ustensil.name}
                                label={ustensil.name}
                                style={{ margin: 8 }}
                                placeholder={ustensil.name}
                                margin="normal"
                                onChange={(event) => this.changeInputUstensil(index, {name:ustensil.name, description: event.target.value, capacity: ustensil.capacity, unity: ustensil.unity})}
                            />
                            ))}
                            <Fab size="small" color="primary" aria-label="add" 
                                onClick={() => this.appendInputUstensil() }>
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
        console.log(this.state.inputsUstensils)
    }

};

export default CreateRecipe;