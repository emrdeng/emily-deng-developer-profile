import React from 'react';
// MATERIAL UI:
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function WritingsTypography(props) {
  return (
    <Box
        className={props.boxClassName}
        sx={{
          p: 2,
        }}
    >
        <Typography variant={props.typographyVariant} className={props.typographyClassName} style={{ fontFamily: props.fontFamilyName, fontWeight: props.fontWeight, fontSize: props.fontSize }}>
            {props.paragraph}
        </Typography>
    </Box>
  )
}

export default WritingsTypography