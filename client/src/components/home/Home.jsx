import './home.css';

import React, { useState } from 'react';
import { Header } from '../header/Header';
import {
  Avatar,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Slide,
  Tooltip,
} from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const Home = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <div className='home'>
      <Header />
      <div className='home-container'>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby='alert-dialog-slide-title'
          aria-describedby='alert-dialog-slide-description'
        >
          <DialogTitle
            id='alert-dialog-slide-title'
            style={{ textAlign: 'center', fontWeight: '700' }}
          >
            COMMANDS
          </DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-slide-description'>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <Chip
                  size='medium'
                  avatar={
                    <Avatar
                      style={{ backgroundColor: '#fff', color: '#00ab55' }}
                    >
                      M
                    </Avatar>
                  }
                  label='I want to see movies/ Go to movies page.'
                  clickable
                  style={{
                    margin: '5px',
                    backgroundColor: '#00ab55',
                    color: '#fff',
                  }}
                />
                <Chip
                  size='medium'
                  avatar={
                    <Avatar
                      style={{ backgroundColor: '#fff', color: '#7635dc' }}
                    >
                      N
                    </Avatar>
                  }
                  label='I want read some news/ Go to news page.'
                  clickable
                  style={{
                    margin: '5px',
                    backgroundColor: '#7635dc',
                    color: '#fff',
                  }}
                />
                 <Chip
                  size='medium'
                  avatar={
                    <Avatar
                      style={{ backgroundColor: '#fff', color: '#8d9689e6' }}
                    >
                      N
                    </Avatar>
                  }
                  label='Go to the weather page'
                  clickable
                  style={{
                    margin: '5px',
                    backgroundColor: '#8d9689e6',
                    color: '#fff',
                  }}
                />
                <Chip
                  size='medium'
                  avatar={
                    <Avatar
                      style={{ backgroundColor: '#fff', color: '#1ccaff' }}
                    >
                      H
                    </Avatar>
                  }
                  label='Go back to HomePage'
                  clickable
                  style={{
                    margin: '5px',
                    backgroundColor: '#1ccaff',
                    color: '#fff',
                  }}
                />
                
              </div>
            </DialogContentText>
          </DialogContent>
        </Dialog>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
          }}
        >
          <Tooltip title='Info'>
            <IconButton aria-label='command' onClick={handleClickOpen}>
              <HelpIcon
                style={{ fontSize: 40, display: 'flex', color: '#3d7aff' }}
              />
            </IconButton>
          </Tooltip>
        </div>
        <div className='home-content'>
          <div className='home-intro'>
            <h1>In-app voice assistant for Entertainment!</h1>
            <p>
              Join with us! You can watch movies or read newspaper only by your
              voice. That's very easy to use!
            </p>
          </div>
          <div className='home-img'>
            <img
              src='https://preview.colorlib.com/theme/podcast/images/1x/xasset-1.png.pagespeed.ic.a_VX6ghwiv.png'
              alt=''
            />
          </div>
        </div>
        <div className='home-platform'>
          <div className='home-platform-content'>
            <h2 className='platform-title'>The complete Voice AI Platform</h2>
            <div className='platform-subtitle'>
              With Alan, you get all the tools you need in one place. Empower
              your developers to build, test and deploy voice interfaces in no
              time.
            </div>
            <div className='platform-list'>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Developer-friendly suite of tools</h3>
                  <div className='platform-info'>
                    Alan Studio, a simple but powerful IDE, is tailored to the
                    challenges of voice interface design. Write and test
                    conversational scenarios, maintain dialog versions and
                    publish the results to a sandbox or the production
                    environment. Focus on bigger things and let Alan take care
                    of the rest.
                  </div>
                </div>
              </div>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform2.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Instant integration for any platform</h3>
                  <div className='platform-info'>
                    With lightweight Alan SDKs, you can target any mobile and
                    web application. Design your voice assistant once and deploy
                    it to Web, iOS, Android, and cross-platform solutions:
                    Flutter, React Native, React, Apache Cordova, Ionic.
                  </div>
                </div>
              </div>
              <div className='platform-item'>
                <div className='platform-item-img'>
                  <img src='./platform3.png' alt='' />
                </div>
                <div className='platform-content'>
                  <h3>Advanced conversational analytics</h3>
                  <div className='platform-info'>
                    Alan captures key data points such as users' utterances,
                    frequency of use and session length to let you see how
                    customers interact with a voice assistant in your app.
                    Leverage this data to understand users' behavior and flows,
                    identify unhandled voice commands and optimize the voice
                    assistant effectiveness.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
