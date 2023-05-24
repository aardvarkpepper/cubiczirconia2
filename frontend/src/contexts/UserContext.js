import { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    
    const [user, setUser] = useState({
        user_id: 1,
        user_login_name: "guest_user",
        user_login_password: "password",
        user_failed_logins: 0,
        user_last_login: "2023-01-01",
        user_date_of_birth: "2023-01-01",
        user_account_create_date: "2023-01-01",
        user_username: "Guest",
        user_image_type: "local",
        user_image_local: "/images/guest.jpg",
        user_image_url: "https://example.com/guest.jpg",
        user_subscription_type: "Free",
        user_access_level: 1,
        user_email: "noemail@notanemail.com",
        user_quote: "Logged in as guest.",
        user_notepad: "Guest accounts may not be modified.  Have a nice day.",
      });

    const loginUser = (userData) => {
        setUser(userData);
    };

    const logoutUser = () => {
        setUser({
            user_id: 1,
            user_login_name: "guest_user",
            user_login_password: "password",
            user_failed_logins: 0,
            user_last_login: "2023-01-01",
            user_date_of_birth: "2023-01-01",
            user_account_create_date: "2023-01-01",
            user_username: "Guest",
            user_image_type: "local",
            user_image_local: "/images/guest.jpg",
            user_image_url: "https://example.com/guest.jpg",
            user_subscription_type: "Free",
            user_access_level: 1,
            user_email: "noemail@notanemail.com",
            user_quote: "Logged in as guest.",
            user_notepad: "Guest accounts may not be modified.  Have a nice day.",
          });
    };

    //Send user context value and functions to child components
    return (
        <UserContext.Provider value={{user, loginUser, logoutUser}}>
            {children}
        </UserContext.Provider>
    );
};