import React, { useMemo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent1 = ({
  propTop,
  propLeft,
  propWidth,
  propPosition,
  onIconPress,
  onIconPress1,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("left", propLeft),
      ...getStyleValue("width", propWidth),
      ...getStyleValue("position", propPosition),
    };
  }, [propTop, propLeft, propWidth, propPosition]);

  return (
    <View style={[styles.rectangleParent, frameView1Style]}>
      <View style={styles.componentChild} />
      <Pressable
        style={[styles.icon, styles.iconFlexBox]}
        onPress={onIconPress}
      >
        <Text style={styles.text}></Text>
      </Pressable>
      <Pressable
        style={[styles.icon1, styles.iconFlexBox]}
        onPress={onIconPress1}
      >
        <Text style={styles.text}></Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: 17,
    position: "absolute",
  },
  componentChild: {
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    width: 398,
    height: 87,
    zIndex: 0,
  },
  text: {
    fontSize: FontSize.size_13xl,
    fontFamily: FontFamily.fontAwesome6Free,
    color: Color.colorDimgray,
    textAlign: "center",
  },
  icon: {
    left: 323,
    width: 56,
    zIndex: 1,
  },
  icon1: {
    left: 23,
    zIndex: 2,
  },
  rectangleParent: {
    top: 10,
    left: 15,
    width: 399,
    position: "absolute",
  },
});

export default FrameComponent1;
