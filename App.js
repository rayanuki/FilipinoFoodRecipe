import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, StatusBar, DrawerLayoutAndroid, Button } from 'react-native';


export default function App() {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("left");

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
      <SafeAreaView style={styles.container}>
        <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}
      >
        <View style={[styles.container, {flexDirection:"column"}]}>
          <StatusBar />
          <View style={{
            width: '100%', height: 80, backgroundColor: 'powderblue'
          }}>
            <View style={[styles.container, {flexDirection:"row"}]}>
                <View style={{ flex: 1, backgroundColor: "green" }}></View>
                <View style={{ flex: 5, backgroundColor: "blue" }}></View>
            </View>
          </View>
          <View style={{ flex: 6, backgroundColor: "#fff" }}>
            <ScrollView>
            <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
              <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Text style={{ fontSize: 96 }}>If you like</Text>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Text style={{ fontSize: 96 }}>Scrolling down</Text>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Text style={{ fontSize: 96 }}>What's the best</Text>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Text style={{ fontSize: 96 }}>Framework around?</Text>
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Image source={logo} />
              <Text style={{ fontSize: 80 }}>React Native</Text>
            </ScrollView>
          </View>
        </View>
      </DrawerLayoutAndroid>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
}),
logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};
