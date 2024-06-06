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


    return (

        <Box sx={{
            width: '100%',
            backgroundColor: 'white'
        }}>
        

        {/* First page container to push the first card down */}
        <Box sx={{
            height: '100vh',
            position: 'relative',
            
        }}>
        


          {/* Empty content or introduction text */}
          <Typography variant="h2" sx={{ 
            textAlign: 'center',
            fontFamily: "Inter, Sans-serif",
            fontWeight: 750,
            color: "#92d98d",
            justifyContent: "center",
            flexDirection: "column",
            display: "flex",
            fontSize: "5.5rem",
            paddingTop: '8%',
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Add a subtle shadow
            [theme.breakpoints.down('md')]: {
                fontSize: '4rem'
            },
            [theme.breakpoints.down('sm')]: {
                fontSize: '3rem'
            },

            }}>
            Stockz
          </Typography>

            {/* Get Started Button */}
            <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            textDecoration: 'none',
            marginTop: '25px',
            }}>
            <Button
            variant="outlined"
            sx={{
                borderColor: '#000',  // Customize the border color
                color: 'black',        // Customize the text color
                borderRadius: 4,      // Rounded corners
                padding: '10px 20px', // Padding for the button
                textTransform: 'none',// Keep text casing as is
                borderWidth: 2,       // Border width
                '&:hover': {
                borderWidth: 2,
                borderColor: '#000',
                backgroundColor: 'rgba(0, 0, 0, 0.1)', // Slight background color on hover
            },
            }}
        
            >
            Get Started
            </Button>
            </Box>


        </Box>

    </Box>
    
    );
};

export default HomeScreen;