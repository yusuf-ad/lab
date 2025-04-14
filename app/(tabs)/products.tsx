import { Link } from "expo-router";
import {
  Text,
  View,
  SectionList,
  Image,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from "react-native";

const productsData = [
  {
    title: "Products",
    data: [
      {
        id: 1,
        name: "COOK WITH COLOR Digital Air Fryer 8.5-Quart",
        image: require("../../assets/imgs/airF1.jpg"),
      },
      {
        id: 2,
        name: "Suodoka Air Fryer 10 Qt Max 450F for Cooking,6 Presets Fry Touch Panel Easy View Window ,New Black.",
        image: require("../../assets/imgs/airF2.jpg"),
      },
      {
        id: 3,
        name: "New Gourmia 1300W 4-Quart Digital Air Fryer, 12 One-Touch Presets, Black.",
        image: require("../../assets/imgs/airF3.jpg"),
      },
      {
        id: 4,
        name: "Bluebow 6QT Air Fryer,8-in-1 Electric Hot Oven with Digital LED Touchscreen, Visible Window, 1500W, New,Black.",
        image: require("../../assets/imgs/airF4.jpg"),
      },
    ],
  },
];

export default function Products() {
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <Link href="https://walmart.com" style={styles.link}>
          more
        </Link>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={productsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },
  productCard: {
    flexDirection: "row",
    marginBottom: 16,
    backgroundColor: "white",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  productInfo: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },
  productName: {
    fontSize: 16,
    fontWeight: "500",
  },
  link: {
    color: "#0066cc",
    marginTop: 4,
  },
  sectionHeader: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    padding: 16,
    marginBlock: 12,
    backgroundColor: "#f5f5f5",
  },
  listContainer: {
    padding: 16,
  },
});
