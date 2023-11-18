// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF1g1ifujrdTrDmyrkYbckzHi3i54Lxnw",
  authDomain: "formulario-1-d8beb.firebaseapp.com",
  projectId: "formulario-1-d8beb",
  storageBucket: "formulario-1-d8beb.appspot.com",
  messagingSenderId: "712958838462",
  appId: "1:712958838462:web:8e5ccc73a035d7101780ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (evento)=> {
    evento.preventDefault()
    let correo = evento.target.correo.value 
    let contraseña = evento.target.contraseña.value
    signInWithEmailAndPassword(auth, correo, contraseña)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        //console.log(user);
        //console.log("Inició Sesión");

        window.location.href = "./bienvenido/index.html"
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
}  )