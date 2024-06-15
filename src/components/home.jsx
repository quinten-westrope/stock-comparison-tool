import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip, Modal } from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from 'react';




const HomeScreen = () => {
    const theme = useTheme();

    const actionRef = React.useRef(null);

    const scrollToAction = () => {
        actionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Box sx={{
            width: '100%',
            position: 'relative',
            height: '100vh',
        }}>
            {/* Background */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${process.env.PUBLIC_URL}/nyc.jpg)`,
                    backgroundSize: 'cover',
                    filter: 'brightness(65%)',
                }}
            />

            {/* Content */}
            <Box
                sx={{
                    position: 'relative',
                    textAlign: 'center',
                    zIndex: 1, // Ensure content appears above background
                    width: '100%',
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "Inter, Sans-serif",
                        fontWeight: 750,
                        color: "white",
                        fontSize: "5.5rem",
                        paddingTop: '10rem',
                        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                        [theme.breakpoints.down('md')]: {
                            fontSize: '4rem'
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '3rem'
                        },
                    }}
                >
                    Stockz
                </Typography>
                <Box sx={{ marginTop: '35px' }}>
                    <Button
                        variant="outlined"
                        sx={{
                            borderColor: 'white',
                            color: 'white',
                            borderRadius: 4,
                            padding: '10px 20px',
                            textTransform: 'none',
                            borderWidth: 2,
                            '&:hover': {
                                borderWidth: 2,
                                borderColor: '#000',
                            },
                        }}
                        onClick={scrollToAction} // Add onClick handler for smooth scrolling
                    >
                        Get Started
                    </Button>
                </Box>
            </Box>

            {/* Scrolls to second page */}
            <Box
                sx={{
                    height: '100vh',
                    [theme.breakpoints.down('sm')]: {
                        height: '70vh',
                    },
                }}
            />
            <div ref={actionRef} />
        </Box>
    );
};

export default HomeScreen;