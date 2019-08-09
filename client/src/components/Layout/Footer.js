import React from 'react'
import MadeWithLove from 'react-made-with-love'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        textAlign: 'center',
        marginTop: 20
    }
}

const Footer = ({ classes }) => (
    <div className={classes.root} >
        <MadeWithLove
            by='Sanjana Kudige Anish Kumar'
            emoji
            link="https://github.com/SanjanaKudige"
        />
    </div>
)


export default withStyles(styles)(Footer)