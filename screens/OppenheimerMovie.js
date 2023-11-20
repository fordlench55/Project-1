import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const OppenheimerMovie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.oppenheimerMovie}>
      <View style={styles.oppenheimerMovieChild} />
      <View
        style={[styles.oppenheimerMovieItem, styles.buyTicketChildLayout]}
      />
      <View
        style={[styles.oppenheimerMovieInner, styles.rectangleIconLayout]}
      />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-91.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle, styles.blueBeetleTypo]}>
          Oppenheimer
        </Text>
      </View>
      <Text style={[styles.writtenAndDirected, styles.blueBeetle1Clr]}>
        Written and directed by Christopher Nolan, Oppenheimer is an IMAX®-shot
        epic thriller that thrusts audiences into the pulse-pounding paradox of
        the enigmatic man who must risk destroying the world in order to save
        it. The film stars Cillian Murphy as J. Robert Oppenheimer and Emily
        Blunt as his wife, biologist and botanist Katherine “Kitty” Oppenheimer.
        Oscar® winner Matt Damon portrays General Leslie Groves Jr., director of
        the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss, a
        founding commissioner of the U.S. Atomic Energy Commission. Academy
        Award® nominee Florence Pugh plays psychiatrist Jean Tatlock, Benny
        Safdie plays theoretical physicist Edward Teller, Michael Angarano plays
        Robert Serber and Josh Hartnett plays pioneering American nuclear
        scientist Ernest Lawrence. Oppenheimer also stars Oscar® winner Rami
        Malek and reunites Nolan with eight-time Oscar® nominated actor, writer
        and filmmaker Kenneth Branagh.
      </Text>
      <Pressable
        style={[styles.buyTicket, styles.buyTicketPosition]}
        onPress={() => navigation.navigate("OppenheimerMovieBuyPage")}
      >
        <View style={[styles.buyTicketChild, styles.buyTicketChildLayout]} />
        <View style={[styles.buyTicketWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buyTicket1, styles.blueBeetleTypo]}>
            Buy Ticket
          </Text>
        </View>
      </Pressable>
      <FrameComponent1
        propTop={11}
        propLeft={16}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle1, styles.blueBeetle1Clr]}>
          Oppenheimer
        </Text>
      </View>
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
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  blueBeetleTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  blueBeetle1Clr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  buyTicketPosition: {
    left: 26,
    position: "absolute",
  },
  oppenheimerMovieChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  oppenheimerMovieItem: {
    top: 764,
    height: 707,
    left: 26,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  oppenheimerMovieInner: {
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
    fontSize: FontSize.size_21xl,
  },
  blueBeetleWrapper: {
    left: 95,
    top: 656,
    alignItems: "center",
    flexDirection: "row",
  },
  writtenAndDirected: {
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
    top: 1502,
  },
  blueBeetle1: {
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    fontSize: FontSize.size_21xl,
  },
  blueBeetleContainer: {
    left: 86,
    top: 656,
    alignItems: "center",
    flexDirection: "row",
  },
  oppenheimerMovie: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1678,
    overflow: "hidden",
  },
});

export default OppenheimerMovie;
