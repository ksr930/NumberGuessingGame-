import React, {Component} from 'react';

import './App.css';


class App extends Component{
      constructor(props){
        super(props)
        this.state = {
          inputNumber:0,
          inputText:'Welcome to game of Guessing',
          color:'gray',
          lowerRange:0,
          upperRange:100
        }
  
      }


    changeNumber=(e)=>{
 
         this.setState({inputNumber:e.target.value})
    }

    changeColor=(e)=>{
     
      e.preventDefault();

      let ans=Math.floor(Math.random()*this.state.upperRange)
       let difference=Math.abs(ans-this.state.inputNumber)
      if(difference==0)
        {this.setState({color:'MediumSeaGreen'})
      this.setState({inputText:'Correct'})
      this.setState({upperRange:this.upperRange+100})

    }
      else if(difference>=1&&difference<=4)
        {this.setState({color:'Tomato'})

      this.setState({inputText:'Hot'})
    }
      else if(difference>=5&&difference<=15)
      {
        this.setState({color:'orange'})

      this.setState({inputText:'Warm'})
      }
      else{
        this.setState({color:'SlateBlue'})

      this.setState({inputText:'Cold'})
      }
  

      
    
    }




      render(){
        return(

          <div style={{margin:'2%' ,backgroundColor:'#F3E0BE'}}>
              <div class="jumbotron">
              <h1 class="display-4">NUMBER GUESSING GAME!</h1>
              </div>

              <div style={{width:"600px",height:"100px", marginLeft:'400px',marginBottom:'20px' ,backgroundColor:this.state.color}}>
                <h1 style={{textAlign:'center'}}>{this.state.inputText}</h1>
              </div>
              <div style={{marginLeft:'40%'}}>
<form onSubmit={this.changeColor}>
  <div class="form-row align-items-center">
    <div >
      <h2>Enter your Number</h2>
      <input type="number"max={this.state.upperRange} min={this.state.lowerRange} value={this.state.inputNumber} class="form-control mb-2" id="inlineFormInput" placeholder="Enter Number"  onChange={this.changeNumber}/>
    </div>
    </div>

    <button type="submit" style={{marginLeft:'10%'}} class="btn btn-info btn-lg " >Submit</button>
    
</form>
</div>

  


          </div>

          )
      }

}  
     



    
    

export default App;
