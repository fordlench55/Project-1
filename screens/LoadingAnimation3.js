import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const LoadingAnimation3 = () => {
  return (
    <View style={styles.loadingAnimation3}>
      <View style={styles.loadingAnimation3Child} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingAnimation3Child: {
    position: "absolute",
    top: 455,
    left: 73,
    borderRadius: Border.br_5xs,
    backgroundColor: Color.colorSilver_100,
    width: 285,
    height: 22,
  },
  loadingAnimation3: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default LoadingAnimation3;
