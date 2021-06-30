import * as React from "react"
import "../styles/global.css"
import Layout from '../components/layout'
import {Button, TextField} from '@material-ui/core/'
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { StaticImage } from 'gatsby-plugin-image'




const IndexPage = () => {

    

  return (
      <Layout pageTitle="DILAN">
            <div className="">

            <div className="text-center ">
                <h1 className="text-blue-600 text-4xl mt-4">Dilan Ranawaka</h1>
                <br/>
                <Button className="hover:bg-green-500 !important"variant="contained" color="primary">
                        Download CV
                </Button>
                
                
                
                <p className="text-black-500 w-200 md:w-50 lg:w-200 mt-8" >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi leo lorem, gravida sed nisi vitae, auctor mollis arcu. Aliquam nulla ex, 
                tempor tristique posuere et, vestibulum et ipsum. Morbi venenatis aliquet vehicula. Nam mauris lectus, ornare eget augue non, iaculis feugiat lectus. 
                Curabitur semper eros venenatis, sodales felis ac, porttitor est. In nec mollis dolor. Morbi id nisi libero. Donec sagittis tortor libero,
                at bibendum quam sodales id. Duis enim augue, vulputate ut bibendum malesuada, ultrices sit amet nulla. Suspendisse quis pretium felis.
                </p>
            </div>

            <br/>

            <div className="">
                <div className="mr-10 ml-10">
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography className="font-extrabold text-red-900">Developer</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            >
                            <Typography className="font-semibold">Udergraduate</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                        >
                        <Typography className=''>Photographer</Typography>
                        </AccordionSummary>
                    </Accordion>
                </div>
                <br/>

                <div className="grid grid-rows-4 md:grid-rows-1 grid-flow-col gap-4 m-8 ...">
                    <div className="">
                        <Card>
                        <CardActionArea>
                            <CardMedia>
                            <StaticImage className=" h-16 w-32"
                                    alt="cvr"
                                    src="../images/d.jpg"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    React
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    create-react-app
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className="">
                    <Card className=''>
                        <CardActionArea>
                            <CardMedia>
                            <StaticImage className=" h-16 w-32"
                                    alt="cvr"
                                    src="../images/d.jpg"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Vue
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    create-react-app
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className="">
                    <Card >
                        <CardActionArea>
                            <CardMedia>
                            <StaticImage className=" h-16 w-32"
                                    alt="cvr"
                                    src="../images/d.jpg"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Angular
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    create-react-app
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                    <div className="">
                    <Card className=''>
                        <CardActionArea>
                        <CardMedia>
                            <StaticImage className=" h-16 w-32"
                                    alt="cvr"
                                    src="../images/d.jpg"
                                />
                            </CardMedia>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Bootsrap
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    create-react-app
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                            View
                            </Button>
                            <Button size="small" color="primary">
                            Learn More
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                </div>

                <div className="grid grid-rows-6 max-w-full md:grid-rows-3 grid-flow-col gap-4 ">
                    <div className="row-span-3" >
                    <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Morbi leo lorem, 
                        gravida sed nisi vitae, auctor mollis arcu.<br/>
                        Aliquam nulla ex, 
                        tempor tristique posuere et, vestibulum et ipsum.</p>
                    </div>
                    <div className="col-span-2  ">
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Morbi leo lorem, 
                        gravida sed nisi vitae, auctor mollis arcu.<br/>
                        Aliquam nulla ex, 
                        tempor tristique posuere et, vestibulum et ipsum.</p>
                    </div>
                    <div className="row-span-2 col-span-2 ... ">
                        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                            Morbi leo lorem, 
                            gravida sed nisi vitae, auctor mollis arcu.<br/>
                            Aliquam nulla ex, 
                            tempor tristique posuere et, vestibulum et ipsum.
                        </p>
                    </div>
                </div>

                

                {/* <div className="justify-items-center md:justify-items-center">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                </p>
                </div> */}
                

            </div>

            <div className="Footer text-center bg-gray-100 ">
                <h3 className="text-blue-500 text-2xl mt-10">Have any problem, Contact Us.</h3>
                <TextField  type="text" label="Name" />
                <br/>
                <br/>
                <TextField  type="email" label="Email"/>
                <br/>
                <br/>
                <Button className="hover:bg-green-500 !important mb-6"variant="outlined" color="primary">
                    Submit
                </Button>
            </div>
            </div>

      </Layout>
    
    
  )
}

export default IndexPage
