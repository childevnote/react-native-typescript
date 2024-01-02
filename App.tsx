import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";


export default function App() {
  const now =  new Date().toLocaleTimeString();
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.text}>
          Open up App.tsx to start working on your app!
        </Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5}>
        <Text style={styles.text}>
          {now}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",

  },
  text: {
    fontSize: 24,
    backgroundColor: "purple",
    borderRadius: 20,
    overflow: "hidden",
    padding: 10,
    margin: 10,
    fontWeight: "bold",
    color: "white",
  },
});
