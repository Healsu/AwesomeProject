import { StatusBar} from 'expo-status-bar';
import {ImageBackground, StyleSheet, Text, View,Pressable} from 'react-native';


const image = { uri: "https://static.vecteezy.com/system/resources/previews/006/057/996/original/tiktok-logo-on-transparent-background-free-vector.jpg"}
const customImage = ""

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tiktok</Text>
      <ImageBackground source={image} style={styles.image}>
      </ImageBackground>
       <View style={styles.miniContainer}>
         <Text style={styles.miniText}>
            Do you feel like posting the most random ass humor known to man kind. Well why not use Tiktok, the most popular humor generator.
         </Text>

         
      </View>




      <StatusBar style="auto" />
    </View>

  );
}
//-----------------------------------------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  miniContainer:{
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: '#000000',
    width: 200,
    height: 90,


  },
  image:{
    justifyContent: 'center',
    width: 200,
    height: 200,

  },
  text:{
    color: '#000000',
    fontSize: 40,
    fontStyle: "italic"
  },
  miniText:{
    color: '#000000',
    flexDirection: "row",
  }
});
