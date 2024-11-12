import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const CardWidget = ({ title, value }) => {
  return (
    <Card variant="outlined" style={{ marginBottom: 20 }}>
      <CardContent>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{value}</Typography>
      </CardContent>
    </Card>
  );
};

export default CardWidget;
