import { Image, Text, View, StyleSheet } from "react-native";

export default function Tax() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Are you a tax-exempt organization?</Text>

      <Image
        source={require("../../assets/imgs/taxPeople.jpg")}
        style={{
          width: 200,
          height: 200,
          alignSelf: "center",
          objectFit: "contain",
        }}
      />

      <View style={styles.stepsContainer}>
        <View style={styles.stepItem}>
          <Text style={styles.stepTitle}>Step 1: Create an account</Text>
          <Text style={styles.stepDescription}>
            Tax exemption enrollment requires an account
          </Text>
        </View>

        <View style={styles.stepItem}>
          <Text style={styles.stepTitle}>Step 2: Start application</Text>
          <Text style={styles.stepDescription}>
            If you're an individual, start the application at
            Walmart.com/taxexempt/org/app
          </Text>
        </View>

        <View style={styles.stepItem}>
          <Text style={styles.stepTitle}>Step 3: Get approved & shop</Text>
          <Text style={styles.stepDescription}>
            Enjoy tax-exempt shopping online & in-store.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingVertical: 12,
  },
  title: {
    fontSize: 28,
    color: "#70B7E5",
    marginBottom: 20,
    textAlign: "center",
  },
  stepsContainer: {
    gap: 20,
  },
  stepItem: {
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginVertical: 4,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
    marginVertical: 4,
    backgroundColor: "white",
  },
  stepDescription: {
    marginVertical: 4,

    color: "#666",
    lineHeight: 20,
    backgroundColor: "lightblue",
  },
});
