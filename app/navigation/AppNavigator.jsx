import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Permissions from "expo-permissions";
import * as Notifications from "expo-notifications";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigation";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";
import expoPushTokensApi from "./../api/expoPushTokens";
import ListingEditSreen from "../screens/ListingEditScreen";
import routes from "./routes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  // Methods
  const registerForPushNotifications = async () => {
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokensApi.register(token.data);
    } catch (error) {
      console.log("Error getting token: ", error);
    }
  };

  // Effects
  useEffect(() => {
    registerForPushNotifications();

    Notifications.addNotificationReceivedListener((notification) =>
      console.log(notification)
    );
    
    Notifications.addNotificationResponseReceivedListener((notification) =>
      console.log(notification)
    );
  }, []);

  // Data to display
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditSreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NewListingButton
              onPress={() => navigation.navigate(routes.LISTING_EDIT)}
            />
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              color={color}
              size={size}
            />
          ),
        })}
      />
      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
