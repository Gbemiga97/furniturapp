import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";


const styles = StyleSheet.create({
    textStyles: {
        fontFamily: 'bold',
        fontSize: 40
    },
    appBarWrapper: {
        marginHorizontal: 22,
        marginTop: SIZES.small
    },
    appBar: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    location: {
        fontFamily: "semibold",
        fontSize: SIZES.medium,
        color: COLORS.gray
    },
    cartCount: {
        position: 'absolute',
        bottom: 14,
        left: 10,
        width: 16,
        height: 16,
        borderRadius: 8,
        alignItems: "center",
        backgroundColor: "green",
        justifyContent: 'center',
        zIndex: 999
    },
    cartNumber: {
        fontFamily: "regular",
        fontSize: 10,
        fontWeight: 600,
        color: COLORS.lightWhite
    }
})

export default styles