import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import colors from "../../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = (props) => {
  // Props
  const {
    title,
    subTitle,
    image,
    IconComponent,
    onPress,
    renderRightActions,
    showChevrons,
  } = props;

  // Data to display
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.contentContainer}>
            <View style={styles.contentTexts}>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              {subTitle && (
                <Text style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </Text>
              )}
            </View>
            {showChevrons && (
              <MaterialCommunityIcons
                name="chevron-right"
                size={20}
                color={colors.medium}
              />
            )}
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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  contentTexts: {
    flex: 1,
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
