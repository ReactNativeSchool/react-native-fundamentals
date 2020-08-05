import React, { useState, useEffect } from "react";
import { FlatList, Text, View, StyleSheet, SafeAreaView } from "react-native";

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
});

export default () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=100&inc=name")
      .then((response) => response.json())
      .then((response) => {
        setPeople(response.results);
      })
      .catch((error) => {
        console.log("error", error);
        alert("Sorry, something went wrong.");
      });
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
      />
    </SafeAreaView>
  );
};
