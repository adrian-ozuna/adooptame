import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Animated, PanResponder, StatusBar, } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from '@/components/slider';
import { animals } from '@/constants/Animals';
import AppBar from './navbarTop';

export default function Primary_slider() {

    return (

        <SafeAreaProvider>
            <StatusBar barStyle="dark-content" hidden={true} />
            <SafeAreaView edges={['right', 'top', 'left']}>

                <AppBar />
                <Slider animals={animals} />
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

export const styles = StyleSheet.create({
    cardStyle: {
        width: 300,
        height: 500
    },
});
