

import dotenv from 'dotenv';
dotenv.config()

const HUBSPOT_API_KEY = process.env.KEY


export default defineEventHandler(async (event) => {
    const customer = await readBody(event);
    console.log('API received:', customer);

    try {

        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({
                properties: {
                    email: customer.email,
                    firstname: customer.firstName,
                    lastname: customer.lastName,
                    languages: customer.languages,
                    preferences: customer.preferences
                },
            }),
        });

        const data = await response.json();
        console.log('HubSpot response:', data);

        return {
            status: response.status,
            message: 'Sent to HubSpot',
            hubspot: data,
        };
    } catch (error) {
        console.error('HubSpot API error:', error);
        return {
            status: 500,
            message: 'Failed to send to HubSpot',
        };
    }
});
