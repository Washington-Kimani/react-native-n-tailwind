import { Tabs } from "expo-router";
import {Ionicons} from '@expo/vector-icons'

export default function TabLayout(){
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#ffd33d",
          headerStyle: {
            backgroundColor: "#166534",
          },
          headerShadowVisible: false,
          headerTintColor: "#fff",
          tabBarStyle: {
            backgroundColor: "#166534",
          },
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "home-sharp" : "home-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: "Settings",
            tabBarIcon: ({ color, focused }) => (
              <Ionicons
                name={focused ? "settings-sharp" : "settings-outline"}
                color={color}
                size={24}
              />
            ),
          }}
        />
      </Tabs>
    );
}