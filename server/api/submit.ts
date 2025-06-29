import dotenv from 'dotenv';
dotenv.config()


const HUBSPOT_API_KEY = process.env.KEY

export default defineEventHandler(async (event) => {
    const customer = await readBody(event);
    const parsed = JSON.parse(customer)

    const contactObj = {
        properties: {
            email: parsed.email,
            firstname: parsed.firstname,
            lastname: parsed.lastname,
            preferences: parsed.preferences?.join(';'),
            languages: parsed.languages?.join(';'),
        }
    }

    console.log('contactObj:', contactObj)

    const stringified = JSON.stringify(contactObj)

    console.log(stringified)
    try {

        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${HUBSPOT_API_KEY}`,
            },
            body: stringified,
        });

        const data = await response.json();
        console.log('HubSpot response:', data);
        console.log('Response headers:', [...response.headers.entries()]);
        console.log('Response status:', response.status);

        return {
            status: response.status,
            message: 'Received to HubSpot',
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
