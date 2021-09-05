import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAg3mqtq971pRrPggka9WxNuYbU-YHhpL4",
  authDomain: "project-react-last-course.firebaseapp.com",
  databaseURL: "https://project-react-last-course-default-rtdb.firebaseio.com",
  projectId: "project-react-last-course",
  storageBucket: "project-react-last-course.appspot.com",
  messagingSenderId: "379669939536",
  appId: "1:379669939536:web:f2170402435ab907d59855",
  measurementId: "G-X2P78QGV7N"
}
const firebaseData = firebase.initializeApp(config).firestore();

export default firebaseData;