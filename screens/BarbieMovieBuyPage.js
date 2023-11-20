import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import CreditCardFormContainer from "../components/CreditCardFormContainer";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BarbieMovieBuyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.barbieMovieBuyPage}>
      <View style={styles.barbieMovieBuyPageChild} />
      <View style={[styles.barbieMovieBuyPageItem, styles.barbieLayout]} />
      <Image
        style={[styles.barbieMovieBuyPageInner, styles.barbieLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.blueBeetle}>Barbie</Text>
      </View>
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle1, styles.buyClr]}>Barbie</Text>
      </View>
      <FrameComponent1
        propTop={14}
        propLeft={16}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.instanceChild} />
        <View style={[styles.buyWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buy, styles.buyClr]}>BUY!</Text>
        </View>
      </View>
      <CreditCardFormContainer
        propTop={753}
        propHeight={498}
        propHeight1={479}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  barbieLayout: {
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buyClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  barbieMovieBuyPageChild: {
    top: 112,
    left: 50,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    width: 329,
    height: 611,
    position: "absolute",
  },
  barbieMovieBuyPageItem: {
    top: 455,
    backgroundColor: Color.colorGainsboro_200,
    height: 22,
  },
  barbieMovieBuyPageInner: {
    top: 146,
    height: 497,
  },
  blueBeetle: {
    color: Color.colorWhite,
    display: "flex",
    width: 117,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_21xl,
    alignItems: "center",
  },
  blueBeetleWrapper: {
    top: 662,
    left: 157,
  },
  blueBeetle1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleContainer: {
    top: 654,
    left: 154,
  },
  instanceChild: {
    borderRadius: Border.br_47xl,
    backgroundColor: Color.colorSilver_300,
    width: 387,
    height: 132,
    zIndex: 0,
  },
  buy: {
    fontSize: FontSize.size_31xl,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
  },
  buyWrapper: {
    top: 37,
    left: 139,
    zIndex: 1,
  },
  rectangleParent: {
    top: 1381,
    left: 27,
    position: "absolute",
  },
  barbieMovieBuyPage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1553,
    overflow: "hidden",
  },
});

export default BarbieMovieBuyPage;
