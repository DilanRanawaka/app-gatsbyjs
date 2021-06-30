import * as React from 'react'
import Layout from '../components/layout'
// import TextField from '@material-ui/core/TextField';
import { Button, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

const BlogPage = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

  return (
    <Layout pageTitle="Blog">
        <div className=" pt-4">
        <p className="font-black text-center">Here the Blog, </p>
        <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4 m-8 ...">
            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>

            <div>
                <Card className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                        be{bull}nev{bull}o{bull}lent
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                        well meaning and kindly.
                        <br />
                        {'"a benevolent smile"'}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        
        <div className="text-center">
            <TextField required id="standard-required" label="Name" defaultValue="" />
            <br/>
            <br/>
            <TextField required id="standard-required" label="Email" defaultValue="" />

            <br/>
            <br/>

            <Button variant="outlined" color="primary">
                Submit
            </Button>
        </div>
            
        </div>
            
    </Layout>
  )
}


export default BlogPage