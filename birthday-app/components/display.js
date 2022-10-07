
import { StyleSheet, View, Text, Button,TouchableOpacity, Image  } from 'react-native';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function FirstPage({ navigation }) {



  const nextpage = () => {
    navigation.navigate('secondpage');
  };



  return (
    <View style={styles.container}>
    <Text style={styles.header}>
    Birthday Reminder
    </Text>

    <View  style={styles.logo}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/happy3.jpg')}
      
            />

      

 
    </View>

    <View   style={styles.addPerson}>

     <TouchableOpacity
        style={styles.button}
        onPress={nextpage}
       >
<Text>ADD PERSON</Text>
       </TouchableOpacity>
    
    </View>
      



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#87A2FB',
    padding: 8,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
    
  },



  addPerson:{
 justifyContent: 'center',
 alignItems:'center',
    
  },

  logo:{
justifyContent:'center',
alignSelf:'center',
padding: 15,
  },

    tinyLogo: {
    width: 330,
    height: 290,
    
  },

  button:{
width:200,
height: 30,
borderRadius:15,
backgroundColor: '#FB9A40',
    textAlign: 'center',
     justifyContent: 'center',
     color: '#fff',
     marginTop:30,
  },
});