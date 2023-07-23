import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View>
      <ScrollView
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
        horizontal
      >
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput
              key={uri}
              imageUri={uri}
              onChangeImage={() => onRemoveImage(uri)}
            />
          ))}

          <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});

export default ImageInputList;
