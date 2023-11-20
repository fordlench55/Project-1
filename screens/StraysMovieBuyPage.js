import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import CreditCardFormContainer from "../components/CreditCardFormContainer";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const StraysMovieBuyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.straysMovieBuyPage}>
      <View style={styles.straysMovieBuyPageChild} />
      <View style={[styles.straysMovieBuyPageItem, styles.straysLayout]} />
      <Image
        style={[styles.straysMovieBuyPageInner, styles.straysLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle, styles.buyTypo]}>Strays</Text>
      </View>
      <FrameComponent1
        propTop={10}
        propLeft={15}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={styles.blueBeetle1}>Strays</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.instanceChild} />
        <View style={[styles.buyWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buy, styles.buyTypo]}>BUY!</Text>
        </View>
      </View>
      <CreditCardFormContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  straysLayout: {
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
  buyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  straysMovieBuyPageChild: {
    top: 112,
    left: 50,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    width: 329,
    height: 611,
    position: "absolute",
  },
  straysMovieBuyPageItem: {
    top: 455,
    backgroundColor: Color.colorGainsboro_200,
    height: 22,
  },
  straysMovieBuyPageInner: {
    top: 146,
    height: 497,
  },
  blueBeetle: {
    color: Color.colorWhite,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleWrapper: {
    top: 658,
    left: 158,
  },
  blueBeetle1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    textAlign: "center",
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleContainer: {
    top: 650,
    left: 156,
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
    color: Color.colorBlack,
  },
  buyWrapper: {
    top: 37,
    left: 139,
    zIndex: 1,
  },
  rectangleParent: {
    top: 1294,
    left: 22,
    position: "absolute",
  },
  straysMovieBuyPage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1480,
    overflow: "hidden",
  },
});

export default StraysMovieBuyPage;
