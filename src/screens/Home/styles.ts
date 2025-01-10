import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
  },
  form: {
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 56,
    marginRight: 7,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#FFF",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#4EA8DE",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  info: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  description: {
    flexDirection: "row",
    alignItems: "center",
  },
  descriptionText: {
    fontSize: 15,
    color: "#4EA8DE",
    fontWeight: "bold",
    marginRight: 5,
  },
  descriptionText2: {
    fontSize: 15,
    color: "#8284FA",
    fontWeight: "bold",
    marginRight: 5,
  },
  descriptionNumber: {
    backgroundColor: "#33333333",
    padding: 4,
    borderRadius: 5,
    width: 25,
    alignItems: "center",
  },
  tarefaView: {},
  listEmptyText1: {
    color: "#33333333",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 44,
  },
  listEmptyText2: {
    color: "#33333333",
    textAlign: "center",
    fontSize: 30,
  },
  containerlistEmptyText: {
    marginTop: 100,
    alignItems: "center",
  },
});
