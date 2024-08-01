import { getRandomColor } from "lib/utils";

const styles = {
  Container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    p: "5px 7.5px",
    backgroundColor: getRandomColor(),
    width: "fit-content",
  },
  TagText: {
    color: "#fff",
    fontFamily: "Poppins, sans-serif",
    fontWeight: 500,
    fontSize: "8px",
    lineHeight: "100%",
    textTransform: "uppercase",
  },
};

export default styles;
