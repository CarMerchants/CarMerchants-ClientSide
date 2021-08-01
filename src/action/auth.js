import ContactUsPage from "../components/ContactUsPage";
import { firebase,googleAuthProvider } from "../firebase/firebase"


export const SetBtnInfo = () => {
    firebase.auth().onAuthStateChanged((user) => {
        if(user){
            document.getElementById("log__btn").innerHTML = "Logout";
        }else{
            document.getElementById("log__btn").innerHTML = "Login";
        }
    })
};

export const processLoginLogout = () => {
    const val = document.getElementById("log__btn").innerHTML;
    console.log(val);
    if(val == "Login"){
        return firebase.auth().signInWithPopup(googleAuthProvider).then(() => {
            document.getElementById("log__btn").innerHTML = "Logout";
        });
    }else{
        document.getElementById("log__btn").innerHTML = "Login";
        return firebase.auth().signOut();
    }
};