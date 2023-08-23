import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ItemSeperator from "../components/lists/ItemSeperator";

import ListItem from "../components/lists/ListItem";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useAuth } from "../auth/useAuth";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
    targetScreen: "Messages",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
    targetScreen: "Messages",
  },
];

function AccountScreen({ navigation }) {
  const { user, logOut } = useAuth();

  // Data to display
  return (
    <Screen style={styles.screen}>
      <ListItem
        title={user ? user.name : "Okegbenro Abayomi"}
        subTitle={user ? user.email : "okegbenroabayo@gmail.com"}
        image={require("./../assets/mosh.jpg")}
      />

      <View>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              onPress={() => navigation.navigate(item.targetScreen)}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>

      <ListItem
        title="Logout"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
        onPress={logOut}
      />
    </Screen>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  screen: {
    gap: 20,
    backgroundColor: colors.light,
  },
});
