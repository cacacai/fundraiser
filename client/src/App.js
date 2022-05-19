import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom"
import NewFundraiser from './NewFundraiser'
import Receipts from './Receipts'
import Home from './Home'
import FactoryContract from "./contracts/FundraiserFactory.json";
import getWeb3 from './utils/getWeb3';
import "./App.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

 const App = () => {
   const useStyles = makeStyles({
      root: {
        flexGrow: 1,
      },
    });
   const classes = useStyles();
   
   const setState = useState({web3: null, accounts: null, contract: null});
   
   useEffect(() => {
     const init = async() => {
       try {
         const web3 = await getWeb3();
         const accounts = await web3.eth.getAccounts();
         const networkId = await web3.eth.net.getId();
         const deployedNetwork = FactoryContract.networks[networkId];
         const instance = new web3.eth.Contract(
           FactoryContract.abi,
           deployedNetwork && deployedNetwork.address,
         );
         setState({web3, accounts, contract: instance});
         } catch(error) {
            alert(
              `Failed to load web3, accounts, or contract.
              Check console for details.`,
            )
            console.error(error);
          }
        }
        init();
      });
   
   
      return(
       <Router>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Toolbar>
                <Typography variant="h6" color="inherit">
                  <NavLink className={classes.navLink} to="/">Home</NavLink>
                  <NavLink className={classes.navLink} to="/new">New</NavLink>
                </Typography>
              </Toolbar>
            </AppBar>
            <Route path="/" exact component={Home} />
            <Route path="/new/" component={NewFundraiser} />
            <Route path="/receipts" component={Receipts} />
          </div>
      </Router>
 ); }

export default App;