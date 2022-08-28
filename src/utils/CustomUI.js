import { createMuiTheme } from "@material-ui/core";

import PRIMARY_RED_COLOR from "../constants/color";

const Theme = createMuiTheme({
    palette: {
      primary: {
        main: PRIMARY_RED_COLOR,
      },
    },
  });
  
  export default Theme;