import { List, Avatar } from 'react-native-paper';

const ContactListItem = ({ contact, onPress }) => {
    //const { name, phone } = contact;
    const name = typeof contact.name === 'string'? contact.name:'';
    const phone = typeof contact.phone === 'string'? contact.phone:'';

    return (
        <List.Item
            title={name}
            description={phone}
            left={() => <Avatar.Text size={40} label={name ? name[0] : '?'}/>}
            onPress={onPress}
        />
    );
};

export default ContactListItem;