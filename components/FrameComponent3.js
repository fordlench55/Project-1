import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";

const FrameComponent3 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.rectangleParent, styles.componentChildLayout]}>
      <View style={[styles.componentChild, styles.componentChildLayout]} />
      <View style={[styles.icon1, styles.iconFlexBox]}>
        <Text style={[styles.text7, styles.textTypo]}></Text>
      </View>
      <Pressable
        style={[styles.icon2, styles.iconFlexBox]}
        onPress={() => navigation.navigate("Homepage")}
      >
        <Text style={[styles.text7, styles.textTypo]}></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  componentChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    width: 398,
  },
  text7: {
    color: Color.colorDimgray,
  },
  icon1: {
    left: 323,
    width: 47,
  },
  icon2: {
    left: 23,
  },
  rectangleParent: {
    top: 65,
    left: 195,
    width: 399,
  },
});

export default FrameComponent3;
