import React, { Fragment, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from "react-redux";
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

import styles from './help-and-docs.module.css';

const getModalStyle = () => {
  const top = 15;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-50%, -${left}%)`,
  };
};

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '50%',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const HelpAndDocsModal = (props) => {
  const {
    isOpen,
    handleClose,
    serviceDocs,
    serviceName,
    displayName
  } = props;

  const closeModal = (event) => {
    if (typeof handleClose === 'function') {
      handleClose(event);
    }
  }

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">{displayName} Help and Docs</h2>
      <Grid
        container
        spacing={4}
      >
        {serviceDocs.website && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Website
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.serviceDocs && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Official Documentation
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.docker && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Docker
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.source && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Source Code
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.community && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Community
              </Box>
            </Link>
        </Grid>
        )}
        {serviceDocs.communityChat && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Chat and Messaging
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.other && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                {serviceName} Other
              </Box>
            </Link>
          </Grid>
        )}
        {serviceDocs.onlineRendered && (
          <Grid item display="flex" xs={7} md={5}>
            <Link
              href="#"
              rel="noopener"
              target="_blank"
              component="button"
              className={styles.docsLink}
              color="inherit"
            >
              <Box className={styles.docsInner}>
                IOTstack Documentation for {serviceName}
              </Box>
            </Link>
          </Grid>
        )}
      </Grid>

      <Box pt={6}>
        <Grid container>
          <Grid item>
            <Button variant="contained" onClick={(evt) => { closeModal(evt); }}>Close</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
  
  return (
    <Fragment>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Fragment>
  );
};

export default HelpAndDocsModal;