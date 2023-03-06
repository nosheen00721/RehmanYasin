import {
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    Image,
    ScrollView
  } from "react-native";
  import React from "react";
  
  const About = () => {
    return (

      <ScrollView contentContainerStyle={styles.aboutContainer}>
        <Text style={styles.mainHeader}>  About us </Text>
        <Text style={styles.paraStyle}> Suzuki CANAL Motors😀 </Text>
  
        <View>
          <Image
            style={styles.imgStyle}
            source={{
              uri: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
            }}
            
          />
           <Text style={styles.paraStyle}>CEO of Suzuki canal </Text>
        </View>
  
        <View style={styles.aboutLayout}>
          <Text style={styles.aboutSubHeader}> About us </Text>
          <Text style={[styles.paraStyle, styles.aboutPara]}>
          We are always excited to meet people who love innovation, face challenges,
   have passion for performance excellence,
    and always seek creative & unique solutions to problems.
     Someone who is flexible, adaptable, fulfils commitment. 
     Someone who is open to learn and want to grow together with us. 
     someone who learns and Enjoy working in team as well
  as individual contributor and always at verge of process improvement and innovation.
   We would love to meet you soon. 
          </Text>
        </View>
  
        <Text style={styles.mainHeader}> Follow Us on Social Network </Text>
  
        <View style={styles.menuContainer}>
          <TouchableOpacity
           
            onPress={() =>
              Linking.openURL("https://www.instagram.com/suzukipakistan/?hl=en")
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.youtube.com/user/globalsuzukichannel"
              )
            }>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/187/187210.png",
              }}
            />
          </TouchableOpacity>
  
          <TouchableOpacity
          
            onPress={() => Linking.openURL("https://www.facebook.com/suzukicanalfsd/")}>
            <Image
              style={styles.iconStyle}
              source={{
                uri: "https://cdn-icons-png.flaticon.com/512/145/145802.png",
              }}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    aboutContainer: {
      display: "flex",
      alignItems: "center",
      
  
    },
  
    imgStyle: {
      width: 150,
      height: 150,
      borderRadius: 100,
      fontWeight:'bold'
    },
    mainHeader: {
      fontSize: 21,
      color: "black",
      textTransform: "uppercase",
      fontWeight: "500",
      marginTop: 50,
      marginBottom: 10,
      fontFamily: "JosefinSans_700Bold",
    },
    paraStyle: {
      fontSize: 18,
      color: "#7d7d7d",
      paddingBottom: 30,
    },
    aboutLayout: {
      backgroundColor: "#4c5dab",
      paddingHorizontal: 30,
      marginVertical: 3,
    },
    aboutSubHeader: {
      fontSize: 18,
      color: "#fff",
      textTransform: "uppercase",
      fontWeight: "500",
      marginVertical: 1,
      fontFamily: "JosefinSans_700Bold",
      alignSelf: "center",
      marginBottom:2,
    
    },
    aboutPara: {
      color: "#fff",
    },
    menuContainer: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
    },
  
    iconStyle: {
      width: "100%",
      height: 50,
      aspectRatio: 1,
    },
  });
  
  export default About;