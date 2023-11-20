import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const BlueBeetleMovie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.blueBeetleMovie}>
      <View style={styles.blueBeetleMovieChild} />
      <View style={[styles.blueBeetleMovieItem, styles.buyTicketChildLayout]} />
      <View style={[styles.blueBeetleMovieInner, styles.rectangleIconLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-93.png")}
      />
      <Text style={[styles.fromWarnerBros, styles.blueBeetleClr]}>
        From Warner Bros. Pictures comes the feature film “Blue Beetle,” marking
        the DC Super Hero’s first time on the big screen. The film, directed by
        Angel Manuel Soto, stars Xolo Maridueña in the title role as well as his
        alter ego, Jaime Reyes. Recent college grad Jaime Reyes returns home
        full of aspirations for his future, only to find that home is not quite
        as he left it. As he searches to find his purpose in the world, fate
        intervenes when Jaime unexpectedly finds himself in possession of an
        ancient relic of alien biotechnology: the Scarab. When the Scarab
        suddenly chooses Jaime to be its symbiotic host, he is bestowed with an
        incredible suit of armor capable of extraordinary and unpredictable
        powers, forever changing his destiny as he becomes the Super Hero BLUE
        BEETLE.
      </Text>
      <Pressable
        style={[styles.buyTicket, styles.buyTicketPosition]}
        onPress={() => navigation.navigate("BlueBeetleMovieBuyPage")}
      >
        <View style={[styles.buyTicketChild, styles.buyTicketChildLayout]} />
        <View style={[styles.buyTicketWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buyTicket1, styles.buyTicket1Typo]}>
            Buy Ticket
          </Text>
        </View>
      </Pressable>
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
        <Text style={[styles.blueBeetle, styles.blueBeetleClr]}>
          Blue Beetle
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
  blueBeetleClr: {
    color: Color.colorBlack,
    textAlign: "left",
  },
  buyTicketPosition: {
    left: 26,
    position: "absolute",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buyTicket1Typo: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  blueBeetleMovieChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  blueBeetleMovieItem: {
    top: 764,
    height: 584,
    left: 26,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  blueBeetleMovieInner: {
    top: 455,
    backgroundColor: Color.colorGainsboro_200,
    height: 22,
  },
  rectangleIcon: {
    top: 146,
    height: 497,
  },
  fromWarnerBros: {
    top: 797,
    left: 60,
    fontSize: FontSize.size_lgi,
    width: 312,
    height: 528,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    position: "absolute",
    color: Color.colorBlack,
  },
  buyTicketChild: {
    backgroundColor: Color.colorSilver_200,
    height: 112,
    zIndex: 0,
  },
  buyTicket1: {
    fontSize: FontSize.size_31xl,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  buyTicketWrapper: {
    top: 26,
    left: 72,
    zIndex: 1,
  },
  buyTicket: {
    top: 1407,
  },
  blueBeetle: {
    fontSize: FontSize.size_21xl,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    textAlign: "left",
  },
  blueBeetleWrapper: {
    top: 654,
    left: 106,
  },
  blueBeetleMovie: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1578,
    overflow: "hidden",
  },
});

export default BlueBeetleMovie;
