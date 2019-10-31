import React from "react"
import { View, Button } from "react-native"
import { Wallpaper } from "../../components/wallpaper"
import { NavigationScreenProps } from "react-navigation"
import { Header } from "../../components/header"
import { Text } from "../../components/text"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const openDemo = React.useMemo(() => () => props.navigation.navigate("Demo"), [props.navigation])

  return (
    <View>
      <Wallpaper />
      <Header headerTx="homeScreen.title" />
      <Text text="Your new app, " />
      <Button title="Go to Demo page" onPress={openDemo} />
    </View>
  )
}
