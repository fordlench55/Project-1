import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const StraysMovie = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.straysMovie}>
      <View style={styles.straysMovieChild} />
      <View style={[styles.straysMovieItem, styles.buyTicketChildLayout]} />
      <View style={[styles.straysMovieInner, styles.rectangleIconLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-9.png")}
      />
      <View style={[styles.blueBeetleWrapper, styles.wrapperFlexBox]}>
        <Text style={[styles.blueBeetle, styles.theySayATypo]}>Strays</Text>
      </View>
      <Text style={[styles.theySayA, styles.theySayATypo]}>
        They say a dog is a man’s best friend, but what if the man is a total
        dirtbag? In that case, it might be time for some sweet revenge, doggy
        style. When Reggie (Will Ferrell), a naïve, relentlessly optimistic
        Border Terrier, is abandoned on the mean city streets by his lowlife
        owner, Doug (Will Forte; The Last Man on Earth, Nebraska), Reggie is
        certain that his beloved owner would never leave him on purpose. But
        once Reggie falls in with a fast-talking, foul-mouthed Boston Terrier
        named Bug (Oscar® winner Jamie Foxx), a stray who loves his freedom and
        believes that owners are for suckers, Reggie finally realizes he was in
        a toxic relationship and begins to see Doug for the heartless sleazeball
        that he is
      </Text>
      <Pressable
        style={[styles.buyTicket, styles.buyTicketPosition]}
        onPress={() => navigation.navigate("StraysMovieBuyPage")}
      >
        <View style={[styles.buyTicketChild, styles.buyTicketChildLayout]} />
        <View style={[styles.buyTicketWrapper, styles.wrapperFlexBox]}>
          <Text style={[styles.buyTicket1, styles.theySayATypo]}>
            Buy Ticket
          </Text>
        </View>
      </Pressable>
      <FrameComponent1
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <View style={[styles.blueBeetleContainer, styles.wrapperFlexBox]}>
        <Text style={styles.blueBeetle1}>Strays</Text>
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
  theySayATypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
  },
  buyTicketPosition: {
    left: 26,
    position: "absolute",
  },
  straysMovieChild: {
    top: 112,
    left: 50,
    width: 329,
    height: 611,
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_20xl,
    position: "absolute",
  },
  straysMovieItem: {
    top: 764,
    height: 584,
    left: 26,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  straysMovieInner: {
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
    top: 658,
    left: 158,
  },
  theySayA: {
    top: 797,
    left: 60,
    fontSize: FontSize.size_lgi,
    width: 312,
    height: 528,
    color: Color.colorBlack,
    position: "absolute",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
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
    top: 1407,
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
  straysMovie: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1578,
    overflow: "hidden",
  },
});

export default StraysMovie;
