



export default defineEventHandler(async (event) => {
    const customer = await readBody(event);
    console.log('API received:', customer);

    try {
        const HUBSPOT_API_KEY = 'pat-eu1-b37e30c7-a4a8-48f4-9b63-54162e35dc4d'; // todo move

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
