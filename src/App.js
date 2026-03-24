import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './screens/ContactListScreen';
import ContactFormScreen from './screens/ContactFormScreen';
import ContactViewScreen from './screens/ContactViewScreen';
import { ContactsProvider } from './context/ContactsContext'; 
import { Provider as PaperProvider, MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { Appbar } from 'react-native-paper';

// You can use MD3DarkTheme for dark mode.
const theme = {
    ...MD3LightTheme, // Copy all MD3LightTheme fields
    colors: { // Overwrite the colors field
        ...MD3LightTheme.colors, // Copy all MD3LightTheme.colors fields
        primary: '#cb4fa6', // Overwrite the primary color
        secondary: '#03dac4', // Overwrite the secondary color
    }
};

const MyAppBar = ({ navigation, back, options }) => {
    const title = options.title;
    return(
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={title} />
        {!back && (
        <Appbar.Action icon="dots-vertical" onPress={() => {/* maybe open options
        */}} />
        )}
    </Appbar.Header>
);};

const Stack = createStackNavigator();

export default function App() {

    return (
        <PaperProvider theme={theme}>
            <ContactsProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="ContactList" 
                        screenOptions = {{
                            header:props=> <MyAppBar {...props} />
                        }}
                    >
                        <Stack.Screen
                            name="ContactList"
                            component={ContactListScreen}
                            options={{ title: 'Contacts' }}
                        />
                        <Stack.Screen
                            name="ContactView"
                            component={ContactViewScreen}
                            options={{ title: 'View Contact' }}
                        />
                        <Stack.Screen
                            name="ContactForm"
                            component={ContactFormScreen}
                            options={{ title: 'Edit Contact' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ContactsProvider>
        </PaperProvider>
    );
}