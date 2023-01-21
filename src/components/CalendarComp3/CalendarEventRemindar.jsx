import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import clock from '../img/clock.png';
import noti from '../img/noti.png';
import pgroup from '../img/pgroup.png';
import Checkbox from '@mui/material/Checkbox';
import doc from '../img/doc.png';
import loc from '../img/loc.png';
import logoM from '../img/LogoM.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import calSty from './CalComp_Sty.module.css';

export default function CalendarEventRemindar() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // const [style3, setStyle3] = React.useState(false);

    // const changeStyle2 = () => {
    //     if (style3) {
    //         setStyle3(false);
    //     }
    //     else {
    //         setStyle3(true);
    //     }
    // };
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="firstConnect" className={cx(sty.boxStyle, calSty.boxWH)}>
                    <Card className={cx(sty.inStyle, calSty.boxIn)}>
                        <Stack className={cx(calSty.mar)}>
                            <CardContent className={cx(sty.headerStyle)}>
                                <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                    <input type="text" placeholder='Add A Title' name="code" id="code" />
                                </CardContent>
                                <ImageListItem >
                                    <img src={Close} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={clock} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr)}>
                                        Start
                                    </Typography>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521)}>
                                            00/00/0000
                                        </Typography>
                                        <Typography variant="h1" className={cx(calSty.t61521)}>
                                            00:00 AM
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.mt10)}>
                                    <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr,calSty.mr)}>
                                        End
                                    </Typography>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521)}>
                                            00/00/0000
                                        </Typography>
                                        <Typography variant="h1" className={cx(calSty.t61521)}>
                                            00:00 AM
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.jcs)}>
                                    <Typography variant="h1" className={cx(calSty.t61521)}>
                                        All day
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </CardContent>
                                <CardContent className={cx(sty.headerStyle,sty.padding0)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <input type="text" placeholder='Time Zone' name="code" id="code" />
                                    <ImageListItem >
                                        <img src={Close} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={noti} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                            <CardContent className={cx(sty.headerStyle,sty.padding0)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <input type="text" placeholder='Add a Remindar' name="code" id="code" />
                                    <ImageListItem >
                                        <img src={Close} alt="close" loading="lazy" />
                                    </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={clock} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            Propose Multiple Times
                                        </Typography>
                                        <ImageListItem className={cx(calSty.iconW)}>
                                            <img src={clock} alt="close" loading="lazy" />
                                        </ImageListItem>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={pgroup} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            Add Guests
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={logoM} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100, calSty.mtm)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100, calSty.jcs)}>
                                    <Typography variant="h1" className={cx(calSty.t61521)}>
                                        Add Bearish Call
                                    </Typography>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                            <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={loc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                            <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                                <CardContent className={cx(sty.headerStyle, sty.padding0, calSty.w100)}>
                                    <CardContent className={cx(sty.borderStyle, calSty.w100, calSty.t61521, calSty.dateTimeFlex)}>
                                        <Typography variant="h1" className={cx(calSty.t61521, calSty.tmr, calSty.op1)}>
                                            Location
                                        </Typography>
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack className={cx(calSty.mainStack, calSty.mt10)}>
                        <CardContent className={cx(calSty.iconCard)}>
                                <ImageListItem className={cx(calSty.iconW)}>
                                    <img src={doc} alt="close" loading="lazy" />
                                </ImageListItem>
                            </CardContent>
                        <CardContent className={cx(sty.padding0, calSty.w100,calSty.mr)}>
                            <CardContent className={cx(sty.headerStyle,sty.padding0)}>
                                    <CardContent className={cx(sty.signIn, calSty.signCal, calSty.t61521, sty.inputStyle, sty.NickStyle)}>
                                        <textarea type="text" col="2" className={cx(calSty.ta)} placeholder='Add a Descripion' name="code" id="code" />
                                    </CardContent>
                                </CardContent>
                            </CardContent>
                        </Stack>
                        <Stack  className={cx(calSty.mainStack, calSty.mt10,calSty.jce)}>
                        <Typography variant="h1" className={cx(sty.tmStyle, calSty.tmr, calSty.op1)}>
                                            More Options...
                        </Typography>
                        <CardContent className={cx(sty.btns,calSty.saved)} style={{"margin-top":"0px"}}>
                                    <CardContent className={cx(sty.btnIn, sty.tmStyle, sty.ref,calSty.saved)}>
                                        <Button variant="contained" className={cx(sty.tmStyle)}>
                                            Save
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