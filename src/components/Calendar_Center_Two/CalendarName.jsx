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

export default function CalendarName() {
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="CName" style={{ "height": "200px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Calendar Name   
                            </Typography>
                            <ImageListItem >
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <CardActions className={cx(sty.signSec)}>
                            <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" placeholder='Nickname' name="Cal" id="Cal" />
                                <CardContent className={cx(sty.btns,sty.save)} style={{"margin-top":"0px"}}>
                                    <CardContent className={cx(sty.btnIn, sty.tsStyle, sty.ref,sty.save)}>
                                        <Button size="small" variant="contained" className={cx(sty.tmStyle)}>
                                            Save
                                        </Button>
                                    </CardContent>
                                </CardContent>
                                <input className={cx(sty.colorSelect)} type="color" name="color" id="colors"/>
                                <label For="colors"><img src={Close} alt="close" loading="lazy" /></label>
                            </CardContent>
                            <CardContent className={cx(sty.btns,sty.ebtns)}>
                            <CardContent style={{ "width": "auto !important" }} className={cx(sty.btnIn, sty.ebtnIn,sty.tsStyle, sty.ref)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Refresh
                                    </Button>
                                </CardContent>
                                <CardContent style={{ "width": "auto !important" }} className={cx(sty.btnIn,sty.padding0,sty.ebtnIn, sty.tsStyle, sty.yel)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Hide
                                    </Button>
                                </CardContent>
                                <CardContent style={{ "width": "auto !important" }} className={cx(sty.btnIn,sty.ebtnIn, sty.tsStyle, sty.out)}>
                                    <Button variant="contained" className={cx(sty.tmStyle)}>
                                        Logout
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