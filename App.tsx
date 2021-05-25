import "react-native-gesture-handler";

import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomePage from "./screens/TabOneScreen";
import SecondPage from "./screens/TabTwoScreen";

// Import Custom Sidebar
import CustomSidebarMenu from "./CustomSidebarMenu";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png",
          }}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName="HomePage">
      <Stack.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: "Home", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e", //Set Header color
          },
          headerTintColor: "#fff", //Set Header text color
          headerTitleStyle: {
            fontWeight: "bold", //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

function secondScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="SecondPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: "#f4511e", //Set Header color
        },
        headerTintColor: "#fff", //Set Header text color
        headerTitleStyle: {
          fontWeight: "bold", //Set Header text style
        },
      }}
    >
      <Stack.Screen
        name="SecondPage"
        component={SecondPage}
        options={{
          title: "Second Page", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Home"
          options={{ drawerLabel: "Home" }}
          component={HomeStack}
        />
        <Drawer.Screen
          name="Storico"
          options={{ drawerLabel: "Storico" }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Statistiche"
          options={{ drawerLabel: "Statistiche" }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Impostazioni"
          options={{ drawerLabel: "Impostazioni" }}
          component={secondScreenStack}
        />
        <Drawer.Screen
          name="Calendario"
          options={{ drawerLabel: "Calendario" }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
