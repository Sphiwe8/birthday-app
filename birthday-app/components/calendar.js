import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

export default class Datepicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      

      

      <View style={styles.container}>

       <View  style={styles.header}>
       <Text style={styles.headerText}>When is the Birthday ? </Text>
      </View>

        <CalendarPicker
          onDateChange={this.onDateChange}
        />

        <View style={styles.textContent}>
          <Text style={styles.dateText}>Birthday :{ startDate }</Text>
        </View>

          <View   style={styles.addPerson}>

     <TouchableOpacity
        style={styles.button}
        
       
        
       >
<Text>SAVE DATE</Text>
       </TouchableOpacity>
    
    </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ADDDD0',
    marginTop: 40,
  },

    addPerson:{
 justifyContent: 'center',
 alignItems:'center',
 paddingTop: 20,
    
  },


   textContent:{
 justifyContent: 'center',
 alignItems:'center',
 padding: 40,
    
  },

     dateText:{
 justifyContent: 'center',
 textAlign:'center',
 padding: 20,
 fontSize:20,
 backgroundColor:'#87A2FB',
 color:'#fff',
 borderRadius: 25,
    
  },

    header: {
    
    textAlign: 'center',
    backgroundColor:'#87A2FB',
    
     padding: 20,
    
  },


headerText:{
fontSize: 25,
    fontWeight: 'bold',
     color:'#fff',
    
     
},


  button:{
width:200,
height: 30,
borderRadius:15,
backgroundColor: '#FB9A40',
    textAlign: 'center',
     justifyContent: 'center',
     color: '#fff',
  },
});
