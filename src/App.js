import * as React from "react";
import { Admin, Login, Resource} from 'react-admin';
import { UserList, UserEdit, UserCreate } from './users';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import pink from '@material-ui/core/colors/pink';
import red from '@material-ui/core/colors/red';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: pink,
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiButton: { // override the styles of all instances of this component
      root: { // Name of the rule
        color: 'white', // Some CSS
      },
    },
  },
});
const MyLoginPage = () => (
  <Login
    // A random image that changes everyday
    backgroundImage="https://source.unsplash.com/random/1600x900"
  />
);

const App = () => (
  <Admin theme={theme} loginPage={MyLoginPage} dashboard={Dashboard} authProvider={authProvider} dataProvider= { dataProvider } >
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} icon={SupervisorAccountIcon}/>
  </Admin >
      );
export default App;