import React, { useEffect, useState  } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Image } from 'expo-image';
import { Audio } from 'expo-av';

function BookPage({ page }) {

    const [sound, setSound] = React.useState();

    useEffect(() => {
      Audio.setIsEnabledAsync(false);
      Audio.setIsEnabledAsync(true);
        return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
    }, [page])

    async function playSound() {
      const sound = new Audio.Sound();
      try {
        let audio = `../assets/sounds/${page.audio}.mp3`
        switch(page.audio) {
          case 'bird':
            await sound.loadAsync(require(`../assets/sounds/bird.mp3`), {shouldPlay: true});
            break;
          case 'walk':
            await sound.loadAsync(require(`../assets/sounds/walk.mp3`), {shouldPlay: true});
            break;
          case 'wolf':
            await sound.loadAsync(require(`../assets/sounds/wolf.mp3`), {shouldPlay: true});
            break;
        }
        
        await sound.setPositionAsync(0);
        await sound.playAsync();
      } catch (error) {
        console.error(error)
      }
    }



  return (
   <SafeAreaView style={styles.container}>
        <ScrollView>
        <TouchableOpacity onPress={playSound}>
            <Image
            style={styles.image}
            source={uri=page.illustration}
        />
        </TouchableOpacity>
        
           <Text style={styles.content}>{page.content}</Text> 
        </ScrollView>
   </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      fontSize: 24,
      color: "#333",
    },
    image: {
        flex: 1,
        marginBottom: 24,
        width: 330,
        maxWidth: '100%',
        height: 240,
        borderRadius: 5,
      }
  });

export default BookPage