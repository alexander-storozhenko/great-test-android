import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MainRoom from "./components/mainRoom/MainRoom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import rootReducer from './reducers/rootReducer';
import MovableContent from './components/movableContent/MovableContent';
import Room from './components/room/Room';
import { AppLoading } from 'expo';
import { useFonts } from 'expo-font';

let store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
    let [fontsLoaded] = useFonts({
        'Quicksand-Bold': require('./assets/fonts/Quicksand-Bold.ttf'),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Header />

                <MovableContent >
                    <View style={styles.row}>
                        <Sidebar />
                        <Room>
                            <MainRoom />
                        </Room>
                    </View>
                </MovableContent>

                <StatusBar style="light" />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    row: {

        flexDirection: 'row'
    }
});
export default App;
