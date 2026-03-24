import { Card, Text, Avatar, IconButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useContactsContext } from '../context/ContactsContext';

const ContactCard = ({ contact }) => {
    const { removeContact } = useContactsContext();
    const navigation = useNavigation();

    return (
        <Card style={{ margin: 10, marginTop: 12 }}>
            <Card.Title title={contact.name} subtitle={contact.phone}
                left={props => <Avatar.Text {...props} label={contact.name[0]} />}
            />
            <Card.Content>
                {contact.email && <Text>Email: {contact.email}</Text>}
            </Card.Content>
            <Card.Actions>
                <IconButton 
                    icon="pencil" 
                    size={20} 
                    accessibilityLabel="Edit contact"
                    //onPress={() => navigation.navigate('ContactForm', { contact })}
                    onPress={() => {
                        navigation.navigate('ContactForm', { contact });
                    }}
                />
                <IconButton icon="delete" size={20} accessibilityLabel="Remove contact"
                    onPress={() => {
                        const contactId = contact.id ?? contact._id;
                        if (contactId !== undefined && contactId !== null) {
                            removeContact(contactId);
                        }
                        navigation.navigate('ContactList');
                    }}
                />
            </Card.Actions>
        </Card>
    );
};

export default ContactCard;