import { Link } from 'react-router-dom'
import { Grid, Button } from '@mui/material';
import './Nav.css';

export default function Nav() {
    return (
        <div>

            <Grid container spacing={2}>
                <Grid item xs={3}>
                    
                </Grid>
                <Grid item xs={6}>
                    <Link to="/home"><Button>Home</Button></Link>
                    <Link to="/doctors"><Button>All Doctors</Button></Link>
                    <Link to="/about"><Button>About</Button></Link>
                </Grid>
                <Grid item xs={3}>
                <Link to="/home"><Button>Home</Button></Link>
                    <Link to="/doctors"><Button>All Doctors</Button></Link>
                    <Link to="/about"><Button>About</Button></Link>
                </Grid>
            </Grid>



        </div>
    )
}