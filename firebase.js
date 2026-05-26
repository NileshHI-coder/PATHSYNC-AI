
const firebaseConfig = {
  apiKey: "AIzaSyDiuawUptKWJlFqN6f7qFoIpDA98xOQiKM",
  authDomain: "pathsync-0-ai.firebaseapp.com",
  projectId: "pathsync-0-ai",
  storageBucket: "pathsync-0-ai.firebasestorage.app",
  messagingSenderId: "571285082672",
  appId: "1:571285082672:web:3965cb590a63b707da13f5",
  measurementId: "G-WS4E0QX8HP"
};

/// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore
const db = firebase.firestore();

// Auth
const auth = firebase.auth();

// Enable Firestore Offline Persistence
db.enablePersistence({ synchronizeTabs: true })
  .catch((err) => {

      if (err.code == 'failed-precondition') {

          console.log('Persistence failed: Multiple tabs open');

      } else if (err.code == 'unsupported-browser') {

          console.log('Persistence not supported in this browser');
      }
  });