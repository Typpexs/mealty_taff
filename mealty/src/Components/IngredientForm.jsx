import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

import NavigationIcon from '@material-ui/icons/Navigation';


class IngredientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [{name:'ingredient 1', description: ""}]
        };
    }

    render() {
        return(
            <div>
                <Typography variant="body2">
                    Ingredients
                </Typography>
                {this.state.inputs.map((ingredient, index) => (
                    <TextField
                        id={ingredient.name}
                        label={ingredient.name}
                        style={{ margin: 8 }}
                        placeholder={ingredient.name}
                        margin="normal"
                        key={index}
                        onChange={(event) => this.changeInput(event.target.value, {name:ingredient.name, i:index})}
                        InputLabelProps={{
                            shrink: true,
                          }}
                    />
                ))}
                <Fab size="small" color="primary" aria-label="add" 
                    onClick={() => this.appendInput() }>
                    <AddIcon />
                </Fab>
                <Fab size="small" color="primary"
                    onClick={() => this.printInput() }>
                    <NavigationIcon />
                </Fab>
            </div>            
        );
    }

    appendInput() {
        let newInput = `ingredient ${this.state.inputs.length+1}`;
        this.setState(prevState => ({inputs: prevState.inputs.concat([{name: newInput, description: ""}]) }));
    }

    changeInput(event, ing) {
        this.setState(state => {
            const inputs = state.inputs.map((ingredient, j) => {
                if (j === ing.i) {
                    return {name: ing.name, description: event};
                } else {
                    return ingredient;
                }
            });

            return {inputs};
        })
    }

    printInput() {
        console.log(this.state.inputs)
    }
};

export default IngredientForm;