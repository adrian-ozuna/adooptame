
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, SafeAreaView, Dimensions, TouchableOpacity} from 'react-native';
import Home from './home';


const logo = [
    require('../../assets/images/adooptame.png'),
    require('../../assets/images/Chat.png'),
    require('../../assets/images/Bell.png')
]

export const fullWidth = Dimensions.get("window").width;
export const fullHeight = Dimensions.get("window").height;

const AppBar = () => (
    
<SafeAreaView>
<View style={styles.appBar}>
    <Image style={styles.image} source={logo[0]}></Image>
    <View style={styles.icons}>
          <Image source={logo[1]} />
    <Image source={logo[2]}></Image>
    </View>
  </View>
</SafeAreaView>
);

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#FFF9C4',
    height:70,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: StatusBar.currentHeight, 
    borderRadius:1,
    borderColor:'black',
    borderWidth: 1
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  image:{
    position:'absolute',
    left:25,
  },
  icons:{
    flexDirection:'row',
    gap:15,
    position:'absolute',
    right:25
  },
});

export default AppBar;
