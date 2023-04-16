import HomeScreen from './screens/HomeScreen';
import ChartScreen from './screens/ChartScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import client from './utils/mqtt';
import HistoryScreen from './screens/HistoryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
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
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
      })}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{presentation: "transparentModal", headerShown: false}}/>
        <Tab.Screen name="Charts" component={ChartScreen} 
        options={{presentation: "transparentModal", headerShown: false}}/>
        <Tab.Screen name="History" component={HistoryScreen} 
        options={{presentation: "transparentModal", headerShown: false}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}