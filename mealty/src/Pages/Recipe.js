import React from 'react';
import API from "../Config/API";
import Ingredients from "../Components/Ingredients";
import './Recipe.css'

class Recipe extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          isLoading: true,
          recipe: {},
          title: "",
          ingredients: ["", ""],
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
        API.get('/recipe/5df271b67f9c262d506c338d')
        .then((recipe) => {
            const data = recipe.data.recipe
            this.setState({recipe: data, ingredients: data.ingredients});
        })
        .catch(function (error){
            console.log("ERROR : ", error)
        })
    }

    render() {
        const recipe = this.state.recipe
        const ingredients = this.state.ingredients
        return(
        <div className="Recipe-body">
                {/* <header className="App-header"> */}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <div>
                    {recipe.title}
                    <Ingredients ingredientsArray={ingredients}/>
                </div>
            {/* </header> */}
        </div>
        )
    }
}

export default Recipe;