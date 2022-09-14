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
            main:"#D8E2DC",
        },
        secondary: {
            main: "#FFD7BA",
        }
    }

});

