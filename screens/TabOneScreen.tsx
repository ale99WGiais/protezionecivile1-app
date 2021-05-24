import * as React from "react";
import { ImageBackground, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

var token = null;
var loginData = {
  email: "alessiocorrado99@gmail.com",
  password: "password",
};

export default class TabOneScreen extends React.Component {
  componentDidMount() {
    /*fetch("http://158.110.96.158:8080/api/do_login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((response) => {
        token = response["token"];
        console.log(token);
      });*/
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.header_title}>SAN VITO AL TAGLIAMENTO</Text>
          <View style={styles.header_content}>
            <View style={styles.header_content_side}>
              <Text style={styles.header_content_side_number}>30</Text>
              <Text style={styles.header_content_side_desc}>SVOLTE</Text>
            </View>
            <View style={styles.header_content_center}>
              <ImageBackground
                source={require("../assets/images/circle_image.png")}
                style={styles.header_content_center_image}
              >
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 24,
                    textAlign: "center",
                  }}
                >
                  10
                </Text>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  attività progr.
                </Text>
              </ImageBackground>
            </View>
            <View style={styles.header_content_side}>
              <Text style={styles.header_content_side_number}>15</Text>
              <Text style={styles.header_content_side_desc}>VOLONTARI</Text>
            </View>
          </View>
        </View>
        <View style={styles.content}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 0.4,
    backgroundColor: "red",
  },
  header_title: {
    textAlign: "center",
    fontSize: 24,
    margin: 16,
  },
  header_content: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "azure",
  },
  header_content_side: {
    flex: 2,
    alignSelf: "flex-start",
    marginTop: 32,
    backgroundColor: "green",
    alignContent: "center",
  },
  header_content_side_number: {
    fontSize: 24,
    textAlign: "center",
  },
  header_content_side_desc: {
    fontSize: 16,
    textAlign: "center",
  },
  header_content_center: {
    flex: 3,
    backgroundColor: "yellow",
  },
  header_content_center_image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    padding: 32,
  },
  content: {
    flex: 0.6,
    backgroundColor: "blue",
  },
});
