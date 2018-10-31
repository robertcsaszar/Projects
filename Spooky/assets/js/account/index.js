//////////////////////////////////////////////
///////////// Sign In function ///////////////
//////////////////////////////////////////////

function toggleSignIn() {
  if (firebase.auth().currentUser) {
    firebase.auth().signOut();
  } else {
    var loginModal = $("#login");
    var email = $('#inputEmail').val();
    var password = $('#inputPassword').val();
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
    });
    loginModal.modal("hide");
  }
}

//////////////////////////////////////////////
///////////// Sign Up function ///////////////
//////////////////////////////////////////////

function handleSignUp() {
  var registerModal = $("#register");
  var name = $('#regName').val();
  var email = $('#regEmail').val();
  var password = $('#regPassword').val();
  var dracula = $("#dracula");
  var frankenstein = $("#frankenstein");
  var witch = $("#witch");
  
  if ($(dracula).is(':checked')) {
    localStorage["class"] = "Dracula";
  } else if ($(frankenstein).is(':checked')) {
    localStorage["class"] = "Frankenstein";
  } else if ($(witch).is(':checked')) {
    localStorage["class"] = "Witch";
  }
  if (email.length < 4) {
    alert('Please enter an email address.');
    return;
  }
  if (password.length < 4) {
    alert('Please enter a password.');
    return;
  }
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      alert(errorMessage);
    }
  });
  registerModal.modal("hide");
}

//////////////////////////////////////////////
///////////// Sign Out function //////////////
//////////////////////////////////////////////

function signOut() {
  var userId = localStorage["account.uid"];
  var characters = firebase.database().ref('characters/' + userId);
  var name = $(".name");
  var charClass = $(".class");
  var status = $(".status");
  var regButton = $("#registerButton");
  var loginButton = $("#loginButton");
  var logoutButton = $("#logout-btn");
  var userInfo = $("#userOnline");
  var userInfoActive = $("#userOnline.active")
  var notification = $("#notif");
  var messages = $("#mess")
  var createChar = $("#createCharBtn")
  firebase.auth().signOut().then(function() {
    userInfo.hide();
    userInfoActive.hide();
    regButton.show();
    loginButton.show();
    logoutButton.hide();
    notification.hide();
    messages.hide();
    createChar.hide()
    characters.update({
      online: 0
    });
    localStorage.clear();
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode == 'auth/invalid-email') {
      alert(errorMessage);
    } else if (errorCode == 'auth/user-not-found') {
      alert(errorMessage);
    }
    console.log(error);
  });
  location.reload()
}

//////////////////////////////////////////////
////////// Retrieve Acc function /////////////
//////////////////////////////////////////////

function initApp() {
  firebase.auth().onAuthStateChanged(function(user) {
    var userId = firebase.auth().currentUser.uid;
    var characters = firebase.database().ref('characters/' + userId);
    var dracula = localStorage["class"];
    var frankenstein = localStorage["class"];
    var witch = localStorage["class"];
    var regButton = $("#registerButton");
    var loginButton = $("#loginButton");
    var logoutButton = $("#logout-btn");
    var userInfo = $("#userOnline");
    var userInfoActive = $("#userOnline.active")
    var notification = $("#notif");
    var messages = $("#mess")
    var createChar = $("#createCharBtn")

    if (user) {
      regButton.hide();
      loginButton.hide();
      logoutButton.show();
      notification.show();
      messages.show();
      characters.on('value', function(snapshot) {
        localStorage["class"] = snapshot.val().class;
        localStorage["account.uid"] = snapshot.val().accountId;
        if (!snapshot.val()) {
          createChar.show();
        } else if (snapshot.val().accountId == userId) {
          renderCharacters(snapshot.val());
          characters.update({
            power: Math.round(Math.floor(snapshot.val().int * 0.5 + snapshot.val().str * 0.5 + snapshot.val().dex * 0.5) * 0.6 + snapshot.val().armor)
          });
        }
      })
    } else {
      logoutButton.hide();
      userInfo.hide();
      userInfoActive.hide();
      regButton.show();
      loginButton.show();
      notification.hide();
      messages.hide();
    }
  });
  document.getElementById('loginBtn').addEventListener('click', toggleSignIn, false);
  document.getElementById('regBtn').addEventListener('click', handleSignUp, false);
  document.getElementById('logout-btn').addEventListener('click', signOut, true);
}

window.onload = function() {
  initApp();
};