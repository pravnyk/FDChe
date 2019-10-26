import { View, Button } from "react-native"
import * as React from "react"
import { Text } from "../../components/text"
import { Wallpaper } from "../../components/wallpaper"
import { NavigationScreenProps } from "react-navigation"

export interface HomeScreenProps extends NavigationScreenProps<{}> {}

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const openDemo = React.useMemo(() => () => props.navigation.navigate("Demo"), [props.navigation])

  return (
    <View>
      <Wallpaper />
      <Text>tesfftw</Text>
      <Button title="test" onPress={openDemo} />
    </View>
  )
}
