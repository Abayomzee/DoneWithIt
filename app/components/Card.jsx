import { Image, Text, View, StyleSheet } from "react-native";
import colors from "../config/colors";

const Card = (props) => {
  // Props
  const { title, subTitle, image } = props;

  // Data to display
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.bottom}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.compose({
  container: {
    backgroundColor: "#fff",
    borderRadius: 20,
    overflow: "hidden",
  },
  image: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 200,
    width: "100%",
  },
  bottom: {
    padding: 12,
  },
  title: {
    fontSize: 16,
  },
  subTitle: {
    color: colors.secondary,
    fontSize: 17,
    marginTop: 4,
    fontWeight: "bold",
  },
});
