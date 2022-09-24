import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4" >
      <Stack gap="20px" alignItems="center"  pt="15px" >
        <img src={Logo} alt="logo" width="200px" height="40px"  />
        <Typography variant="h5" pb="20px"  >
          Made with Love by Developer Furkan Karaca.
        </Typography>
      </Stack>

    </Box>
  )
}

export default Footer