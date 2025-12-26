import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen Imports [cite: 110, 111]
import ProfilesListScreen from './screens/ProfilesListScreen';
import ProfileDetailScreen from './screens/ProfileDetailScreen';

// Context Import (Adjust path if necessary)
import { AuthProvider } from './context/AuthContext'; 

const Stack = createNativeStackNavigator(); [cite: 112, 113]

export default function App() {
  return (
    // Wrap the entire navigation structure with AuthProvider
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Profiles" 
            component={ProfilesListScreen} 
          />
          <Stack.Screen 
            name="ProfileDetail" 
            component={ProfileDetailScreen} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}