import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FrameComponent1 from "../components/FrameComponent1";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const CartScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.cartScreen}>
      <View style={styles.cartScreenChild} />
      <FrameComponent1
        propTop={12}
        propLeft={15}
        propWidth={399}
        propPosition="absolute"
        onIconPress={() => navigation.navigate("CartScreen")}
        onIconPress1={() => navigation.navigate("Homepage")}
      />
      <Text style={styles.noItemsIn}>No Items in Cart</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cartScreenChild: {
    top: 136,
    left: 25,
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    width: 378,
    height: 1216,
    position: "absolute",
  },
  noItemsIn: {
    top: 170,
    left: 55,
    fontSize: FontSize.size_13xl,
    fontWeight: "900",
    fontFamily: FontFamily.avenir,
    color: Color.colorBlack,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 317,
    height: 102,
    position: "absolute",
  },
  cartScreen: {
    backgroundColor: Color.colorGainsboro_100,
    flex: 1,
    width: "100%",
    height: 1426,
    overflow: "hidden",
  },
});

export default CartScreen;
