import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../config/colors";

const ListItem = (props) => {
  // Props
  const { title, subTitle, image, IconComponent, onPress, renderRightActions } =
    props;

  // Data to display
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

export default ListItem;

const styles = StyleSheet.compose({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.white,
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  title: {
    fontSize: 16,
    fontWeight: 600,
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
    marginTop: 4,
  },
});
