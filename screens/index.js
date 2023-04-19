import HomeScreen from './HomeScreen';
import ChartScreen from './ChartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function AppScreens() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-home-sharp'
              : 'ios-home-outline';
          } else if (route.name === 'Charts') {
            iconName = focused ? 'ios-bar-chart' : 'ios-bar-chart-outline';
          } else if (route.name === 'History') {
            iconName = focused ? 'ios-documents' : 'ios-documents-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={35} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{presentation: "transparentModal", headerShown: false}}/>
        <Tab.Screen name="Charts" component={ChartScreen} 
        options={{presentation: "transparentModal", headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}