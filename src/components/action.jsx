import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText, Button, Tooltip, Modal} from "@mui/material";
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { Container, TextField} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Action = () => {

    const theme = useTheme();

    const [symbol, setSymbol] = useState('');
    const [startDate, setStartDate] = useState(dayjs());
    const [endDate, setEndDate] = useState(dayjs());
    const [showAdditionalSymbol, setShowAdditionalSymbol] = useState(false);
    const [additionalSymbol, setAdditionalSymbol] = useState('');

    const handleFinish = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({ symbol, startDate, endDate, additionalSymbol });
    };

    const toggleAdditionalSymbol = () => {
        setShowAdditionalSymbol(!showAdditionalSymbol);
        if (!showAdditionalSymbol) {
            setAdditionalSymbol(''); // Reset additional symbol field when showing
        }
    };

    return (
        <Box sx={{
            width: '100%',
            backgroundColor: 'white',
            display: 'flex',
            justifyContent: 'center',
            minHeight: '100vh',
            position: 'relative',
            
            [theme.breakpoints.down('sm')]: {
                marginTop: '5rem',
            },
            
        }}>

            <Container maxWidth="sm">
                <Box sx={{ mt: 8, p: 3, border: '1px solid #ccc', borderRadius: 5 }}>
                    <Typography variant="h4" component="h1" gutterBottom fontFamily={'Sans-serif'}>
                        Stock Analysis
                    </Typography>
                    <Box component="form" onSubmit={handleFinish} noValidate sx={{ mt: 2 }}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="symbol"
                            label="Stock Symbol"
                            name="symbol"
                            autoComplete="off"
                            value={symbol}
                            onChange={(e) => setSymbol(e.target.value)}
                        />

                        {showAdditionalSymbol && (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="additionalSymbol"
                                label="Additional Stock Symbol*"
                                name="additionalSymbol"
                                autoComplete="off"
                                value={additionalSymbol}
                                onChange={(e) => setAdditionalSymbol(e.target.value)}
                            />
                        )}

                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2, paddingBottom: 1.5 }}>
                            {showAdditionalSymbol ? (
                                <>
                                    <CloseIcon sx={{ cursor: 'pointer', mr: 1 }} onClick={toggleAdditionalSymbol} />
                                    <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={toggleAdditionalSymbol}>
                                        Remove Stock
                                    </Typography>
                                </>
                            ) : (
                                <>
                                    <AddIcon sx={{ cursor: 'pointer', mr: 1}} onClick={toggleAdditionalSymbol} />
                                    <Typography variant="body2" sx={{ cursor: 'pointer' }} onClick={toggleAdditionalSymbol}>
                                        Add Stock
                                    </Typography>
                                </>
                            )}
                        </Box>

                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Box sx={{ paddingBottom: 2.5, paddingTop: 2.5 }}>
                                <DatePicker
                                    label="Start Date"
                                    value={startDate}
                                    onChange={(newValue) => setStartDate(newValue)}
                                    renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
                                />
                            </Box>
                            <DatePicker
                                label="End Date"
                                value={endDate}
                                onChange={(newValue) => setEndDate(newValue)}
                                renderInput={(params) => <TextField {...params} fullWidth margin="normal" required />}
                            />
                        </LocalizationProvider>
                        <Box sx={{ paddingTop: 1.5 }}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3, mb: 2, fontFamily: 'Sans-serif' }}
                            >
                                Complete
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Container>

        </Box>
    );
};

export default Action;