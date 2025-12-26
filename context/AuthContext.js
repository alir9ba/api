import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

const AuthContext = createContext(undefined);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // 1. Load User on App Start [cite: 176]
  // This runs only once when the component mounts (empty dependency array [])
  useEffect(() => {
    AsyncStorage.getItem('user').then(stored => {
      // If we find a stored user string, parse it back into an object and set state
      if (stored) setUser(JSON.parse(stored));
    });
  }, []);

  // 2. Save User on Change [cite: 184]
  // This runs every time the 'user' state changes (login or logout)
  useEffect(() => {
    if (user) {
      // If user exists, save it as a string
      AsyncStorage.setItem('user', JSON.stringify(user));
    } else {
      // If user is null (logged out), remove it from storage
      AsyncStorage.removeItem('user');
    }
  }, [user]);

  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used inside AuthProvider');
  }
  return context;
}