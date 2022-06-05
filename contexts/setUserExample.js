 var user = firebase.auth().currentUser;user.updateProfile({
  qdisplayName: "Jane Q. User,
  photoURL: "https://example.com/jane-q-user/profile.jpg"})
  .then(function() { 
   // Update successful.
  })
   .catch(function(error) {  // An error happened.
  });