import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation2 = () => {
  return (
    <View style={styles.loadingAnimation2}>
      <View style={[styles.loadingAnimation2Child, styles.loadingLayout]} />
      <View style={[styles.loadingAnimation2Item, styles.loadingLayout]} />
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
  loadingAnimation2Child: {
    backgroundColor: Color.colorGainsboro_300,
  },
  loadingAnimation2Item: {
    backgroundColor: Color.colorSilver_100,
  },
  loadingAnimation2: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation2;
