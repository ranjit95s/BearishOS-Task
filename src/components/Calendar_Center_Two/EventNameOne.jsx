import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function EventNameOne() {

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
                            Event Name
                        </Typography>
                    </CardContent>
                    <Stack>
                        <Typography variant="h1" className={cx(sty.tmsmStyle,sty.ename)}>Name of User, <span style={{"margin-left":"10px"}}> /@Email-Address/ </span> </Typography>
                    </Stack>
                    <Stack>
                        <Typography variant="h3" className={cx(sty.tmsmStyle,sty.dtl)}>
                            Has invited you to an event on <br></br><br></br>
                            <span> {eday} {edayt} </span> <br></br><br></br>
                            At <span> {etime} </span>  at <span> {elocation}</span>.
                        </Typography>
                    </Stack>
                    <Stack >
                        <Typography className={cx(sty.tmStyle,sty.enames)}>Guests</Typography>
                        <Typography className={cx(sty.tmsmStyle,sty.minh)}>User Name, @Email</Typography>
                    </Stack>
                    <Stack>
                            <CardContent className={cx(sty.btns,sty.ebtns)}>
                                <CardContent className={cx(sty.btnIn,sty.ebtnIn ,sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Going
                                    </Button>
                                </CardContent>
                                <CardContent className={cx(sty.btnIn,sty.ebtnIn , sty.tsStyle, sty.out)}>
                                    <Button variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Not Going
                                    </Button>
                                </CardContent>
                                <CardContent className={cx(sty.btnIn,sty.ebtnIn , sty.tsStyle, sty.out)}>
                                    <Button style={{"margin-top": "1.1rem"}} variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Purpose A New Time
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