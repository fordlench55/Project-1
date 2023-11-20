import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation4 = () => {
  return (
    <View style={styles.loadingAnimation4}>
      <View style={[styles.loadingAnimation4Child, styles.loadingPosition]} />
      <View style={[styles.loadingAnimation4Item, styles.loadingPosition]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingPosition: {
    height: 22,
    borderRadius: Border.br_5xs,
    left: 73,
    top: 455,
    position: "absolute",
  },
  loadingAnimation4Child: {
    backgroundColor: Color.colorSilver_100,
    width: 285,
  },
  loadingAnimation4Item: {
    backgroundColor: Color.colorMediumslateblue,
    width: 20,
  },
  loadingAnimation4: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation4;
