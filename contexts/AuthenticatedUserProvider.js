import React, { useState, createContext, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../config/firebase';


export const AuthenticatedUserContext = createContext({});

export function useAuth() {
  return useContext(AuthenticatedUserContext);
}

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      const docRef = doc(db, 'users', cred.user.uid)
      const payload = {
        email: email,
      }
      setDoc(docRef, payload);
      setLoading(false);
    })
    .catch(err => { console.log(err); })
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
    })
    console.log('user: ', JSON.stringify(user))
    return unsubscribe;
  }, [])

  const value = {
    user,
    setUser,
    signup,
    login,
    logOut
  }

  console.log('AuthenticatedUserContext')

  return (
    <AuthenticatedUserContext.Provider value={{ value }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
