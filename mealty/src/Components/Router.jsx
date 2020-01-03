import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import ReceiptIcon from '@material-ui/icons/Receipt';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import Recipe from "../Pages/Recipe";
import CreateRecipe from "../Pages/CreateRecipe";

import App from "../App";

const Routes = [
    {
      path: '/',
      sidebarName: 'Home',
      navbarName: 'Home',
      icon: <HomeIcon/>,
      component: App
    },
    {
      path: '/recipe/5e00b02403d94a35d0445400',
      sidebarName: 'Recipe',
      navbarName: 'Recipe',
      icon: <ReceiptIcon/>,
      component: Recipe
    },
    {
        path: '/new',
        sidebarName: 'Ajouter une recette',
        navbarName: 'Ajouter une recette',
        icon: <AddCircleOutlineIcon/>,
        component: CreateRecipe
      }
  ];

export default Routes;
