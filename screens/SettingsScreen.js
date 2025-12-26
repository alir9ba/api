import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useAuth } from '../context/AuthContext';

export default function SettingsScreen({ navigation }) {
  // 1. Get the logout function and user from context
  const { logout, user } = useAuth();

  const handleLogout = () => {
    // 2. Call the logout function
    logout();
    
    // 3. Navigate back to Login
    // .reset() clears the history so user can't "back" into the app
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Settings</Text>
      <Text style={styles.info}>Current User: {user?.username}</Text>
      
      <Pressable style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 24, marginBottom: 20 },
  info: { fontSize: 16, marginBottom: 40, color: 'gray' },
  logoutButton: { backgroundColor: 'red', padding: 10, borderRadius: 5 },
  buttonText: { color: 'white' }
});