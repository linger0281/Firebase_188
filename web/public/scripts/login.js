// Using a popup.
var provider = new firebase.auth.GoogleAuthProvider();
console.log("Hello");
provider.addScope('profile');
provider.addScope('email');

    firebase.auth().signInWithPopup(provider).then(function(result) {
     // This gives you a Google Access Token.
     var token = result.credential.accessToken;
     // The signed-in user info.
     var user = result.user;
     if(history.length==0)
      window.location.href = "index.html";
    else 
      history.go(-1);
    })
 

  //  firebase.auth().getRedirectResult().then(function(result) {
  //   if (result.credential) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     var token = result.credential.accessToken;
  //     // ...
  //   }
  //   // The signed-in user info.
  //   var user = result.user;
  //   window.location.replace = "index.html";
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });
