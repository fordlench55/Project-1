import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CreditCardFormContainer = ({ propTop, propHeight, propHeight1 }) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", propTop),
      ...getStyleValue("height", propHeight),
    };
  }, [propTop, propHeight]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("height", propHeight1),
    };
  }, [propHeight1]);

  return (
    <View style={[styles.rectangleParent, frameViewStyle]}>
      <View style={[styles.frameChild, rectangleViewStyle]} />
      <View style={[styles.frameItem, styles.frameLayout]} />
      <View style={[styles.frameInner, styles.frameLayout]} />
      <View style={styles.rectangleView} />
      <View style={[styles.frameChild1, styles.frameLayout]} />
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
  frameLayout: {
    height: 36,
    width: 259,
    backgroundColor: Color.colorGainsboro_200,
    left: 37,
    position: "absolute",
  },
  codeTypo: {
    height: 22,
    width: 175,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lgi,
    left: 36,
    position: "absolute",
  },
  frameChild: {
    borderRadius: Border.br_20xl,
    backgroundColor: Color.colorWhite,
    width: 378,
    height: 470,
    zIndex: 0,
  },
  frameItem: {
    top: 60,
    zIndex: 1,
  },
  frameInner: {
    top: 165,
    zIndex: 2,
  },
  rectangleView: {
    top: 274,
    zIndex: 3,
    left: 36,
    height: 36,
    width: 259,
    backgroundColor: Color.colorGainsboro_200,
    position: "absolute",
  },
  frameChild1: {
    top: 383,
    zIndex: 4,
  },
  creditCardNumber: {
    top: 25,
    zIndex: 5,
  },
  expirationDate: {
    top: 130,
    zIndex: 6,
  },
  cvvCode: {
    top: 235,
    zIndex: 7,
  },
  zipCode: {
    top: 344,
    zIndex: 8,
  },
  rectangleParent: {
    top: 764,
    left: 26,
    height: 515,
    flexDirection: "row",
    position: "absolute",
  },
});

export default CreditCardFormContainer;
