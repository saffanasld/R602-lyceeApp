import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import "global.css";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: 'black',
      tabBarInactiveTintColor: '#5B3B1E',
      headerShown: false,
      tabBarShowLabel: false,

      tabBarStyle: {
        backgroundColor: '#979E6C',              
        height: 70,
      },

      tabBarIconStyle: {
        marginTop: 15,
      }
      
    }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="home" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="creteil"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="school" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="prives"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="ribbon" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="versailles"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="mail" size={25} color={color} />,
        }}
      />
      <Tabs.Screen
        name="paris"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons name="list" size={25} color={color} />,
        }}
      />
    </Tabs>
  );
}