import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import loading from '../img/loading.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function ReacordandTranscribeCall() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "175px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Record and Transcribe Call
                            </Typography>
                            <ImageListItem >
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                        <Typography className={cx(sty.info,sty.tmsmStyle)}>
                        Would you like Bearish to record and transcribe this call?
                    </Typography>
                            <CardContent className={cx(sty.btns,sty.alss)}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Yes
                                    </Button>
                                </CardContent>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.out)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        No
                                    </Button>
                                </CardContent>
                            </CardContent>
                        </CardActions>
                    </Card>
                </Box>
            </StyledEngineProvider>
        </>
    );
}