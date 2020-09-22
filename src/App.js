import React, { Component } from 'react';
import Web3 from 'web3'; 
import './App.css';

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

async loadBlockchainData() { const web3 = new Web3(Web3.givenProvider || "https://40ad6d0d37fe407197eae4a854deb823.eth.rpc.rivet.cloud/")
const accounts = await web3.eth.getAccounts()
this.setState({ account: accounts[0] })

}

constructor(props) {
  super(props)
  this.state = { account: '' }
}

render() { return (

<div className="container">

   <h1>Hello, Rivet!</h1>

   <p>Your account: {this.state.account}</p>

</div>
       

); } }

export default App;