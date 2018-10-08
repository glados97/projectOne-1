import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAdLGWXdswQlUxVS5UXQXD6UrXzl9N4mXg",
    authDomain: "projectsearch-e7575.firebaseapp.com",
    databaseURL: "https://projectsearch-e7575.firebaseio.com",
    projectId: "projectsearch-e7575",
    storageBucket: "projectsearch-e7575.appspot.com",
    messagingSenderId: "309866393253"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;
