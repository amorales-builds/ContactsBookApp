import { View } from 'react-native';
import ContactCard from '../components/ContactCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ContactViewScreen = ({navigation, route}) => {
    const insets = useSafeAreaInsets();
    const { contact } = route.params;
    return (
        <View style={{ flex: 1,  marginBottom: insets.bottom }}>
            <ContactCard contact={contact} />
        </View>
    );
};

export default ContactViewScreen;