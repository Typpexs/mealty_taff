import React from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Recipe from "../Pages/Recipe";
import App from "../App";

const Routes = [
    {
      path: '/',
      sidebarName: 'Home',
      navbarName: 'Home',
      icon: <MailIcon/>,
      component: App
    },
    {
      path: '/recipe/5e00b02403d94a35d0445400',
      sidebarName: 'Recipe',
      navbarName: 'Recipe',
      icon: <InboxIcon/>,
      component: Recipe
    },
    {
        path: '/TEST',
        sidebarName: 'TEST',
        navbarName: 'TEST',
        icon: <InboxIcon/>,
        component: Recipe
      }
  ];

export default Routes;
