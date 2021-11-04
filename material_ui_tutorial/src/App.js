import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { makeStyles, ThemeProvider, createTheme } from '@material-ui/core';
import { green, orange } from '@material-ui/core/colors';
import 'fontsource-roboto';

import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B, #FF8E53)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px',
  },
});

const theme = createTheme({
  typography: {
    h2: {
      fontSize: 36,
      marginBottom: 15,
    },
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    },
  },
});

function ButtonStyed() {
  const classes = useStyles();

  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckBoxExample() {
  const [checked, setChecked] = React.useState(true);
  return (
    <FormControlLabel
      control={
        <CheckBox
          checked={checked}
          icon={<SaveIcon />}
          checkedIcon={<SaveIcon />}
          onChange={(e) => setChecked(e.target.checked)}
          inputProps={{
            'aria-label': 'secondry checkbox',
          }}
        />
      }
      label="Testing Checkbox"
    />
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Typography variant="h2" component="div">
            Welcome to MUI
          </Typography>
          <Typography variant="subtitle1">
            Learn how to use Material UI
          </Typography>
          <ButtonStyed />
          <TextField
            variant="filled"
            color="secondary"
            type="User Email"
            label="The Time"
            placeholder="email@test.com"
          />
          <CheckBoxExample />
          <ButtonGroup variant="contained" color="primary">
            <Button
              startIcon={<SaveIcon />}
              onClick={() => alert('Hello')}
              size="large"
              style={{
                fontSize: '12px',
              }}
            >
              Save
            </Button>
            <Button
              startIcon={<DeleteIcon />}
              onClick={() => alert('Hello')}
              size="large"
              style={{
                fontSize: '12px',
              }}
            >
              Discard
            </Button>
          </ButtonGroup>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
