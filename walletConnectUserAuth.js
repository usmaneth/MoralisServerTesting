/* Code to initialize Moralis & Add Specific Server Details*/
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });


/* Code to authenticate users through WalletConnect */ 
async function loginWC() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        provider: "walletconnect", chainId:56
      })
        .then(function (user) {
          console.log("logged in user through walletconnect:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  
document.getElementById("WC-login").onclick = loginWC;

