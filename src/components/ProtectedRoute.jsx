// RouteGuards.jsx
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useState(undefined); // undefined until auth check
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, [auth]);

  if (user === undefined) {
    return null; // or loading spinner
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export const GuestRoute = ({ children }) => {
  const [user, setUser] = useState(undefined);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, [auth]);

  if (user === undefined) {
    return null; // or loading spinner
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
};
