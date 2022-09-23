import { createTheme } from "@material-ui/core/styles";

import PRIMARY_RED_COLOR from "../constants/color";

const Theme = createTheme({
    palette: {
      primary: {
        main: PRIMARY_RED_COLOR,
      },
    },
  });
  
  export default Theme;