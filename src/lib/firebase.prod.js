import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



//we need to seed the database

// we need a config here

const config = {
    apiKey: "AIzaSyCMlwihYXGN2Dk3WTWLHARZDz7PoOxbI_s",
    authDomain: "netflix-2838f.firebaseapp.com",
    projectId: "netflix-2838f",
    storageBucket: "netflix-2838f.appspot.com",
    messagingSenderId: "77687571786",
    appId: "1:77687571786:web:ff1555585c735a6083edb3"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

// Summary on how to use firebase on a web application

// 1. Open firebase on your web browser and go to console
// 2. Go to Firestore database and create a new database
// 3. After starting the database, we need to register the app and pick the config
// 4. This can be found on the Project overview/project settings and click on the icon base on the type of application
// 5. Pick the config and fill it as above 
// 6. create a seed file and call it only once on the firebase production file or here and then export it
// 7. import the firebase on the index.js file and make sure the seeding is intact then refresh the page
// 8. refresh the database and your seeding should work. move on to continue coding afterward. 