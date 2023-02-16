import axios from 'axios';

// getUserData
// receives accessToken from google-routes.ts in routes folder
// performs GET request to Google OAuth user info API
// returns user information
export const getUserData = async (accessToken: string) => {
    try {
        const { data } = await axios.get(
            'https://www.googleapis.com/oauth2/v3/userinfo',
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            },
        );

        console.log(data)
        return data;
    } catch (error) {
        return null;
    }
};