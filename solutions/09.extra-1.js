import React, { useState, useEffect } from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  name: {
    fontSize: 16,
  },
  separator: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    height: 1,
  },
  loading: {
    marginVertical: 20,
  },
});

export default () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetch("https://randomuser.me/api/?results=100&inc=name")
        .then((response) => response.json())
        .then((response) => {
          setPeople(response.results);
        })
        .catch((error) => {
          console.log("error", error);
          alert("Sorry, something went wrong.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={people}
        keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <Text style={styles.name}>
                {item.name.first} {item.name.last}
              </Text>
            </View>
          );
        }}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListEmptyComponent={() => {
          if (loading) {
            return (
              <View style={styles.loading}>
                <ActivityIndicator size="large" />
              </View>
            );
          }

          return null;
        }}
      />
    </SafeAreaView>
  );
};
