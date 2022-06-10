import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native'

function Home() {
    return (
        <View style={{ flex: 1,flexDirection:"row" }}>
            <FlatList
                data={[{}, {}, {}, {}, {}, {}]}
                 horizontal
                renderItem={(item) =>
                    <View style={{}}>
                        <TouchableOpacity style={{flexDirection:"row"}}>

                            <Image
                                style={{ height: 200, width: 120,margin:10,borderRadius:10 }}
                                source={{ uri: "https://m.media-amazon.com/images/M/MV5BODFhZjAwNjEtZDFjNi00ZTEyLThkNzUtMjZmOWM2YjQwODFmXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_FMjpg_UX1000_.jpg" }}
                            />
                        </TouchableOpacity>
                        <Text>
                            Walter White
                        </Text>
                    </View>
                }
            >

            </FlatList>

        </View>
    )

}
export default Home;