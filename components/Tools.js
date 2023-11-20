import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, Padding, FontFamily, FontSize } from "../GlobalStyles";

const Tools = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.tools}>
      <View style={[styles.icon, styles.iconBorder]}>
        <View style={[styles.iconmenu, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconsearch, styles.iconarrowFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconarrow, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconarrowRight, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconhome, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconhome, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
        <View style={[styles.iconshoppingCart, styles.iconarrowFlexBox]}>
          <Text style={[styles.text, styles.textTypo]}></Text>
        </View>
      </View>
      <View style={[styles.buyTicket, styles.iconBorder]}>
        <View style={[styles.stateinactive, styles.statehoverPosition]}>
          <View style={[styles.stateinactiveChild, styles.childLayout]} />
          <View style={[styles.buyTicketWrapper, styles.buyWrapperFlexBox]}>
            <Text style={[styles.buyTicket1, styles.buyTypo]}>Buy Ticket</Text>
          </View>
        </View>
        <View style={[styles.statehover, styles.statehoverPosition]}>
          <View style={[styles.statehoverChild, styles.childLayout]} />
          <View style={[styles.buyTicketWrapper, styles.buyWrapperFlexBox]}>
            <Text style={[styles.buyTicket2, styles.buyTypo]}>Buy Ticket</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent, styles.componentChildLayout]}>
        <View style={[styles.componentChild, styles.componentChildLayout]} />
        <View style={[styles.icon1, styles.iconFlexBox]}>
          <Text style={[styles.text7, styles.textTypo]}></Text>
        </View>
        <Pressable
          style={[styles.icon2, styles.iconFlexBox]}
          onPress={() => navigation.navigate("Homepage")}
        >
          <Text style={[styles.text7, styles.textTypo]}></Text>
        </Pressable>
      </View>
      <View style={[styles.animationButtondefaultParent, styles.iconBorder]}>
        <View style={[styles.stateinactive, styles.statehoverPosition]}>
          <View
            style={[
              styles.animationButtondefaultChild,
              styles.animationChildLayout,
            ]}
          />
          <View style={[styles.buyWrapper, styles.buyWrapperFlexBox]}>
            <Text style={[styles.buy, styles.buyTypo]}>BUY!</Text>
          </View>
        </View>
        <View style={[styles.animationButtonactive, styles.statehoverPosition]}>
          <View
            style={[
              styles.animationButtonactiveChild,
              styles.animationChildLayout,
            ]}
          />
          <View style={[styles.buyWrapper, styles.buyWrapperFlexBox]}>
            <Text style={[styles.buy1, styles.buyTypo]}>BUY!</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconBorder: {
    borderWidth: 1,
    borderColor: Color.colorBlueviolet,
    borderStyle: "dashed",
    borderRadius: Border.br_8xs,
    position: "absolute",
    overflow: "hidden",
  },
  iconarrowFlexBox: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.fontAwesome6Free,
    fontSize: FontSize.size_13xl,
  },
  statehoverPosition: {
    left: 20,
    position: "absolute",
  },
  childLayout: {
    zIndex: 0,
    height: 112,
    width: 378,
    borderRadius: Border.br_20xl,
  },
  buyWrapperFlexBox: {
    zIndex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  buyTypo: {
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_31xl,
  },
  componentChildLayout: {
    height: 87,
    position: "absolute",
  },
  iconFlexBox: {
    top: 17,
    padding: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  animationChildLayout: {
    height: 132,
    width: 387,
    borderRadius: Border.br_47xl,
    zIndex: 0,
  },
  text: {
    color: Color.colorGray_200,
  },
  iconmenu: {
    top: 20,
  },
  text1: {
    color: Color.colorBlack,
  },
  iconsearch: {
    top: 92,
  },
  iconarrow: {
    top: 164,
  },
  iconarrowRight: {
    top: 236,
  },
  iconhome: {
    top: 308,
  },
  iconshoppingCart: {
    top: 380,
  },
  icon: {
    top: 60,
    left: 48,
    width: 96,
    height: 452,
  },
  stateinactiveChild: {
    backgroundColor: Color.colorSilver_200,
  },
  buyTicket1: {
    color: Color.colorGray_100,
  },
  buyTicketWrapper: {
    top: 26,
    left: 72,
  },
  stateinactive: {
    top: 20,
  },
  statehoverChild: {
    backgroundColor: "#1cd466",
  },
  buyTicket2: {
    color: "#070707",
  },
  statehover: {
    top: 152,
  },
  buyTicket: {
    top: 40,
    left: 644,
    width: 418,
    height: 284,
  },
  componentChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_lg,
    backgroundColor: Color.colorWhite,
    width: 398,
  },
  text7: {
    color: Color.colorDimgray,
  },
  icon1: {
    left: 323,
    width: 47,
  },
  icon2: {
    left: 23,
  },
  rectangleParent: {
    top: 65,
    left: 195,
    width: 399,
  },
  animationButtondefaultChild: {
    backgroundColor: Color.colorSilver_300,
  },
  buy: {
    color: Color.colorBlack,
  },
  buyWrapper: {
    top: 37,
    left: 139,
  },
  animationButtonactiveChild: {
    backgroundColor: "#6780ff",
  },
  buy1: {
    color: Color.colorWhite,
  },
  animationButtonactive: {
    top: 172,
  },
  animationButtondefaultParent: {
    top: 492,
    left: 523,
    width: 427,
    height: 324,
  },
  tools: {
    backgroundColor: "#a6a6a6",
    flex: 1,
    width: "100%",
    height: 1024,
    overflow: "hidden",
  },
});

export default Tools;
