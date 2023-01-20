import React, {useState} from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Close from '../img/Close.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function SuccessEvent() {

    const EventDay = "Thursday";
    const EventDayT = "00/00/0000";
    const EventTime = "00:00 AM";
    const EventLocation = "[location]";

    const [eday, setEday] = useState(EventDay);
    const [edayt, setEdayt] = useState(EventDayT);
    const [etime, setEtime] = useState(EventTime);
    const [elocation, setElocation] = useState(EventLocation);
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="EventNameOne" style={{"width":"350px","height":"500px"}} className={cx(sty.boxStyle)}>
                <Card className={cx(sty.inStyle)} style={{"width":"300px"}}>
                <CardContent className={cx(sty.headerStyle)}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                            Success
                        </Typography>
                        <ImageListItem >
                            <img src={Close} alt="close" loading="lazy" />
                        </ImageListItem>
                    </CardContent>
                    <CardContent className={cx(sty.headerStyle,sty.padt)}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                            Event Name
                        </Typography>
                    </CardContent>
                    <Stack>
                        <Typography variant="h1" className={cx(sty.tmsmStyle,sty.ename)}>Name of User, <span style={{"margin-left":"10px"}}> /@Email-Address/ </span> </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h3" className={cx(sty.tmsmStyle,sty.dtl)}>
                        Has been successfully scheduled for <br></br><br></br>
                            <span> {eday}, {edayt} at {etime} </span> <br></br><br></br>
                            Thanks for scheduling this event, and I look forward to chatting soon.
                        </Typography>
                    </Stack>
                    <Stack >
                        <Typography className={cx(sty.italic)}>User Name, uses Bearish OS to supercharge work. Start Free Now.</Typography>
                    </Stack>
                    <Stack>
                            <CardContent className={cx(sty.btns,sty.ebtns)}>
                                <CardContent className={cx(sty.btnIn,sty.ebtnIn ,sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Create An Account
                                    </Button>
                                </CardContent>
                            </CardContent>
                    </Stack>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}