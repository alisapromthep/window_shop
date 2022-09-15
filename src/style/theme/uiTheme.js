import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    breakpoints: {
        values:{
            mobile:0,
            tablet:481,
            desktop:1200,
        }
    },

    palette: {
        primary: {
            main:"#B4C8BC",
        },
        secondary: {
            main: "#FFD7BA",
        }
    }

});

