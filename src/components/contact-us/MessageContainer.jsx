import { Box, Button, Flex, Heading, Input, Text, Textarea } from '@chakra-ui/react';
import React, { useState } from 'react';

const MessageContainer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [subject, setSubject] = useState('');
    
    const handleSubmit = () => {
        console.log('submitted:', name, email, subject, message);
    }

    return ( 
        <Flex
            flexDirection = 'row'
            h = '100%'
            w = '100%s'
        >
            <Flex
                h = '100%'
                w = '40%'
                justifyContent = 'center'
                alignItems = 'center'
            >
                <Heading 
                    size = 'lg'
                    p = '4%'
                >
                    Send Us A Message
                </Heading>
            </Flex>

            <Flex
                flex = '1'
                justifyContent = 'center'
                alignItems = 'center'
                flexDirection = 'column'
            >
                <Box
                    w = '60%'
                >
                    <Text
                        w = '10%' 
                        fontWeight = 'bold'
                        pb = '8px'
                    >
                        Name:
                    </Text>
                    <Input
                        placeholder = 'Enter Your Name'
                        onChange = {(event) => setName(event.target.value)}
                    />

                    <Text
                        w = '10%'
                        fontWeight = 'bold'
                        pt = '16px'
                        pb = '8px'
                    >
                        Email:
                    </Text>
                    <Input 
                        placeholder = 'Enter Your Email'
                        onChange = {(event) => setEmail(event.target.value)}
                    />

                    <Text
                        w = '12%'
                        fontWeight = 'bold'
                        pt = '16px'
                        pb = '8px'
                    >
                        Subject
                    </Text>
                    <Input 
                        placeholder = 'What Is Your Subject?'
                        onChange = {(event) => setSubject(event.target.value)}
                    />

                    <Text
                        w = '14%'
                        fontWeight = 'bold'
                        pt = '16px'
                        pb = '8px'
                    >
                        Message
                    </Text>
                    <Textarea
                        placeholder = 'Enter Your Message'
                        h = '2xs'
                        onChange = {(event) => setMessage(event.target.value)}
                    />
                </Box>

                <Button
                    mt = '20px'
                    w = '10%'
                    onClick = {handleSubmit}
                >
                    Submit
                </Button>
            </Flex>
        </Flex> 
    );
}
 
export default MessageContainer;