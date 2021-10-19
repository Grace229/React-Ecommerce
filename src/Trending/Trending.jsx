import React from 'react'
import './Trending.css'
import { makeStyles, Tab, Typography, Tabs } from '@material-ui/core';
import {TabContext, TabPanel} from '@material-ui/lab';
import Products from './Products';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));
const Trending = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState('1');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <div>
           <div className={classes.root}>
      <TabContext value={value}> 
          <Tabs
        value={value}
        indicatorColor="white"
        textColor="secondary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        centered 
      >
        <Tab label="Featured" value="1" />
        <Tab label="Latest"value="2" />
        <Tab label="Bestseller" value="3" />
        <Tab label="Special" value="4" />
      </Tabs>
        <TabPanel value="1"> <Products />  </TabPanel>
        <TabPanel value="2"><Products /></TabPanel>
        <TabPanel value="3"><Products /></TabPanel>
        <TabPanel value="4"><Products /></TabPanel>
      </TabContext>
      <Typography />
    </div>
        </div>
    )
}

export default Trending
