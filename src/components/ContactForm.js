import { useState, useEffect } from 'react';
import { TextInput, Button } from 'react-native-paper';
const ContactForm = ({ contact = {}, onSubmit }) => {
    const [name, setName] = useState(contact.name || '');
    const [phone, setPhone] = useState(contact.phone || '');
    const [email, setEmail] = useState(contact.email || '');

    // You can add validation, etc.
    // const validateAndSetName(name) { ... }
    // const validateAndSetPhone(phone) { ... }
    // const validateAndSetEmail(email) { ... }

    return (
        <>
            <TextInput
                label="Name"
                value={name}
                onChangeText={setName} // or {validateAndSetName}
                mode="outlined"
                style={{ marginBottom: 8 }}
            />

            <TextInput
                label="Phone"
                value={phone}
                onChangeText={setPhone} // or {validateAndSetPhone}
                keyboardType="phone-pad"
                mode="outlined"
                style={{ marginBottom: 8 }}
            />

            <TextInput
                label="Email"
                value={email}
                onChangeText={setEmail} // or {validateAndSetEmail}
                keyboardType="email-address"
                mode="outlined"
                style={{ marginBottom: 16 }}
            />

            <Button mode="contained" onPress={() => onSubmit({ name, phone, email })}>
                Save
            </Button>
        </>
    );
};
export default ContactForm;