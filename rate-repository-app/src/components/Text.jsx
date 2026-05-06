import { Text as NativeText, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main,
  },

  textSecondary: {
    color: theme.colors.textSecondary,
  },

  primary: {
    color: theme.colors.primary,
  },

  white: {
    color: theme.colors.white,
  },

  subheading: {
    fontSize: theme.fontSizes.subheading,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
  const textStyles = [
    styles.text,
    color === "textSecondary" && styles.textSecondary,
    color === "primary" && styles.primary,
    color === 'white' && styles.white,
    fontSize === "subheading" && styles.subheading,
    fontWeight === "bold" && styles.bold,
    style,
  ];

  return <NativeText style={textStyles} {...props} />;
};

export default Text;
