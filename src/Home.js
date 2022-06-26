import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList,SectionList, StatusBar, TouchableHighlight, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';



const Home = () => {

    const [Items,setItems] = useState([
        {name:"Item 1"},
        {name:"Item 2"},
        {name:"Item 3"},
        {name:"Item 4"},
        {name:"Item 5"},
        {name:"Item 6"},
        {name:"Item 7"},
        {name:"Item 8"},
        {name:"Item 9"},
        {name:"Item 10"}
    ])

    const DATA = [
        {
            title:"Title 1",
            data: ["Item 1-1","Item 1-2","Item 1-3"],

        },
        {
            title:"Title 2",
            data: ["Item 2-1","Item 2-2","Item 2-3"],

        },
        {
            title:"Title 3",
            data: ["Item 3-1","Item 3-2","Item 3-3"],

        },
        {
            title:"Title 4",
            data: ["Item 4-1","Item 4-2","Item 4-3"],

        },
    ]


    return (

        <SectionList
        keyExtractor={(item,index) => index.toString()}
        sections={DATA}
        renderItem={({item}) => (
            
                <Text style={{fontSize:40}}> {item} </Text>
    
        )}
        renderSectionHeader={({section}) => (
            <View style={{flex:1}}>
                <Text style={{fontSize:40}}> {section.title} </Text>
            </View>

        )}
        />
        // <FlatList
        // inverted
        // horizontal={true}
        // keyExtractor={( item,index ) => index.toString()}
        // data={Items}
        // renderItem={ ({item}) => (
        //         <View style={{flex:1}}>
        //             <Text style={{fontSize:40}}> {item.name} </Text>
        //         </View>
        //     )

        // }

        
        // />

    
    );
}



export default Home;


// function Home({ navigation }) {


//         const [post, setPosts] = useState([])
//         const [mark, setMark] = useState([])

//         useEffect(() => {
//             const url = 'https://breakingbadapi.com/api/characters';
//             fetch(url).then(resp => resp.json())
//                 .then(async resp => {
//                     setPosts(resp)
//                     await AsyncStorage.setItem("sharma", JSON.stringify(resp))
//                 })
//         }, [])

//         const display = async (id) => {
//             const data1 = [...mark]
//             if (data1.includes(id)) {
//                 const data = data1.filter((item) => item != id)
//                 setMark(data)
//                 await AsyncStorage.setItem("nikhil", JSON.stringify(data))
//             }
//             else {
//                 data1.push(id)
//                 setMark(data1)
//                 await AsyncStorage.setItem("nikhil", JSON.stringify(data1))
//             }

//         }

//         // selectFavorite=(index)=>{
//         //     // console.warn("bug",index)
//         //     let helperArray = this.state.favoriteArray;
//         //     let itemIndex = helperArray.indexOf(index);
//         //     if(helperArray.includes(index)){
//         //       // console.warn("in if");
//         //     //   helperArray.push(index)
//         //       // this.setState({indicator:true})
//         //       helperArray.splice(itemIndex,1);
//         //     }
//         //     else{
//         //       // console.warn("in else")
//         //       // this.setState({favoriteToggle:true},()=>console.warn(this.state.favoriteToggle,"favoriteToggle"))
//         //       helperArray.push(index)
//         //       // this.setState({indicator:true})
//         //     }
//         //     this.setState({favoriteArray:helperArray}
//         //       )

//         //   }


//         // console.warn(mark)
//         // source={this.state.favoriteDetails.some(item => item.lot_id._id === lot_id._id) ? Icons.starLight :  Icons.star } style={{height:vh(20.19),width:vh(22)}}/>
//         // source={this.state.favoriteArray.includes(lotId) ? Icons.starLight :  Icons.star} */}


//         // onPress={()=>this.selectFavorite(lot_id._id)}





//         return (
//             <View style={{ flex: 1, backgroundColor: "black" }}>
//                 <StatusBar
//                 hidden
//                 />
//                 <View style={{ flexDirection: "row",paddingTop:20 }}>
//                     <Text style={{ fontWeight: "bold", color: '#FFFF', fontSize: 25, marginTop: 1 }}>
//                         The Breaking Bad
//                     </Text>
//                     <TouchableOpacity>
//                         <Image
//                             style={{ height: 25, width: 25, tintColor: "white", marginLeft: 105,marginTop:3}}
//                             source={require('./Assets/icons8-search-30.png')}
//                         />
//                     </TouchableOpacity>
//                     <TouchableOpacity onPress={() => navigation.navigate("Favorites")}>
//                         <Image
//                             style={{ height: 20, width: 20,marginLeft:25,marginTop:3}}
//                             source={require('./Assets/HEART_FILLED.png')}
//                         />
//                     </TouchableOpacity>

//                 </View>
//                 <FlatList
//                     data={post}
//                      numColumns={2}
//                     keyExtractor={() => Math.random()}
//                     renderItem={({ item }) =>
//                         <View style={{ marginTop: 50 }}>
//                             <TouchableOpacity>

//                                 <Image
//                                     style={{ height: 200, width: 170, margin: 12, borderRadius: 8, resizeMode: "contain" }}
//                                     source={{ uri: item.img }}
//                                 />
//                             </TouchableOpacity>
//                             <View style={{ flexDirection: "row" }}>
//                                 <View style={{ flexDirection: "column" }}>
//                                     <Text style={{ paddingLeft: 10, color: "#FFFF" }}>
//                                         {item.name}
//                                     </Text>
//                                     <Text style={{ color: "#FFFF", paddingLeft: 10 }}>
//                                         {item.nickname}
//                                     </Text>
//                                 </View>
//                                 <TouchableOpacity
//                                     onPress={() => display(item.char_id)}
//                                 >
//                                     <Image
//                                         source={!mark.includes(item.char_id) ? require('./Assets/icons8-heart-50.png') : require('./Assets/HEART_FILLED.png')}
//                                         style={{ height: 20, width: 20, marginLeft: 60, tintColor: "white" }}
//                                     />

//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     }
//                 >

//                 </FlatList>

//             </View>
//         )
// }
// export default Home;