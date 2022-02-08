import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import { SignUp, Login } from '.'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const  TabsWrappedLabel = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState('login');

  const handleChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="login"
            label="Login"
            wrapped
            {...a11yProps('login')}
          />
          <Tab value="signup" label="Sign up" {...a11yProps('signup')} />
          <Tab value="measurements" label="Measurements" {...a11yProps('measurements')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="login">
        <Login/>
      </TabPanel>
      <TabPanel value={value} index="signup">
        <SignUp/>
      </TabPanel>
      <TabPanel value={value} index="measurements">
        Item Three
      </TabPanel>
    </div>
  );
}
