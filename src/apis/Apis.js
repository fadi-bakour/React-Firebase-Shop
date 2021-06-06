import { LogOut, Login } from '../actions/authActions';
import ToastService from '../services/ToasterService';
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";
import 'firebase/storage';
import "firebase/firestore";
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUWVSHYlarEmhuzfmkD7okcbkFEygBdCw",
    authDomain: "nero-services.firebaseapp.com",
    projectId: "nero-services",
    storageBucket: "nero-services.appspot.com",
    messagingSenderId: "803785514595",
    appId: "1:803785514595:web:41bdd77a211dc685fda256",
    measurementId: "G-YPM33639SQ",
    databaseURL: "https://nero-services-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();
var storage = firebase.storage();



class Apis {

    signUpAuth = ({ email, password }) => {
        return (dispatch) => {

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    ToastService('Account Created Successfully', true);
                    // Signed in 
                    var user = userCredential.user;
                    firebase.database().ref('users/' + user.uid).set({
                        email: email,
                        fullName: '',
                        address: '',
                        addressTwo: '',
                        photo: ''
                    });
                    dispatch(Login('Token'));

                    // ...
                })
                .catch((error) => {
                    ToastService(error.message);
                });
        };

    }


    loginAuth = ({ email, password }) => {
        return (dispatch) => {

            firebase.auth().signInWithEmailAndPassword(email, password)
                .then(() => {
                    // Signed in
                    ToastService('Logged In Successfully', true);
                    dispatch(Login('Token'));
                    // ...
                })
                .catch((error) => {
                    ToastService(error.message);
                });


        };
    };

    logOutAuth = () => {
        return (dispatch) => {
            firebase.auth().signOut().then(() => {
                ToastService('Logged Out Successfully');
                dispatch(LogOut());
            }).catch((error) => {
                ToastService(error.message);
            });

        };
    };

    userData = (user) => {
        return (async () => {
            return await database
                .ref('/users/' + user.uid)
                .once('value')
                .then(snapshot => {
                    return snapshot.val();
                }).catch((err) => {
                    console.log(err)
                });
        })();
    };

    UpdateUserData = ({ email, fullName, address, addressTwo, userId, history }) => {
        firebase.database().ref('users/' + userId).set({
            email: email,
            fullName: fullName,
            address: address,
            addressTwo: addressTwo
        }, (error) => {
            if (error) {
                console.log(error)
                // The write failed...
            } else {
                ToastService('User Information Updated', true);
                history.push('/')

                // Data saved successfully!

            }
        });
    };

    CreateService = async ({ title, description, photo, history, userId }) => {
        database.ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                if (snapshot.val().fullName === '') {
                    ToastService('Please fill all of your information before posting a service');
                    history.push('/Profile');
                    return;
                }
                return snapshot.val().fullName;
            }).then((fullName) => {
                var postListRef = firebase.database().ref('services/' + userId);
                var newPostRef = postListRef.push();
                var serviceId = newPostRef.key;
                storage.ref('/products/' + userId + '/' + serviceId).put(photo[0], photo[0].type).then(() => {
                    newPostRef.set({
                        owner: fullName,
                        title: title,
                        description: description,
                    }, (error) => {
                        if (error) {
                            console.log(error)
                            // The write failed...
                        } else {
                            ToastService('Service Created Successfully', true);
                            history.push('/MyServices')

                            // Data saved successfully!

                        }
                    });
                })
            }).catch((err) => {
                console.log(err)
            });

    };

    GetUserServices = (user) => {
        return (async () => {
            return await database
                .ref('/services/' + user.uid)
                .once('value')
                .then(snapshot => {
                    var response = snapshot.val();
                    if (response) {
                        response = Object.entries(response);
                        return response;
                    } else {
                        return response;
                    }
                }).catch((err) => {
                    console.log(err)
                });
        })();
    };

    GetAllServices = () => {
        return (async () => {
            return await database
                .ref('/services')
                .once('value')
                .then(snapshot => {
                    var response = snapshot.val();
                    if (response) {
                        response = Object.entries(response);
                        return response;
                    } else {
                        return response;
                    }
                }).catch((err) => {
                    console.log(err)
                });
        })();
    }

    EditService = ({ title, description, photo, history, userId, serviceId }) => {
        database.ref('/users/' + userId)
            .once('value')
            .then(snapshot => {
                return snapshot.val().fullName;
            }).then((res) => {
                if (photo.length != 0) {
                    storage.ref('/products/' + userId + '/' + serviceId).delete().then(() => {
                        storage.ref('/products/' + userId + '/' + serviceId).put(photo[0], photo[0].type).then(() => {
                            firebase.database().ref('services/' + userId + '/' + serviceId).set({
                                owner: res,
                                title: title,
                                description: description,
                            }, (error) => {
                                if (error) {
                                    console.log(error)
                                    // The write failed...
                                } else {
                                    ToastService('Service Updated', true);
                                    history.push('/MyServices')

                                    // Data saved successfully!

                                }
                            });
                        })
                    })
                } else {
                    firebase.database().ref('services/' + userId + '/' + serviceId).set({
                        owner: res,
                        title: title,
                        description: description,
                    }, (error) => {
                        if (error) {
                            console.log(error)
                            // The write failed...
                        } else {
                            ToastService('Service Updated', true);
                            history.push('/MyServices')

                            // Data saved successfully!

                        }
                    });
                }
            }).catch((err) => {
                console.log(err)
            });
    };


    ServiceData = (user, serviceId) => {
        return (async () => {
            return await database
                .ref('/services/' + user.uid + '/' + serviceId)
                .once('value')
                .then(async snapshot => {
                    var response = snapshot.val();
                    var photo = await firebase.storage().ref('products/' + user.uid + '/' + serviceId).getDownloadURL().then((photo) => {
                        return photo
                    });
                    response.photo = photo
                    return response;
                }).catch((err) => {
                    console.log(err)
                });
        })();
    };

    DeleteService = ({ user, serviceId, history }) => {
        firebase.storage().ref('/products/' + user.uid + '/' + serviceId).delete().then(() => {
            database.ref('/services/' + user.uid + '/' + serviceId).remove().then(() => {
                ToastService('Service Deleted', true);
                history.push('/MyServices')
            })
        }).catch((err) => {
            console.log(err)
        })

    }

}

const apis = new Apis(); // TODO: create instance in another place

export default apis;