import React, { useState, createContext, useEffect, useContext } from 'react';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { getAuth, updateProfile } from 'firebase/auth';
import { setDoc, doc } from '@firebase/firestore';
import { auth, db } from '../config/firebase';

export const AuthenticatedUserContext = createContext({});

export function useAuth() {
  return useContext(AuthenticatedUserContext);
}

export const AuthenticatedUserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = function (email, password, firstName, lastName) {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(cred => {
        const docRef = doc(db, 'users', cred.user.uid)
        const payload = {
          email: email,
          firstName: firstName,
          lastName: lastName
        }
        setDoc(docRef, payload);
        updateProfile(auth.currentUser, {
          displayName: firstName
        })
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
    return unsubscribe;
  }, [])

  const value = {
    user,
    setUser,
    signup,
    login,
    logOut,
    loading,
    setLoading
  }

  return (
    <AuthenticatedUserContext.Provider value={{ value }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
