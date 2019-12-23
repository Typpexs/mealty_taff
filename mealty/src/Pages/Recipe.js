import React from 'react';
import API from "../Config/API";

import Ingredients from "../Components/Ingredients";
import Ustensils from "../Components/Ustensils";
import Country from "../Components/Country";
import Continent from "../Components/Continent";
import TypeRecipe from "../Components/TypeRecipe";

import Typography from '@material-ui/core/Typography';
import './Recipe.css'

class Recipe extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          recipe: {},
          title: "",
          ingredients: [],
          ustensils: [],
          typeRecipe: "",
          continent: "",
          country: "",
          numberOfPersons: 0,
          timePreparation: 0,
          timeCooking: 0,
          votes: 0,
          steps: [],
          dateCreated: "",
          dateEdited: ""
        };
      }

    componentDidMount() {
        API.get('/recipe/5e00b02403d94a35d0445400')
        .then((recipe) => {
            const data = recipe.data.recipe
            this.setState({recipe: data, 
                ingredients: data.ingredients, 
                ustensils: data.ustensils,
                continent: data.continentID,
                country: data.countryID,
                typeRecipe: data.typeRecipeID
            });
        })
        .catch(function (error){
            console.log("ERROR : ", error)
        })
    }

    render() {
        const recipe = this.state.recipe
        const ingredients = this.state.ingredients
        const ustensils = this.state.ustensils
        const continent = this.state.continent
        const country = this.state.country
        const typeRecipe = this.state.typeRecipe
        return(
        <div className="Recipe-body">
            <div>
                <Typography variant="h6" className="Recipe-title">
                    {recipe.title}
                </Typography>
                <Ingredients ingredientsArray={ingredients}/>
                <Ustensils ustensils={ustensils} />
                <div>
                    <Continent id={continent} />
                    <Country id={country} />
                    <TypeRecipe id={typeRecipe} />
                </div>
            </div>
        </div>
        )
    }
}

export default Recipe;