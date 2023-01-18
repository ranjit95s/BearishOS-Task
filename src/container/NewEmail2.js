import * as React from 'react';
import Box from '@mui/material/Box';
import ImageListItem from '@mui/material/ImageListItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import cx from 'classnames';
import { StyledEngineProvider } from '@mui/material/styles';
import "@fontsource/source-serif-pro";
import Close from '../components/img/Close.png'
import attachment from '../components/img/attachment.png'
import LD from '../components/img/LD.png'
import link from '../components/img/link.png'
import remove from '../components/img/remove.png'
import Share from '../components/img/Share.png'
import trash from '../components/img/trash.png'


import sty from '../components/sty.module.css'
function NewEmail2() {
  return (
    <>
    <StyledEngineProvider injectFirst>
    <Box component="NewEmail2" className={cx(sty.main2)}>
      <Card className={cx(sty.mainStyle)}>
            <CardContent className={cx(sty.headers)}>
              <CardContent className={cx(sty.headerContent,sty.padding0)}>
                <ImageListItem><img className={cx(sty.hello)} src={Share} alt="hero" /></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.padding0,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle)}>
                    <CardContent className={cx(sty.hoverBody)}>
                      <Typography className={cx(sty.tsStyle)}>Share Email Alpha</Typography>
                      <CardContent className={cx(sty.peek,sty.tsStyle)}></CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
                <Typography className={cx(sty.spanHide)}>Subject</Typography>
              </CardContent>
              <CardContent className={cx(sty.headerContent,sty.padding0)}>
              <ImageListItem><img src={remove} alt="hero" className={cx(sty.imgStyle,sty.padding0)} /></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.padding0,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle)}>
                    <CardContent className={cx(sty.hoverBody)}>
                      <Typography className={cx(sty.tsStyle)}>Minimize Draft</Typography>
                      <CardContent className={cx(sty.peek,sty.tsStyle)}></CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
                <ImageListItem><img src={Close} alt="hero" className={cx(sty.imgStyle,sty.padding0)}/></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.padding0,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle)}>
                    <CardContent className={cx(sty.hoverBody)}>
                      <Typography className={cx(sty.tsStyle)}>Close</Typography>
                      <CardContent className={cx(sty.peek,sty.tsStyle)}></CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </CardContent>
            </CardContent>
            <CardContent className={cx(sty.headerBody)}>
              <CardContent  className={cx(sty.composeBody)}>
                <Typography>From</Typography>
                <input type="text" name="fromId" id="userId" defaultValue="narutouzumaki2002@gmail.com" />
            </CardContent>
            <CardContent className={cx(sty.composeBody,sty.borderBStyle)}>
                  <Typography>To</Typography>
                  <input type="text" name="toId" id="toId" />
              <CardContent  className={cx(sty.spanInv)}>
                <Typography varient="h5" className={cx(sty.spanInv)}>CC</Typography>
                <Typography varient="h5" className={cx(sty.spanInv)}>BCC</Typography>
              </CardContent>
            </CardContent>
            <CardContent className={cx(sty.composeBody,sty.borderBStyle)}>
              <input type="text" name="cc" id="cc" />
              <Typography className={cx(sty.spanInv)}>CC</Typography>
            </CardContent>
            <CardContent className={cx(sty.composeBody,sty.borderBStyle)}>
              <input type="text" name="bcc" id="bcc" />
              <Typography className={cx(sty.spanInv)}>BCC</Typography>
            </CardContent>
              <CardContent className={cx(sty.composeBody,sty.borderBStyle)}>
              <input type="text" name="subject" id="subject" placeholder='Subject' />
            </CardContent>
            <CardContent className={cx(sty.composeBody)}>
              <textarea name="composeMain" id="composeMain"></textarea>
            </CardContent>
            </CardContent>
            <CardContent className={cx(sty.ComposeLower)}>
              <CardContent className={cx(sty.ComposeBtns)}>
              <CardContent className={cx(sty.ComposeBtns)}>
                <ImageListItem><img src={link} alt="hero" /></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle,sty.comex)}>
                    <CardContent className={cx(sty.hoverBody,sty.comBtn)}>
                      <input className={cx(sty.borderStyle)} type="text" name="link" id="link" />
                      <CardContent className={cx(sty.btnStyle)}>
                        <button className={cx(sty.btnStyles)}> Add Link </button>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </CardContent>
              <CardContent className={cx(sty.ComposeBtns)}>
                <ImageListItem><img src={attachment} className={cx(sty.hello)} alt="hero" /></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle)}>
                    <CardContent className={cx(sty.hoverBody)}>
                      <Typography className={cx(sty.tsStyle)}>Add Attachment</Typography>
                      <CardContent className={cx(sty.peek)}></CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </CardContent>
              <CardContent className={cx(sty.ComposeBtns)}>
                <ImageListItem><img src={trash} alt="hero" /></ImageListItem>
              </CardContent>
              <CardContent className={cx(sty.ComposeBtns,sty.borderStyle)}>
                <Typography >Send</Typography>
                <ImageListItem><img src={LD} alt="hero" /></ImageListItem>
                <CardContent className={cx(sty.hoveroutStyle,sty.spanHide)}>
                  <CardContent className={cx(sty.hoverStyle,sty.comexx)}>
                    <CardContent className={cx(sty.hoverBody,sty.comBtn)}>
                    <Typography className={cx(sty.tmStyle)}>Schedule Email</Typography>
                    <CardContent className={cx(sty.datetime,sty.borderStyle,sty.tmStyle)}>
                      <CardContent className={cx(sty.padding0)}>00/00/0000</CardContent>
                      <CardContent className={cx(sty.padding0)}>00:00 AM</CardContent>
                    </CardContent>
                      <CardContent className={cx(sty.btnStyle)}>
                        <Button className={cx(sty.btnStyles)}> Schedule Now </Button>
                      </CardContent>
                    </CardContent>
                  </CardContent>
                </CardContent>
              </CardContent>
              </CardContent>
            </CardContent>
      </Card>
    </Box>
    </StyledEngineProvider>
    </>
  )
}

export default NewEmail2