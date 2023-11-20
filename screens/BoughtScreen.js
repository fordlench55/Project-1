import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const BoughtScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.boughtScreen}>
      <View style={styles.boughtScreenChild} />
      <FrameComponent1
        propTop={12}
        propLeft={15}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <Text style={[styles.enjoyTheMovie, styles.enjoyTheMoviePosition]}>
        Enjoy the movie :)
      </Text>
      <Image
        style={[styles.rickrollQrcode1Icon, styles.enjoyTheMoviePosition]}
        contentFit="cover"
        source={require("../assets/rickrollqrcode-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  enjoyTheMoviePosition: {
    left: 94,
    position: "absolute",
  },
  boughtScreenChild: {
    top: 136,
    left: 25,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    width: 378,
    height: 1216,
    position: "absolute",
  },
  enjoyTheMovie: {
    top: 790,
    fontSize: FontSize.size_13xl,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 250,
    height: 64,
  },
  rickrollQrcode1Icon: {
    top: 302,
    width: 256,
    height: 256,
  },
  boughtScreen: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1426,
    overflow: "hidden",
  },
});

export default BoughtScreen;
