import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SCREENS } from "../constants";

import { Welcome } from "../screens/Welcome";
import { UserIdentification } from "../screens/UserIdentification";
import { Confirmation } from "../screens/Confirmation";
import { PlantSelect } from "../screens/PlantSelect";
import { PlantSave } from "../screens/PlantSave";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={SCREENS.Welcome} component={Welcome} />
      <Screen
        name={SCREENS.UserIdentification}
        component={UserIdentification}
      />
      <Screen name={SCREENS.Confirmation} component={Confirmation} />
      <Screen name={SCREENS.PlantSelect} component={PlantSelect} />
      <Screen name={SCREENS.PlantSave} component={PlantSave} />
    </Navigator>
  );
}
