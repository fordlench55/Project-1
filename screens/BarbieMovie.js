import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const BarbieMovie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.barbieMovie}>
      <View style={styles.barbieMovieChild} />
      <View style={[styles.barbieMovieItem, styles.buyTicketChildLayout]} />
      <View style={[styles.barbieMovieInner, styles.rectangleIconLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-92.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle, styles.blueBeetleTypo]}>Barbie</Text>
      </View>
      <Text style={[styles.toLiveIn, styles.toLiveInClr]}>
        To live in Barbie Land is to be a perfect being in a perfect place.
        Unless you have a full-on existential crisis. Or you’re a Ken.
      </Text>
      <Pressable
        style={[styles.buyTicket, styles.buyTicketPosition]}
        onPress={() => navigation.navigate("BarbieMovieBuyPage")}
      >
        <View style={[styles.buyTicketChild, styles.buyTicketChildLayout]} />
        <View style={[styles.buyTicketWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buyTicket1, styles.blueBeetleTypo]}>
            Buy Ticket
          </Text>
        </View>
      </Pressable>
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle1, styles.toLiveInClr]}>Barbie</Text>
      </View>
      <FrameComponent1
        propTop={14}
        propLeft={16}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buyTicketChildLayout: {
    width: 378,
    borderRadius: Border.br_20xl,
  },
  rectangleIconLayout: {
    width: 285,
    borderRadius: Border.br_5xs,
    left: 73,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  blueBeetleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  toLiveInClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  buyTicketPosition: {
    left: 26,
    position: "absolute",
  },
  barbieMovieChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  barbieMovieItem: {
    top: 764,
    height: 157,
    left: 26,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  barbieMovieInner: {
    top: 455,
    backgroundColor: Color.colorGainsboro_200,
    height: 22,
  },
  rectangleIcon: {
    top: 146,
    height: 497,
  },
  blueBeetle: {
    color: Color.colorWhite,
    display: "flex",
    width: 117,
    fontSize: FontSize.size_21xl,
    alignItems: "center",
    textAlign: "left",
  },
  blueBeetleWrapper: {
    top: 662,
    left: 157,
  },
  toLiveIn: {
    top: 797,
    left: 60,
    fontSize: FontSize.size_lgi,
    width: 312,
    height: 528,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    color: Color.colorBlack,
    position: "absolute",
  },
  buyTicketChild: {
    backgroundColor: Color.colorSilver_200,
    height: 112,
    zIndex: 0,
  },
  buyTicket1: {
    fontSize: FontSize.size_31xl,
    color: Color.colorGray_100,
  },
  buyTicketWrapper: {
    top: 26,
    left: 72,
    zIndex: 1,
  },
  buyTicket: {
    top: 975,
  },
  blueBeetle1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleContainer: {
    top: 654,
    left: 154,
  },
  barbieMovie: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1152,
    overflow: "hidden",
  },
});

export default BarbieMovie;
