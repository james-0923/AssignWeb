import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { fetchUserData } from '../services/ApiService';
import Sidebar from './sideBar';

const Dashboard = () => {
    const [username, setUsername] = useState([]);
    useEffect(() => {
        fetchUserData().then(data => {
           if(data.status =='Success'){
            setUsername(data.response.user.username);
           }             
        });
    }, []);
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    bgcolor: 'background.default',
                }}
            >
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            User Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container>
                    <Box sx={{ marginTop: 4, textAlign: 'center' }}>
                        <Typography variant="h4">Welcome, {username}!</Typography>
                        <Typography variant="body1" sx={{ marginTop: 2 }}>
                            This is your dashboard. You can manage your settings and preferences here.
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Dashboard;
