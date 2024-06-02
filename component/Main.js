import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Avatar from '../assets/profile.png'
import Search from '../assets/image3.png'

const Main = () => {
  return (
    <View style={styles.container}>
        <View style={styles.intro}>
            <View>
                <Text style={styles.text}>Hello, Devs</Text>
                <Text style={styles.subText}>14 task today</Text>
            </View>
            <Image source={Avatar} style={styles.image}/> 
        </View>
        <View style={styles.searchContainer}>
            <View style= {styles.search}>
                <Image source={Search}/>
                <TextInput style={styles.searchText} placeholder='Search'/>
            </View>
            <View style={styles.filter}>
                <Image source={require("../assets/filter.png")} style={styles.filterImage}/>
            </View>
        </View>
        <View style={styles.category} >
            <Text style={styles.categoryText}>
                Categories
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.catContainer}>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Exercise</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image1.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Study</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image2.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Exercise</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image1.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Study</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image2.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Exercise</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image1.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Study</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image2.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Exercise</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image1.png')} style={styles.taskImage}/>
                </View>
                <View style={styles.cats}>
                    <Text style={styles.catText}>Study</Text>
                    <Text style={styles.catSubText}>12 Tasks</Text>
                    <Image source={require('../assets/image2.png')} style={styles.taskImage}/>
                </View>
            </View>
            </ScrollView>
        </View>
        
    </View>
  )
}

export default Main

const styles = StyleSheet.create({
    container:{
        marginTop: 2,
        padding: 20,
    },
    intro: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 85,
        height: 85,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 20,
    },
    search: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        borderRadius: 10,
        padding: 10
    },
    searchText: {
      fontSize: 25,
        
    },
    searchContainer:{
        display: "flex",
        flexDirection: "row",
        marginTop:30,
        alignItems: "center",
        justifyContent: "center",  
        gap: 20      
    },
    searchText:{
        width: 260,
        fontSize: 25,
    },
    filter:{
        marginTop: 20,
    },
    filterImage:{
        width:60,
        height: 60,
    },
    category:{
        marginTop: 30,
    },
    categoryText:{
        fontWeight :"bold",
        fontSize:35,
        paddingTop: 15
    },
    cats: {
        width: 230,
        height: 230,
        backgroundColor: 'white',
        borderRadius: 10,
        marginVertical: 20,
        display: 'relative'
    },
    catContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        marginHorizontal: 20,
    },
    catText: {
        fontSize: 28,
        paddingHorizontal: 15,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    catSubText: {
        fontSize: 16,
        paddingHorizontal: 15,
    },
    taskImage: {
        width: 150,
        height: 150,
        top: 8,
        left: 39
    },
    taskView: {
        fontSize: 35,
        fontWeight: 'bold',
        paddingTop: 20,
    }
})