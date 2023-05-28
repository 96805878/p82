// screens/CreatePost.js
import React from "react";
import { View, Text } from "react-native";

const CreatePost = () => {
  return (
    <View>
      <Text>Create Post Screen</Text>
    </View>
  );
};

export default CreatePost;

// screens/Feed.js
import React from "react";
import { View, Text } from "react-native";

const Feed = () => {
  return (
    <View>
      <Text>Feed Screen</Text>
    </View>
  );
};

export default Feed;

// screens/Profile.js
import React from "react";
import { View, Text } from "react-native";

const Profile = () => {
  return (
    <View>
      <Text>Profile Screen</Text>
    </View>
  );
};

export default Profile;

// navigation/TabNavigator.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "../screens/Feed";
import CreatePost from "../screens/CreatePost";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={Feed} />
      <Tab.Screen name="Create Post" component={CreatePost} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

// navigation/DrawerNavigation.js
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
