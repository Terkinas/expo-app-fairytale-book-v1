import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Image } from 'expo-image';


export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Raudonkepuraitė</Text>
        <Text style={styles.subtitle}>Pasinerkite į raudonkepuraitės nuotykius.</Text>
        <Image
        style={styles.image}
        source="https://www.lrt.lt/img/2019/03/20/392579-925970-1287x836.jpg"
      />
        <TouchableOpacity onPress={() => router.push("/book")}><Text style={styles.button}>Skaityti knygą</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f56"
  },
  subtitle: {
    fontSize: 16,
    color: "#38434D",
    marginBottom: 24,
  },
  button: {
    color: "#5af"
  },
  image: {
    marginBottom: 24,
    width: 330,
    height: 240,
    borderRadius: 5,
  }
});
