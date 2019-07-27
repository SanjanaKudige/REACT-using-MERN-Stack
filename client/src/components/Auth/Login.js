import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'

const styles = {
    TextField: {
        width: '100%',
        marginBottom: 5
    },
    btnBlock: {
        textAlign: 'center',
        marginBottom: 10,
        marginTop: 20
    }
}

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors })
        }
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password,
        }
        // console.log(userData)
        this.props.loginUser(userData)
    }
    render() {
        const { classes } = this.props;
        const { errors } = this.state
        return (
            <Paper style={{ padding: 15 }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                        type="email"
                        label="Email"
                        className={classes.TextField}
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        helperText={errors.email ? errors.email : ''}
                        error={errors.email ? true : false}
                    />

                    <TextField
                        label="Password"
                        type="password"
                        className={classes.TextField}
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        helperText={errors.password ? errors.password : ''}
                        error={errors.password ? true : false}
                    />

                    <div className={classes.btnBlock}>
                        <Button variant="outlined" type="submit"> Submit </Button>
                    </div>
                </form>
            </Paper>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})


export default connect(mapStateToProps, { loginUser })(withRouter(withStyles(styles)(Login)))

// export default withStyles(styles)(Register)