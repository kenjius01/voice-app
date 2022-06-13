import {
  Avatar,
  Chip,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  Tooltip,
} from '@mui/material';
import React from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';

export const CommandModal = ({ setOpen, open, Transition }) => {
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
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
                  <Avatar style={{ backgroundColor: '#fff', color: '#00ab55' }}>
                    L
                  </Avatar>
                }
                label='Give me the latest news'
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
                  <Avatar style={{ backgroundColor: '#fff', color: '#7635dc' }}>
                    C
                  </Avatar>
                }
                label='Give me the latest {Category:Technology,Music,Science,...} news'
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
                  <Avatar style={{ backgroundColor: '#fff', color: '#1ccaff' }}>
                    T
                  </Avatar>
                }
                label="What's up with {terms: Bitcoin, PlayStation 5, Smartphones, Donald Trump...}"
                clickable
                style={{
                  margin: '5px',
                  backgroundColor: '#1ccaff',
                  color: '#fff',
                }}
              />
              <Chip
                size='medium'
                avatar={
                  <Avatar style={{ backgroundColor: '#fff', color: '#ff00ff' }}>
                    S
                  </Avatar>
                }
                label='Give me the news from {source: CNN, ABC news,...}'
                clickable
                style={{
                  margin: '5px',
                  backgroundColor: '#ff00ff',
                  color: '#fff',
                }}
              />
              <Chip
                size='medium'
                avatar={
                  <Avatar style={{ backgroundColor: '#fff', color: '#fda92d' }}>
                    O
                  </Avatar>
                }
                label='Open the article number {news number}'
                clickable
                style={{
                  margin: '5px',
                  backgroundColor: '#fda92d',
                  color: '#fff',
                }}
              />
              <Chip
                size='medium'
                avatar={
                  <Avatar style={{ backgroundColor: '#fff', color: '#FF2442' }}>
                    G
                  </Avatar>
                }
                label='Go Back'
                clickable
                style={{
                  margin: '5px',
                  backgroundColor: '#FF2442',
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
          paddingRight: '10px',
          width: '100%',
        }}
      >
        <Tooltip title='Info'>
          <IconButton aria-label='command' onClick={handleClickOpen}>
            <LightbulbIcon
              style={{
                fontSize: 40,
                display: 'flex',
                marginTop: '30px',
                color: '#33cc33',
              }}
            />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};
