import { View } from 'react-native';
import ContactForm from '../components/ContactForm';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContactsContext } from '../context/ContactsContext';

const ContactFormScreen = ({navigation, route}) => {
    const {addContact, editContact} = useContactsContext();
    const insets = useSafeAreaInsets();
    const { contact } = route.params ?? {};
    
    const onSubmit = async(newContactData) => {
        // Save contacts to database, update state, and
        // navigate back to the ContactListScreen
        const contactId = contact?.id ?? contact?._id;
        if (contactId !== undefined && contactId !== null){
            await editContact(contactId, newContactData);
        } else {
            await addContact(newContactData);
        }
        navigation.navigate('ContactList');
    };
    return (
        <View style={{ flex: 1, padding: 15, marginBottom: insets.bottom }}>
            <ContactForm contact={contact} onSubmit={onSubmit} />
        </View>
    );
};
export default ContactFormScreen;