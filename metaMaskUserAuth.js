/* Code to initialize Moralis & Add Specific Server Details*/
const serverUrl = "https://xxxxx/server";
const appId = "YOUR_APP_ID";
Moralis.start({ serverUrl, appId });

/*  Code to authenticate users through MetaMask  */
async function login() {
    let user = Moralis.User.current();
    if (!user) {
      user = await Moralis.authenticate({
        signingMessage: "Log in using MetaMask",
      })
        .then(function (user) {
          console.log("logged in user through metamask:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

document.getElementById("metamask-login").onclick = login;
