import React from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";
import DisplayZip from './DisplayZip'
import Home from './Home'


const Form = (props) => {
    return (

        <form onSubmit={this.changeTemperature}>
        <div
          style={{
            padding: "100px",
            width: "40%",
            margin: "0 auto",
            border: "3px solid black"
          }}
        >
           <h1>House Finder</h1> 
          <InputLabel id="label">
            Temperature
            <br />
          </InputLabel>
          <Input placeholder="Input temperature" type="number" onChange={this.changeTemperature}/>
          <Select labelId="label" id="select" value={this.state.unit} onChange= {this.changeUnit}
          style={{}}>
            <MenuItem value="F">Fahrenheit</MenuItem>
            <MenuItem value="C">Celsius</MenuItem>
          </Select>
          <Button onClick={this.changeDisplay}>Submit</Button>
        </div>
        
        
      </form>
     
    )

}

export default Form;