import React from "react";
import {
  Button,
  Input,
  TextField,
  Select,
  InputLabel,
  MenuItem
} from "@material-ui/core";

class Home extends React.Component {
    state = {
        temperature: 1

    }

    changeTemperature = e => {
        console.log(e.target.value);
        this.setState({
            temperature: e.target.value
            
            
        })
        console.log(this.state.temperature);
        
      }

  render() {
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
          <Select labelId="label" id="select" value="F" 
          style={{}}>
            <MenuItem value="F">Fahrenheit</MenuItem>
            <MenuItem value="C">Celsius</MenuItem>
          </Select>
          <Button onClick={this.changeTemperature}>Submit</Button>
        </div>
        
      </form>
    );
  }
}

export default Home;
