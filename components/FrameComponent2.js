import * as React from "react";
import { StyleSheet, View } from "react-native";
import FrameComponent1 from "./FrameComponent1";

const FrameComponent2 = ({ onIconPress, onIconPress1 }) => {
  return (
    <View style={styles.blueBeetleMovieInner}>
      <FrameComponent1
        propTop="unset"
        propLeft="unset"
        propWidth={399}
        propPosition="relative"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  blueBeetleMovieInner: {
    position: "absolute",
    top: 14,
    left: 15,
  },
});

export default FrameComponent2;
