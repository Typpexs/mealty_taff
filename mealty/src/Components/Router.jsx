import React from 'react';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import Recipe from "../Pages/Recipe";
import App from "../App";
import { MenuList, MenuItem } from '@material-ui/core';

const Routes = [
    {
      path: '/',
      sidebarName: 'Home',
      navbarName: 'Home',
      icon: <MailIcon/>,
      component: App
    },
    {
      path: '/recipe/5df271b67f9c262d506c338d',
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
// export default function Router() {
//     return(
//         <List>
//             <BrowserRouter>
//                 {Routes.map((text, index) => (
//                     <Link to={text.path} >
//                         <ListItem button key={index}>
//                             <ListItemIcon>{text.icon}</ListItemIcon>
//                             <ListItemText primary={text.sidebarName} />
//                         </ListItem>
//                     </Link>
//                 ))}
//             </BrowserRouter>
//         </List>
//     );
// }