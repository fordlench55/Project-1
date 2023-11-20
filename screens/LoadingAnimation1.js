import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation1 = () => {
  return (
    <View style={styles.loadingAnimation1}>
      <View style={styles.loadingAnimation1Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingAnimation1Child: {
    position: "absolute",
    top: 455,
    left: 73,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorGainsboro_300,
    width: 285,
    height: 22,
  },
  loadingAnimation1: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation1;
