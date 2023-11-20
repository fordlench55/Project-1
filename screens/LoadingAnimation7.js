import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation7 = () => {
  return (
    <View style={styles.loadingAnimation7}>
      <View style={[styles.loadingAnimation7Child, styles.loadingLayout]} />
      <View style={[styles.loadingAnimation7Item, styles.loadingLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingLayout: {
    height: 22,
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    top: 455,
    position: "absolute",
  },
  loadingAnimation7Child: {
    backgroundColor: Color.colorGainsboro_200,
  },
  loadingAnimation7Item: {
    backgroundColor: Color.colorMediumslateblue,
  },
  loadingAnimation7: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation7;
