import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ContactListScreen from './screens/ContactListScreen';
import ContactFormScreen from './screens/ContactFormScreen';
import ContactViewScreen from './screens/ContactViewScreen';
import { ContactsProvider } from './context/ContactsContext'; 
import { Provider as PaperProvider, MD3LightTheme, MD3DarkTheme, useTheme } from 'react-native-paper';
import { Appbar } from 'react-native-paper';
import { useState } from 'react';
import { View } from 'react-native';

// Light theme with custom colors
const lightTheme = {
    ...MD3LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        primary: '#cb4fa6',
        secondary: '#03dac4',
    }
};

// Dark theme with custom colors
const darkTheme = {
    ...MD3DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        primary: '#f8ceec',
        secondary: '#03dac4',
    }
};

const MyAppBar = ({ navigation, back, options, isDarkTheme, onToggleTheme }) => {
    const title = options.title;
    return(
    <Appbar.Header>
        {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
        <Appbar.Content title={title} />
        {!back && (
        <Appbar.Action 
            // switch icon based on theme
            icon={isDarkTheme ? "white-balance-sunny" : "moon-waning-crescent"} 
            onPress={onToggleTheme} 
        />
        )}
    </Appbar.Header>
);};

const Stack = createStackNavigator();

// Wrapper component to apply theme background color
const ThemedScreen = ({ Component }) => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <Component />
        </View>
    );
};

const ThemedContactListScreen = (props) => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ContactListScreen {...props} />
        </View>
    );
};

const ThemedContactViewScreen = (props) => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ContactViewScreen {...props} />
        </View>
    );
};

const ThemedContactFormScreen = (props) => {
    const theme = useTheme();
    return (
        <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
            <ContactFormScreen {...props} />
        </View>
    );
};

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };
    
    const paperTheme = isDarkTheme ? darkTheme : lightTheme;
    
    // Create a navigation theme from the paper theme
    const navigationTheme = {
        dark: isDarkTheme,
        colors: {
            primary: paperTheme.colors.primary,
            background: paperTheme.colors.background,
            card: paperTheme.colors.surface,
            text: paperTheme.colors.onBackground,
            border: paperTheme.colors.outline,
            notification: paperTheme.colors.error,
        },
    };

    return (
        <PaperProvider theme={paperTheme}>
            <ContactsProvider>
                <NavigationContainer theme={navigationTheme}>
                    <Stack.Navigator initialRouteName="ContactList" 
                        screenOptions = {{
                            header: props => <MyAppBar {...props} isDarkTheme={isDarkTheme} onToggleTheme={toggleTheme} />
                        }}
                    >
                        <Stack.Screen
                            name="ContactList"
                            component={ThemedContactListScreen}
                            options={{ title: 'Contacts' }}
                        />
                        <Stack.Screen
                            name="ContactView"
                            component={ThemedContactViewScreen}
                            options={{ title: 'View Contact' }}
                        />
                        <Stack.Screen
                            name="ContactForm"
                            component={ThemedContactFormScreen}
                            options={{ title: 'Edit Contact' }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ContactsProvider>
        </PaperProvider>
    );
}