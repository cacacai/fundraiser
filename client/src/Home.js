import React, { useEffect } from "react";
import FundraiserCard from './FundraiserCard';
const Home = () => {
  useEffect(() => {}, []);
  
   const displayFundraisers = async () => {
    const constractFactory = this.state.contract
    const funds = await constractFactory.methods.fundraisers(5,0).call()
        return funds.map( (fundraiser) => {
            return (
               <FundraiserCard fundraiser={fundraiser} key={fundraiser}/>
            );
        });
    }
    
  return (
      <div className="main-container">
        {displayFundraisers()}
      </div>
   ) }

export default Home;