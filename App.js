import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import axios from 'axios';
import PickerButton from './components/PickerButton';
import PickUpDisplay from './components/PickUpDisplay';

// API keys, host
const API_KEY = process.env.REACT_APP_API_KEY
const API_HOST = 'pick-me-up.p.rapidapi.com'

const buttonInfo = [
  {
    content: "cute",
    title: "Cute",
  },
  {
    content: "funny",
    title: "Funny",
  },
  {
    content: "dirty",
    title: "Dirty",
  },
  {
    content: "tinder",
    title: "Tinder",
  },
  {
    content: "cheesy",
    title: "Cheesy",
  },
]

/**
 * @brief Main App component
 */
export default function App() {
  // UseState variables
  const [display, setDisplay] = useState(false)
  const [pickUp, setPickUp] = useState("")

  // Load the pick up line with options variable
  const loadPickUp = (content) => {
    console.log(process.env.REACT_APP_API_KEY)
    // API method
    const options = {
      method: 'GET',
      url: `https://pick-me-up.p.rapidapi.com/${content}`,
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': API_HOST
      }
    };
    axios.request(options).then(function (response) {
      setPickUp(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  // When button is pressed
  const handlePress = (e, content) => {
    setDisplay(true)
    loadPickUp(content)
  }

  // When text is pressed
  const textHandle = () => {
    setDisplay(false)
    setPickUp()
  }

  // Mapping of buttons 
  const Buttons = buttonInfo.map((e, index) => {
      return <PickerButton key={index} handlePress={event => handlePress(event, e.content)} butText={e.title}/>
    })

  return (
    <>
      <StatusBar></StatusBar>
      <View style={styles.container}>
        <PickUpDisplay display={display} pickUp={pickUp} handlePress={handlePress}></PickUpDisplay>
        {Buttons}
      </View>
    </>
  );
}

// Styling
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
