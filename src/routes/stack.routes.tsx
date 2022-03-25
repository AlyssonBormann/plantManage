import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../constants";

import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={SCREENS.Welcome} component={Welcome} />
      <Screen
        name={SCREENS.UserIdentification}
        component={UserIdentification}
      />
    </Navigator>
  );
}
