import * as React from 'react';
import logo from './logo.svg';
import './App.css';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import CheckBox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';

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
    <div className="App">
      <header className="App-header">
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
  );
}

export default App;
