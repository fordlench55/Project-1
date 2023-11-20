import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation6 = () => {
  return (
    <View style={styles.loadingAnimation6}>
      <View style={[styles.loadingAnimation6Child, styles.loadingPosition]} />
      <View style={[styles.loadingAnimation6Item, styles.loadingPosition]} />
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
  loadingAnimation6Child: {
    backgroundColor: Color.colorGainsboro_200,
    width: 285,
  },
  loadingAnimation6Item: {
    backgroundColor: Color.colorMediumslateblue,
    width: 217,
  },
  loadingAnimation6: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation6;
