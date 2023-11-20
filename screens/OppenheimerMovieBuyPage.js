import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const OppenheimerMovieBuyPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.oppenheimerMovieBuyPage}>
      <View
        style={[styles.oppenheimerMovieBuyPageChild, styles.rectangleViewBg]}
      />
      <View style={styles.oppenheimerMovieBuyPageItem} />
      <Image
        style={styles.oppenheimerMovieBuyPageInner}
        contentFit="cover"
        source={require("../assets/rectangle-91.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={styles.blueBeetle}>Oppenheimer</Text>
      </View>
      <FrameComponent1
        propTop={11}
        propLeft={16}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle1, styles.buyClr]}>Oppenheimer</Text>
      </View>
      <View style={styles.rectangleParent}>
        <View style={styles.instanceChild} />
        <View style={[styles.buyWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buy, styles.buyClr]}>BUY!</Text>
        </View>
      </View>
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <View
        style={[
          styles.oppenheimerMovieBuyPageChild1,
          styles.oppenheimerChildLayout,
        ]}
      />
      <View
        style={[
          styles.oppenheimerMovieBuyPageChild2,
          styles.oppenheimerChildLayout,
        ]}
      />
      <View style={styles.oppenheimerMovieBuyPageChild3} />
      <View
        style={[
          styles.oppenheimerMovieBuyPageChild4,
          styles.oppenheimerChildLayout,
        ]}
      />
      <Text style={[styles.creditCardNumber, styles.codeTypo]}>
        credit card number
      </Text>
      <Text style={[styles.expirationDate, styles.codeTypo]}>
        expiration date
      </Text>
      <Text style={[styles.cvvCode, styles.codeTypo]}>CVV code</Text>
      <Text style={[styles.zipCode, styles.codeTypo]}>zip code</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
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
  buyClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  oppenheimerChildLayout: {
    height: 36,
    width: 259,
    left: 63,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  codeTypo: {
    width: 175,
    fontSize: FontSize.size_lgi,
    left: 62,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    height: 22,
    position: "absolute",
  },
  oppenheimerMovieBuyPageChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
  },
  oppenheimerMovieBuyPageItem: {
    top: 455,
    height: 22,
    backgroundColor: Color.colorGainsboro_200,
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  oppenheimerMovieBuyPageInner: {
    top: 146,
    height: 497,
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  blueBeetle: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_21xl,
  },
  blueBeetleWrapper: {
    left: 95,
    top: 656,
    alignItems: "center",
    flexDirection: "row",
  },
  blueBeetle1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleContainer: {
    left: 86,
    top: 656,
    alignItems: "center",
    flexDirection: "row",
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
    top: 1328,
    left: 21,
    position: "absolute",
  },
  rectangleView: {
    top: 786,
    left: 26,
    width: 378,
    height: 473,
  },
  oppenheimerMovieBuyPageChild1: {
    top: 846,
  },
  oppenheimerMovieBuyPageChild2: {
    top: 951,
  },
  oppenheimerMovieBuyPageChild3: {
    top: 1060,
    left: 62,
    height: 36,
    width: 259,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  oppenheimerMovieBuyPageChild4: {
    top: 1169,
  },
  creditCardNumber: {
    top: 811,
  },
  expirationDate: {
    top: 916,
  },
  cvvCode: {
    top: 1021,
  },
  zipCode: {
    top: 1130,
  },
  oppenheimerMovieBuyPage: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1532,
    overflow: "hidden",
  },
});

export default OppenheimerMovieBuyPage;
