import React, { useState } from 'react';
import { Button, TextField, FormControl, InputLabel, Select, MenuItem, Box, Typography, Alert } from '@mui/material';
import calcBmi from 'bmi-calc';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './style.css';
import ScrollBar from 'react-perfect-scrollbar';
import { MDBBtn } from 'mdb-react-ui-kit';

const BMICalc= () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [system, setSystem] = useState('metric');
  const [bmi, setBmi] = useState(null);

  const handleCalculate = () => {
    if (weight && height) {
      const isImperial = system === 'imperial';
      const result = calcBmi(Number(weight), Number(height), isImperial);
      setBmi(result);
    }
  };

  return (
    <ScrollBar style={{maxHeight:"100vh"}}>
    {/* <Box className="bmi-calc-container">
      <Typography variant="h4" style={{fontWeight:"bolder",fontSize:'x-large'}} gutterBottom textAlign="center">
        BMI Calculator
      </Typography>
      <FormControl  style={{textAlign:"start"}}  fullWidth margin="normal">
        <InputLabel>Measurement System</InputLabel>
        <Select variant='standard' size='small' style={{textAlign:"start"}} value={system} onChange={(e) => setSystem(e.target.value)}>
          <MenuItem value="metric">Metric (kg, m)</MenuItem>
          <MenuItem value="imperial">Imperial (lbs, in)</MenuItem>
        </Select>
      </FormControl>
      <TextField
      variant='standard' 
      size='small'
        label={`Weight (${system === 'metric' ? 'kg' : 'lbs'})`}
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
      
      variant='standard' 
      size='small'
        label={`Height (${system === 'metric' ? 'm' : 'in'})`}
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        fullWidth
        margin="normal"
      />
      <MDBBtn rounded color='dark' style={{width:"100%"}} onClick={handleCalculate} fullWidth>
        Calculate BMI
      </MDBBtn>
      {bmi && (
      <Alert variant='outlined' style={{marginTop:"15px"}} ><Box mt={2} textAlign="center">
          <b style={{fontSize:'large'}}>MBI = {bmi.value.toFixed(2)}</b>
          <Typography variant="subtitle1">{bmi.name}</Typography>
        </Box>
        </Alert>
      )}
    </Box> */}
    <iframe style={{width:"100%",height:"100%"}}  src='https://extras.bhf.org.uk/patientinfo/bmi-v1.01/app/index.html'>

    </iframe>
    </ScrollBar>
  );
};

export default BMICalc;
