import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Favorites() {

    const [post2, setPosts] = useState([])
    const [mark2, setMark] = useState([])

    useEffect(() => {

        getItem();

    }, [])

    const getItem = async () => {
        const pry = await AsyncStorage.getItem("nikhil")
        if (pry) {
            setMark(JSON.parse(pry))
        }
        else {
            setMark([])
        }

        const pry1 = await AsyncStorage.getItem("sharma")
        if (pry1) {
            setPosts(JSON.parse(pry1))
        }
        else {
            setPosts([])
        }

    }

    const filterData = post2?.filter((item) => mark2.includes(item.char_id))

    console.log("hieee", filterData)

    return (
        <View style={{ flex: 1, backgroundColor: "black", paddingTop: 10 }}>

            <Text style={{ fontWeight: "bold", color: '#FFFF', fontSize: 25, marginTop: 5 }}>
                Favorites
            </Text>
            <FlatList
                data={filterData}
                numColumns={2}
                keyExtractor={() => Math.random()}
                renderItem={({ item }) =>
                    <View style={{ marginTop: 50 }}>
                        <TouchableOpacity>

                            <Image
                                style={{ height: 200, width: 170, margin: 12, borderRadius: 8, resizeMode: "contain" }}
                                source={{ uri: item.img }}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={{ paddingLeft: 10, color: "#FFFF" }}>
                                    {item.name}
                                </Text>
                                <Text style={{ color: "#FFFF", paddingLeft: 10 }}>
                                    {item.nickname}
                                </Text>
                            </View>
                            <TouchableOpacity
                            // onPress={() => display(item.char_id)}
                            >
                                <Image
                                    source={require('./Assets/HEART_FILLED.png')}
                                    style={{ height: 20, width: 20, marginLeft: 60, tintColor: "white" }}
                                />

                            </TouchableOpacity>
                        </View>
                    </View>
                }
            >

            </FlatList>

        </View>
    )

}
export default Favorites;