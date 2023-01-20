import * as React from 'react';
import Box from '@mui/material/Box';
// import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
export default function CalendarWorkSpace() {
    const [style3, setStyle3] = React.useState(false);
    const [accessOne, setAccessOne] = React.useState('can edit');
    const handleChange = (event) => {
        setAccessOne(event.target.value)
    }
    // const menuProps = {
    //     getContentAnchorEl: null,
    //     anchorOrigin: {
    //       vertical: "bottom",
    //       horizontal: "left"
    //     }
    //   };
    const changeStyle2 = () => {
        if(style3){
            setStyle3(false);
        }
        else {
            setStyle3(true);
        }
    };
    return (
        <>
            <StyledEngineProvider injectFirst>
                <Box component="CWorkSpace" style={{ "height": "600px", "width": "400px" }} className={cx(sty.boxStyle)}>
                    <Card className={cx(sty.inStyle)} style={{ "width": "350px" }}>
                        <CardContent className={cx(sty.headerStyle)}>
                            <Typography varient="h1" className={cx(sty.tlStyle)}>
                                Share This [WorkSpace]
                            </Typography>
                            <ImageListItem style={{ "display": "flex" }}>
                                <img src={Close} alt="close" loading="lazy" />
                                <img src={Close} alt="close" loading="lazy" />
                            </ImageListItem>
                        </CardContent>
                        <Stack>
                            <Typography variant="h1" className={cx(sty.tmsmStyle)}>You are about to share [Name of Workspace], and all items within this workspace.</Typography>
                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.signIn,sty.rel ,sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <img src={Close} alt="close" loading="lazy" />
                                <input onClick={changeStyle2} type="text" placeholder='Invite User by Email' name="Cal" id="Cal" />
                                    <Stack className={style3 ? cx(sty.ddd,sty.abs,sty.padding0) : cx(sty.ddd,sty.abs,sty.padding0,sty.spanHide)}>
                                        <CardContent className={cx(sty.user,sty.padding0)} onClick={changeStyle2}>
                                            <Typography variant="h1" className={cx(sty.pic,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h1" className={cx(sty.fn,sty.tmsmStyle,sty.padding0)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.en,sty.tmsmStyle,sty.padding0)}>
                                                    Email of user
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                        <CardContent className={cx(sty.user,sty.padding0)} onClick={changeStyle2}>
                                            <Typography variant="h1" className={cx(sty.pic,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                            </Typography>
                                            <CardContent className={cx(sty.userEmail,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h1" className={cx(sty.fn,sty.tmsmStyle,sty.padding0)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h1" className={cx(sty.en,sty.tmsmStyle,sty.padding0)}>
                                                    Email of user
                                                </Typography>
                                            </CardContent>
                                        </CardContent>
                                    </Stack>
                            </CardContent>
                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.minHeight,sty.padding0)}>
                                {/* default state */}
                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img  src={Close} alt="hero" /></ImageListItem>
                                        {/* <Stack className={style4 ? cx(sty.ddd,sty.abs,sty.padding0) : cx(sty.ddd,sty.abs,sty.padding0,sty.spanHide)}>
                                        <CardContent className={cx(sty.user,sty.padding0)} onClick={changeStyle3}>
                                            <Typography variant="h1" className={cx(sty.pic,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                            </Typography>
                                        </CardContent>
                                        <CardContent className={cx(sty.user,sty.padding0)} onClick={changeStyle3}>
                                            <Typography variant="h1" className={cx(sty.pic,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                            </Typography>
                                        </CardContent>
                                    </Stack> */}
                                    </CardContent>
                                </CardContent>

                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name 2
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user 2
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                                </CardContent>

                            </CardContent>
                        </Stack>
                        <Stack style={{"margin-top":"20px"}}>
                            <Typography variant="h1" className={cx(sty.tmsmStyle)}>All Current Members</Typography>
                        </Stack>
                        <Stack>
                            <CardContent className={cx(sty.minHeights,sty.padding0)}>
                                {/* default state */}
                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name 2
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user 2
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                                </CardContent>

                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name 3
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user 3
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                                </CardContent>
                                <CardContent className={cx(sty.padding0,sty.flexWS)}>
                                    <CardContent style={{"display":"flex","justify-content": "start","align-items": "center","padding": "0px","margin-bottom":"20px"}} ClassName={cx(sty.userInfo,sty.tmsmStyle,sty.padding0)}>
                                        <Typography variant="h5" className={cx(sty.pic,sty.picc,sty.tmsmStyle,sty.padding0)}>
                                                TU
                                        </Typography>
                                        <CardContent className={cx(sty.userEmail,sty.flexUser,sty.tmsmStyle,sty.padding0)}>
                                                <Typography variant="h5" className={cx(sty.fn,sty.tmsmStyle)}>
                                                    Full Name 4
                                                </Typography>
                                                <Typography variant="h6" className={cx(sty.en,sty.tmsmStyle)}>
                                                    Email of user 4
                                                </Typography>
                                        </CardContent>
                                    </CardContent>
                                    <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                                </CardContent>

                            </CardContent>
                        </Stack>
                        <Stack style={{"margin-top":"20px","margin-bottom":"20px","flex-direction":"row"}} className={cx(sty.flexWS)}>
                        <CardContent className={cx(sty.ComposeBtns,sty.tmsmStyle)}>
                                        <Typography className={cx(sty.tmsmStyle)}>Sharable Link</Typography>
                                    </CardContent>
                        <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.en,sty.tsStyle)}>AnyOne</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                        </CardContent>
                        <CardContent className={cx(sty.ComposeBtns,sty.borderStyle,sty.tsStyle)}>
                                        <Typography className={cx(sty.en,sty.tsStyle)}>Can Edit</Typography>
                                        <ImageListItem className={cx(sty.imgr)}><img src={Close} alt="hero" /></ImageListItem>
                                    </CardContent>
                        </Stack>
                        <Stack>
                        <CardContent className={cx(sty.signIn, sty.tmStyle, sty.inputStyle, sty.NickStyle)}>
                                <input type="text" value="app.bearishos.com/shareable-line-example" readonly name="Cal" id="Cal" />
                                </CardContent>
                        </Stack>
                        <Stack>
                        <CardContent style={{"display":"flex","justify-content": "end"}} className={cx(sty.btns,sty.ebtns)}>
                                <CardContent style={{"display":"flex","justify-content": "end"}}  className={cx(sty.btnIn,sty.ebtnIn ,sty.tsStyle, sty.ref)}>
                                    <Button style={{"margin-right":"0px"}}  variant="contained" className={cx(sty.tmStyle,sty.ewid)}>
                                        Update
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