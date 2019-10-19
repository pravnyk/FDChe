import { createStackNavigator } from "react-navigation"
import { WelcomeScreen } from "../screens/welcome-screen"
import { DemoScreen } from "../screens/demo-screen"
import { HomeScreen } from "../screens/home-screen"

export const PrimaryNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Demo: { screen: DemoScreen },
    Welcome: { screen: WelcomeScreen },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  },
)

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 */
export const exitRoutes: string[] = ["Home"]
