import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import sem from '../img/sem.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function EmbarrassingGC() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="EmbarrassingGmail" className={cx(sty.boxStyle)}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Well this is Embarrassing
                        </Typography>
                        <ImageListItem >
                            <img src={Close} alt="close" loading="lazy" />
                        </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography varient="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Google Calendar
                        </Typography>
                    </Button>
                    <Typography className={cx(sty.info,sty.tsStyle)}>
                    Your intelligent connection to Google Calendar failed. Please press connect and try to connect your
                     account again. Need help? Submit a ticket below.
                    </Typography>
                    <CardContent className={cx(sty.submitT,sty.tmStyle)}>
                        <span> Submit a Ticket </span>
                    </CardContent>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}