import * as React from 'react'
import { Link, useStaticQuery, graphql} from 'gatsby'
import AppBar from '@material-ui/core/AppBar'
// import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { Toolbar, Button,Typography } from '@material-ui/core'

const Layout = ({ pageTitle,children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }  
  `)
    return(
        <main className=''>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <nav>
            <AppBar elevation={0} position="static">
            <Toolbar className="bg-gray-500">
                <IconButton edge="start" className='' color="inherit" aria-label="menu">
                    {/* <MenuIcon /> */}
                </IconButton>
                <Typography variant="h6" className=''>
                    DILAN
                </Typography>
                <Link to="/" className="">
                    <Button color="inherit">HOME</Button>
                </Link>
                <Link to="/blog" className="">
                <Button color="inherit">Blog</Button>
                </Link>
                <Link to="/about" className="">
                <Button color="inherit">About</Button>
                </Link>
            </Toolbar>
            </AppBar>
        </nav>
        {children}
        </main>
    )

}

export default Layout