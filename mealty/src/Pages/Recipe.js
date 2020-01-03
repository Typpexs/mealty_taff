import React from 'react';
import API from "../Config/API";

import Ingredients from "../Components/Ingredients";
import Ustensils from "../Components/Ustensils";
import Country from "../Components/Country";
import Continent from "../Components/Continent";
import TypeRecipe from "../Components/TypeRecipe";
import Steps from "../Components/Steps";
import Date from "../Components/Date";

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
                typeRecipe: data.typeRecipeID,
                steps: data.steps,
                dateCreated: data.dateCreated,
                dateEdited: data.dateEdited
            });
        })
        .catch(function (error){
            console.log("ERROR : ", error)
        })
    }

    render() {
        return(
        <div className="Recipe-body">
            <div>
                <Typography variant="h6" className="Recipe-title">
                    {this.state.title}
                </Typography>
                <Ingredients ingredientsArray={this.state.ingredients}/>
                <Ustensils ustensils={this.state.ustensils} />
                <div>
                    <Continent id={this.state.continent} />
                    <Country id={this.state.country} />
                    <TypeRecipe id={this.state.typeRecipe} />
                </div>
            </div>
            <Steps steps={this.state.steps} />
            <Date created={this.state.dateCreated}
                edited={this.state.dateEdited} />
        </div>
        )
    }
}

export default Recipe;