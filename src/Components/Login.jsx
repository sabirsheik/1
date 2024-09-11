import React from "react";

const Login = (props) => {
   const connectWallet = async () => {
      if (window.ethereum) {
         const accounts = await window.ethereum.request({ method: 'eth_accounts' });
         if (accounts.length === 0) {
            // Show alert if the user is not logged in to MetaMask
            alert("Please login to your MetaMask wallet.  Add Extension in Chrome Browser");
         } else {
            // If already logged in, connect the wallet
            props.connectWallet();
         }
      } else {
         alert('MetaMask is not installed. Please install MetaMask!');
      }
   };

   return (
      <section className="login-section">
         <div className="login-container">
            <div className="container-login">
               <h1 className="welcome-message">Welcome to <span className="bc">BlockChain</span> Voting Application</h1>
               <button className="login-button" onClick={connectWallet}>Login Metamask</button>
            </div>
         </div>
      </section>
   );
}

export default Login;
