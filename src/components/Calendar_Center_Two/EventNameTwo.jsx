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

export default function EventNameTwo() {

    // const EventDay = "Thursday";
    // const EventDayT = "00/00/0000";
    // const EventTime = "00:00 AM";
    // const EventLocation = "[location]";

    // const [eday, setEday] = useState(EventDay);
    // const [edayt, setEdayt] = useState(EventDayT);
    // const [etime, setEtime] = useState(EventTime);
    // const [elocation, setElocation] = useState(EventLocation);
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="EventNameOne" style={{"width":"350px","height":"525px"}} className={cx(sty.boxStyle)}>
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
                        <Typography variant="h3" className={cx(sty.tmStyle)}>
                        Sorry you couldn’t make the selected time for our event. Below are other proposed times I am free.
                        </Typography>
                    </Stack>
                    <Stack className={cx(sty.et)} style={{"margin-top":"20px"}}>
                        <Typography className={cx(sty.tmsmStyle,sty.et,sty.borderStyle)}>Thursday, 00/00/0000 00:00 AM</Typography>
                        <Typography className={cx(sty.tmsmStyle,sty.et,sty.borderStyle)}>Thursday, 00/00/0000 00:00 AM</Typography>
                        <Typography className={cx(sty.tmsmStyle,sty.et,sty.borderStyle)}>Thursday, 00/00/0000 00:00 AM</Typography>
                        <Typography className={cx(sty.tmsmStyle,sty.et,sty.borderStyle)}>Thursday, 00/00/0000 00:00 AM</Typography>
                    </Stack>
                    <Stack>
                            <CardContent className={cx(sty.btns,sty.ebtns)}>
                                <CardContent className={cx(sty.btnIn,sty.ebtnIn ,sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Schedule Event
                                    </Button>
                                </CardContent>
                            </CardContent>
                    </Stack>
                    <Stack>
                        <Typography variant="h3" style={{"margin-top":"25px"}} className={cx(sty.tmStyle)}>
                        If these time don’t work please email me to reschedule this event. Thank you!
                        </Typography>
                    </Stack>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}