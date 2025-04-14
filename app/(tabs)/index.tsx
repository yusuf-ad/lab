import { Image, ScrollView, Text, View, StyleSheet } from "react-native";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>About walmart.com</Text>

        <Image
          source={require("../../assets/imgs/walmart.png")}
          style={styles.image}
        />

        <Text style={styles.description}>
          Walmart Inc. (NYSE: WMT) is a people-led, tech-powered omnichannel
          retailer helping people save money and live better — anytime and
          anywhere — in stores, online, and through their mobile devices. Each
          week, approximately 255 million customers and members visit more than
          10,500 stores and numerous eCommerce websites in 19 countries. With
          fiscal year 2024 revenue of $648 billion, Walmart employs
          approximately 2.1 million associates worldwide.Walmart continues to be
          a leader in sustainability, corporate philanthropy, and employment
          opportunity.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "blue",
  },
  image: {
    width: 400,
    height: 400,
    alignSelf: "center",
    objectFit: "contain",
  },
  description: {
    flex: 1,
  },
});
