import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Header from "./components/header";
import Backpack from "./components/backpack";
import Search from "./components/search";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <Header/>
            <NavigationContainer>
                <Tab.Navigator
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused, color, size}) => {
                            let iconName;

                            // Define icons for each tab
                            if (route.name === 'Search') {
                                iconName = 'search';
                            } else if (route.name === 'Backpack') {
                                iconName = 'backpack';
                            }

                            // Return the icon component with dynamic size and color
                            return <Icon name={iconName} size={size} color={color}/>;
                        },
                        tabBarActiveTintColor: '#0f224a',  // Active tab color
                        tabBarInactiveTintColor: 'gray',  // Inactive tab color
                        headerShown:false,
                        tabBarLabelStyle: {
                            fontSize: 16,
                            fontWeight: "bold",
                        }
                    })}
                >
                    <Tab.Screen name="Search" component={Search}/>
                    <Tab.Screen name="Backpack" component={Backpack}/>
                </Tab.Navigator>
            </NavigationContainer>
            <StatusBar style="auto"/>
        </View>
    )
        ;
}


const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#dff0f2',
    },
    tabBar: {
        fontSize: 40
    }
});
