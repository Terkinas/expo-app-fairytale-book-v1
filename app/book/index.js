
import React, { useEffect, useState, useRef } from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import BookPage from '../../components/BookPage'
import book from './pages.json'
import { Feather } from '@expo/vector-icons';
import { useNavigation, Stack } from 'expo-router'


export default function Book() {

    const [page, setPage] = useState(1)
    const scrollViewRef = useRef();
    const navigation = useNavigation();

    useEffect(() => {
        handlePageChange()
    }, [page])

    const handlePageChange = (() => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });
    })

  return (
    <>
        <Stack.Screen options={{
                headerTitle: `Puslapis: ${page}`,
                headerTitleStyle: {
                    fontWeight: "light",
                    fontSize: 13,
                    color: "#333"
                  },
                  headerLeft: () => (
                    <Text onPress={() => navigation.goBack() }>
                      Išeiti
                    </Text>
                  ),
            }}>
            
        </Stack.Screen>

        <View style={styles.container} >
            
            <ScrollView  ref={scrollViewRef} style={styles.main} showsVerticalScrollIndicator={false}>
                {/* <Text style={styles.title}>Puslapis: {page}</Text> */}
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => {
                        if (page > 1) {
                            setPage(page-1)
                        }
                    }}><Text style={styles.button}> <Feather name="arrow-left" size={24} color="black" /> Atgal</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (page < book.pages.length) {
                            setPage(page+1)
                        }
                    }}><Text style={styles.button}>Pirmyn <Feather name="arrow-right" size={24} color="black" /> </Text></TouchableOpacity>
                </View>
                <BookPage page={book.pages[page-1]} />
                <View style={styles.buttonsView}>
                    <TouchableOpacity onPress={() => {
                        if (page > 1) {
                            setPage(page-1)
                        }
                    }}><Text style={styles.button}> <Feather name="arrow-left" size={24} color="black" /> Atgal</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => {
                        if (page < book.pages.length) {
                            setPage(page+1)
                        }
                    }}><Text style={styles.button}>Pirmyn <Feather name="arrow-right" size={24} color="black" /> </Text></TouchableOpacity>
                </View>
            </ScrollView>
        </View> 
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    maxWidth: 960,
   
  },
  title: {
    fontSize: 13,
    color: "#333"
  },
    buttonsView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        
      },
        button: {
            paddingVertical: 10,
            flex: 1,
            justifyContent: "center",
        }
});
