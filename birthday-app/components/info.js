
import { StyleSheet, View, Text, Button,TouchableOpacity, Image, TextInput  } from 'react-native';
// or any pure javascript modules available in npm

import  {React, useState} from 'react';

export default function SecondPage({ navigation }) {





  const nextpage = () => {
    navigation.navigate('calender');
  };

  const [name, setName] = useState('');

  const [todos,setTodos] = useState([]);

  const addBirthday = (() => {
    setTodos((todos) => [...todos, {name:name}])
    console.log(todos)
  })


  return (
    <View style={styles.container}>
    <Text style={styles.header}>
    Enter Birthday person's Name
    </Text>

           <TextInput
        onChangeText={(name => setName(name))}
      placeholder='Enter Name'
      style={styles.input}
      />


       <View style={styles.task}>

       {todos.map((personName) => (
         <Text style={styles.nameText}>{personName.name}</Text>
       ))}

       </View>

    <View  style={styles.logo}>
      <Image
        style={styles.tinyLogo}
        source={require('../assets/happy6.jpg')}
      
            />



      

      
     

 
    </View>

    <View   style={styles.addPerson}>

     <TouchableOpacity
        style={styles.button}
        onPressIn={nextpage}
        
       >
<Text>ADD NAME</Text>
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
    backgroundColor: '#FF9494',
    padding: 8,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#fff',
    
  },

  nameText:{
textAlign:'center',
fontSize:15,
fontWeight:'500',
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

    input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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