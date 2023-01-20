import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Close from '../img/Close.png';
import sem from '../img/sem.png';
import ex from '../img/smallEx.png';
import sol from '../img/sol.png';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import sty from '../sty.module.css';

export default function ConnectAccount_C() {
    return (
        <>
        <StyledEngineProvider injectFirst>
            <Box component="firstConnect" className={cx(sty.boxStyle)} style={{"height":"300px"}}>
                <Card className={cx(sty.inStyle)}>
                    <CardContent className={cx(sty.headerStyle)}>
                        <Typography variant="h1" className={cx(sty.tlStyle)}>
                            Connect An Account
                        </Typography>
                        <ImageListItem style={{"display":"flex"}}>
                            <img src={Close} alt="close" loading="lazy" />
                            <img src={Close} alt="close" loading="lazy" />
                        </ImageListItem>
                    </CardContent>
                    <CardActions  className={cx(sty.signSec)}>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sol} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Create New Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sem} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Google Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={sol} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                            Microsoft Calendar
                        </Typography>
                    </Button>
                    <Button className={cx(sty.signIn, sty.tlStyle)}>
                        <img src={ex} alt="email" />
                        <Typography variant="h1" className={cx(sty.inText,sty.tmStyle)}>
                        Microsoft Teams
                            <span className={cx(sty.spanStyle,sty.tsStyle)}> Alpha </span>
                        </Typography>
                    </Button>
                    </CardActions>
                </Card>
            </Box>
            </StyledEngineProvider>
        </>
    );
}