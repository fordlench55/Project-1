import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Homepage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homepage}>
      <View style={[styles.homepageChild, styles.homepageBg]} />
      <View style={[styles.homepageItem, styles.homepageBg]} />
      <View style={[styles.homepageInner, styles.wrapperPosition]} />
      <Pressable
        style={[styles.wrapper, styles.wrapperPosition]}
        onPress={() => navigation.navigate("BlueBeetleMovie")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-93.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barbieBarbieVertTsrWTalen, styles.barbieLayout]}
        onPress={() => navigation.navigate("StraysMovie")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barbiebarbie-vert-tsr-w-talent-2764x4096-dom-rgb-4.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barbieBarbieVertTsrWTalen1, styles.barbieLayout]}
        onPress={() => navigation.navigate("BarbieMovie")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barbiebarbie-vert-tsr-w-talent-2764x4096-dom-rgb-1.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barbieBarbieVertTsrWTalen2, styles.barbiePosition]}
        onPress={() => navigation.navigate("OppenheimerMovie")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barbiebarbie-vert-tsr-w-talent-2764x4096-dom-rgb-2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.barbieBarbieVertTsrWTalen3, styles.barbiePosition]}
        onPress={() => navigation.navigate("BlueBeetleMovie")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/barbiebarbie-vert-tsr-w-talent-2764x4096-dom-rgb-3.png")}
        />
      </Pressable>
      <View style={styles.blueBeetleWrapper}>
        <Text style={styles.blueBeetle}>Blue Beetle</Text>
      </View>
      <FrameComponent1
        propTop={959}
        propLeft={1821}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <FrameComponent1
        propTop={13}
        propLeft={15}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  homepageBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  wrapperPosition: {
    width: 285,
    left: 73,
    position: "absolute",
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  barbieLayout: {
    height: 230,
    width: 135,
    left: 60,
    position: "absolute",
  },
  barbiePosition: {
    left: 244,
    height: 230,
    width: 135,
    position: "absolute",
  },
  homepageChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
  },
  homepageItem: {
    top: 764,
    left: 26,
    width: 378,
    height: 584,
  },
  homepageInner: {
    top: 455,
    backgroundColor: Color.colorGainsboro_200,
    height: 22,
    borderRadius: Border.br_5xs,
  },
  icon: {
    borderRadius: Border.br_5xs,
  },
  wrapper: {
    top: 146,
    height: 497,
  },
  icon1: {
    borderRadius: Border.br_2xl,
  },
  barbieBarbieVertTsrWTalen: {
    top: 1088,
  },
  barbieBarbieVertTsrWTalen1: {
    top: 793,
  },
  barbieBarbieVertTsrWTalen2: {
    top: 793,
  },
  barbieBarbieVertTsrWTalen3: {
    top: 1088,
  },
  blueBeetle: {
    fontSize: FontSize.size_21xl,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    textAlign: "left",
  },
  blueBeetleWrapper: {
    top: 652,
    left: 108,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  homepage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    height: 1388,
    overflow: "hidden",
    width: "100%",
  },
});

export default Homepage;
