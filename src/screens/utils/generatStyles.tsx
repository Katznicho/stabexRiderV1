import { Platform, StyleSheet } from "react-native";
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from "../../theme/theme";

export const generalStyles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryBlackHex,
  },
  ScrollViewFlex: {
    flexGrow: 1,
  },
  ScreenTitle: {
    fontSize: FONTSIZE.size_28,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex,
    paddingLeft: SPACING.space_30,
  },
  InputContainerComponent: {
    flexDirection: 'row',
    margin: SPACING.space_30,
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.primaryWhiteHex,
    alignItems: 'center',
  },
  flexStyles: {
    display: 'flex',
    flexDirection: 'row',
  },
  absoluteStyles: {
    position: 'absolute',
    zIndex: 20,
  },
  resideViews: {
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    margin: 2,
  },
  centerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomHairline: {
    borderBottomColor: COLORS.primaryOrangeHex,
    borderBottomWidth: 3,
    marginRight: 10,
    marginLeft: 20,
    width: 100,
  },
  authTitle: {
    fontSize: 20,
    fontFamily: FONTFAMILY.poppins_regular,
    color: COLORS.primaryOrangeHex,
    marginTop: 25,
    marginBottom: 8,
    alignSelf: 'stretch',
    textAlign: 'left',
    marginLeft: 30,
  },
  textStyle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: 15,
  },
  errorText: {
    color: COLORS.primaryRedHex,
    fontSize: 14,
  },
  InputContainer: {
    height: 42,
    borderWidth: 1,
    borderColor: COLORS.primaryLightGreyHex,
    borderRadius: BORDERRADIUS.radius_10,
    backgroundColor: COLORS.primaryDarkGreyHex,
    paddingLeft: 10,
    color: COLORS.primaryWhiteHex,
    width: '80%',
    alignSelf: 'center',
    marginVertical: 10,
    alignItems: 'center',
    elevation: 5,

    textAlign: "center"
  },
  loginContainer: {
    width: '70%',
    backgroundColor: COLORS.primaryOrangeHex,
    borderRadius: 25,
    padding: Platform.OS == "android" ? 10 : 15,
    marginTop: 30,
    alignSelf: 'center',
    alignItems: 'center',

  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    marginHorizontal: 20
  },
  forgotText: {
    color: COLORS.primaryOrangeHex,
    fontFamily: FONTFAMILY.poppins_light,
  },
  loginText: {
    color: COLORS.primaryBlackHex,
    fontFamily: FONTFAMILY.poppins_light,
    // fontFamily: FONTFAMILY.poppins_medium,
  },
  viewStyles: {
    marginHorizontal: 20,
    marginVertical: 10
  },

  formInput: {
    color: COLORS.primaryWhiteHex,
    fontSize: 15,
    borderBottomColor: COLORS.primaryWhiteHex,
    borderBottomWidth: 1,
    // paddingBottom: 2,
    paddingHorizontal: 0,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    marginTop: 5,
    // marginHorizontal: 20
  },
  formContainer: {
    marginVertical: Platform.OS === 'android' ? 5 : 10,
    marginHorizontal: 25
  },
  titleHeaderStyles: {
    fontSize: 25,
    fontFamily: FONTFAMILY.poppins_extrabold,
  },
  formInputTextStyle: {
    fontSize: 15,
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryWhiteHex
  },
  headerStyle: {
    backgroundColor: COLORS.primaryOrangeHex
  },
  scrollViewContentPadding: {
    paddingBottom: 100
  },
  CardTitle: {
    fontFamily: FONTFAMILY.poppins_medium,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_14,
  },
  CardSubtitle: {
    fontFamily: FONTFAMILY.poppins_light,
    color: COLORS.primaryWhiteHex,
    fontSize: FONTSIZE.size_10,
    // marginHorizontal: SPACING.space_10
  },
  CardPriceCurrency: {
    fontFamily: FONTFAMILY.poppins_semibold,
    color: COLORS.primaryOrangeHex,
    fontSize: FONTSIZE.size_12,
  },
  errorInput: {
    borderBottomColor: COLORS.primaryRedHex,
    borderBottomWidth: 2,
  },
  textInputMarginRight: {
    marginRight: 15
  },

});