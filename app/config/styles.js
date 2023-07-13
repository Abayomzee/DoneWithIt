import { renderFontFamily } from "../utils/helpers";
import colors from "./colors";

export default {
  colors,
  text: {
    color: colors.dark,
    fontSize: 17,
    fontFamily: renderFontFamily(),
  },
};
