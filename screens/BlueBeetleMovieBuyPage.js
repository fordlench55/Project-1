import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const BlueBeetleMovieBuyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.blueBeetleMovieBuyPage}>
      <View style={[styles.blueBeetleMovieBuyPageChild, styles.blueBg]} />
      <View style={[styles.blueBeetleMovieBuyPageItem, styles.blueBg]} />
      <View style={styles.blueBeetleMovieBuyPageInner} />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-93.png")}
      />
      <FrameComponent2
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <FrameComponent1
        propTop={-289}
        propLeft={-1011}
        propWidth={400}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.blueBeetle}>Blue Beetle</Text>
      </View>
      <View style={[styles.rectangleView, styles.blueChildLayout]} />
      <View
        style={[styles.blueBeetleMovieBuyPageChild1, styles.blueChildLayout]}
      />
      <View style={styles.blueBeetleMovieBuyPageChild2} />
      <View
        style={[styles.blueBeetleMovieBuyPageChild3, styles.blueChildLayout]}
      />
      <Text style={[styles.creditCardNumber, styles.codeTypo]}>
        credit card number
      </Text>
      <Text style={[styles.expirationDate, styles.codeTypo]}>
        expiration date
      </Text>
      <Text style={[styles.cvvCode, styles.codeTypo]}>CVV code</Text>
      <Text style={[styles.zipCode, styles.codeTypo]}>zip code</Text>
      <View style={styles.rectangleParent}>
        <View style={styles.instanceChild} />
        <View style={[styles.buyWrapper, styles.wrapperFlexBox]}>
          <Text style={styles.buy}>BUY!</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blueBg: {
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  blueChildLayout: {
    height: 36,
    width: 259,
    left: 63,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  codeTypo: {
    width: 175,
    fontSize: FontSize.size_lgi,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    left: 62,
    textAlign: "left",
    color: Color.colorBlack,
    height: 22,
    position: "absolute",
  },
  blueBeetleMovieBuyPageChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
  },
  blueBeetleMovieBuyPageItem: {
    top: 764,
    left: 26,
    width: 378,
    height: 486,
  },
  blueBeetleMovieBuyPageInner: {
    top: 455,
    height: 22,
    backgroundColor: Color.colorGainsboro_200,
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  rectangleIcon: {
    top: 146,
    height: 497,
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  blueBeetle: {
    fontSize: FontSize.size_21xl,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    textAlign: "left",
    color: Color.colorBlack,
  },
  blueBeetleWrapper: {
    top: 654,
    left: 106,
  },
  rectangleView: {
    top: 824,
  },
  blueBeetleMovieBuyPageChild1: {
    top: 929,
  },
  blueBeetleMovieBuyPageChild2: {
    top: 1038,
    left: 62,
    height: 36,
    width: 259,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  blueBeetleMovieBuyPageChild3: {
    top: 1147,
  },
  creditCardNumber: {
    top: 789,
  },
  expirationDate: {
    top: 894,
  },
  cvvCode: {
    top: 999,
  },
  zipCode: {
    top: 1108,
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
    textAlign: "left",
    color: Color.colorBlack,
  },
  buyWrapper: {
    top: 37,
    left: 139,
    zIndex: 1,
  },
  rectangleParent: {
    top: 1393,
    left: 22,
    position: "absolute",
  },
  blueBeetleMovieBuyPage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1578,
    overflow: "hidden",
  },
});

export default BlueBeetleMovieBuyPage;
