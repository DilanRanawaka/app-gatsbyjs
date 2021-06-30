import * as React from 'react'
import Layout from '../components/layout'
import {Button} from "@material-ui/core"

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
    <div className='text-center pt-8'>
    <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>

    <Button className="m-8"variant="contained" color="primary">
        Download CV
    </Button>
    </div>
      
    </Layout>

    
  )
}

export default AboutPage