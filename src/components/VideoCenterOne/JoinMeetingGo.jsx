import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function JoinMeetingGo() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="EnterName" style={{ "height": "250px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                            Join a Meeting
                            </Typography>
                            <ImageListItem >
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Meeting Id or Meeting Link' name="code" id="code" />
                            </CardContent>
                            <Typography className={cx(sty.info,sty.tmsmStyle)}>
                            Ask the host of your meeting for a Meeting Id or Meeting Link to join.
                            </Typography>
                            <CardContent className={cx(sty.btns)}>
                                <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Go
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