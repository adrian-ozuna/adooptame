import { useNavigation } from '@react-navigation/native';
import { useState, useRef } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, SafeAreaView, StyleSheet, Dimensions, Button, Animated, PanResponder, ImageBackground, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export const fullWidth = Dimensions.get("window").width;
export const fullHeight = Dimensions.get("window").height;


export default function Slider({ animals }: any) {
    const navigation = useNavigation();

    const position = useRef(new Animated.ValueXY()).current;
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event([null, {
                dx: position.x,
            }], { useNativeDriver: false }),
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dx > 100) {
                    nextImage();
                } else if (gestureState.dx < -100) {
                    nextImage();
                } else {
                    Animated.spring(position, {
                        toValue: { x: 0, y: 0 },
                        useNativeDriver: false,
                    }).start();
                }
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();
            },
        })
    ).current;

    const [index, setIndex] = useState(0)
    const nextImage = () => {
        setIndex(prevIndex => (prevIndex + 1) % animals.length)
    }
    const prevImage = () => {
        setIndex(prevIndex => (prevIndex - 1 + animals.length) % animals.length);
    };


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Animated.View
                    style={[position.getLayout(),]}
                    {...panResponder.panHandlers}
                >

                    <View style={styles.cardImage}>
                        {animals.length > 0 && (

                            <ImageBackground
                                style={styles.image}
                                source={{ uri: animals[index].url }}>

                                <LinearGradient
                                    colors={['transparent', 'rgba(0,0,0,0.8)']}
                                    style={{ height: '100%', width: '100%' }}>
                                </LinearGradient>
                                <View>
                                    <View style={styles.textContainer}>
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={styles.tittle}>Max, 5 años</Text>
                                            <Text style={styles.subtittle}>Criollito</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
                                            <Text style={styles.traitsText}>Personalidad</Text>
                                            <Text style={styles.traitsText}>Personalidad</Text>
                                            <Text style={styles.traitsText}>Personalidad</Text>
                                            <Text style={styles.traitsText}>Personalidad</Text>
                                            <Text style={styles.traitsText}>Personalidad</Text>
                                        </View>
                                    </View>
                                </View>
                            </ImageBackground>
                        )}



                    </View>
                </Animated.View>
                <View style={styles.icons}>
                    <TouchableOpacity
                        onPress={nextImage}
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1.5,
                            borderColor: '#000',
                            width: 40,
                            height: 40,
                            borderRadius: 25,
                        }}
                    >
                        <Icon name="times" size={20} color="#000" />
                    </TouchableOpacity>
                    <Icon style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderColor: '#000',
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        paddingLeft: 11,
                        paddingTop: 12
                    }} name="heart" size={18} color="#000" />
                    <Icon style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderColor: '#000',
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        paddingLeft: 11,
                        paddingTop: 10
                    }} name="star" size={20} color="#000" />
                    <Icon style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderWidth: 1.5,
                        borderColor: '#000',
                        width: 40,
                        height: 40,
                        borderRadius: 25,
                        paddingLeft: 13,
                        paddingTop: 10,
                    }} name="bookmark" size={20} color="#000" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export const styles = StyleSheet.create({
    container: {
        width: fullWidth,
        marginLeft: 26,
    },
    cardImage: {
        top: 20
    },
    textContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        padding: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    traitsText: {
        fontSize: 10,
        color: '#FFF',
        fontWeight: '100',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#FFF',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 5,
        width: 'auto',
        marginTop: 10,
    },

    image: {
        width: fullWidth * 0.85,
        height: fullHeight * 0.70,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        overflow: 'hidden'

    },
    tittle: {
        paddingLeft: 10,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFF',

    },
    subtittle: {
        paddingLeft: 10,
        fontSize: 24,
        color: '#FFF'
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        gap: 40,
        top: 30
    },

})