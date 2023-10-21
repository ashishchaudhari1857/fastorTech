import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const config = {
    apiKey: "AIzaSyCXI5oUvewIHY54Fe3QY0ZNDiF3cpE7438",
    authDomain: "fs-tech-960f5.firebaseapp.com",
     projectId: "fs-tech-960f5",
    storageBucket: "fs-tech-960f5.appspot.com",
    messagingSenderId: "787926110188",
    appId: "1:787926110188:web:1b8b22cf877f34d418bac9"
};

const app = initializeApp(config);
const auth = getAuth(app);

export { auth };
