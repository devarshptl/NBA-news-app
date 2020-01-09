import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDaHXFR4qTc0QkRAg2wfo5VCMAMOoFE30s",
    authDomain: "nba-app-full.firebaseapp.com",
    databaseURL: "https://nba-app-full.firebaseio.com",
    projectId: "nba-app-full",
    storageBucket: "nba-app-full.appspot.com",
    messagingSenderId: "662223718659",
    appId: "1:662223718659:web:5066e2f7dee941218d4136",
    measurementId: "G-Z3QESLWYC7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');


  const firebaseLooper = (snapshot) => {
        const data = [];
        snapshot.forEach((childSnapshot)=>{
            data.push({
                ...childSnapshot.val(),
                id:childSnapshot.key
            })
        });
        return data;
  }
  export {
      firebase,
      firebaseDB,
      firebaseArticles,
      firebaseVideos,
      firebaseTeams,
      firebaseLooper
  }