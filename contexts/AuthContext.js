import React, { useContext, useState, useEffect } from 'react'

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { setDoc, doc } from '@firebase/firestore'
import { auth } from '../config/firebase';
 import { db } from '../config/firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password).then(cred => {
      const docRef = doc(db, 'users', cred.user.uid)
      const payload = {
        email: email,
      }
      setDoc(docRef, payload);
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
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user)
      setLoading(false)
    })
    console.log('currentUser: ', JSON.stringify(currentUser))
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signup,
    login,
    logOut
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
