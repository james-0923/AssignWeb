export const fetchUserData = () => {
    return Promise.resolve({
        status: 'Success',
        response: {
            user: {
                username: "John Doe",
                email: "johndoe@example.com"
            }
        },
        message: 'Success',
        // status: 'failed',
        // response: {
        //     user:''
        // },
        // message: 'Invalid credentails',
    });
};
// export const logInAPI = (email, password) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (email === "test@example.com" && password === "password@123") {
//                 resolve({ success: true, message: "Login successful!", token: "mockToken123456789", });
//             } else {
//                 resolve({ success: false, message: "Invalid credentials" });
//             }
//         }, 500);
//     });
// };
export const logInAPI = async (email, password) => {
    try {
        const response = await axios.post('https://localhost:5125/api/User/login', {
            email,
            password,
        });

        const data = response.data;

        if (data.success) {
            return { success: true, message: data.message, token: data.token };
        } else {
            return { success: false, message: data.message };
        }
    } catch (error) {
        return { success: false, message: error.response?.data?.message || 'An error occurred during login' };
    }
};

export const logOutAPI = () => {
    return Promise.resolve({
        status: 'Success',
    }
    );
};
export const fetchShipList = () => {
    return Promise.resolve([
        { id: 1, name: "Ship One", type: "Cargo" },
        { id: 2, name: "Ship Two", type: "Tanker" }
    ]);
};