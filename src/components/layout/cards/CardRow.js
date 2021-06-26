import Grid from '@material-ui/core/Grid';
import HomeCard from './HomeCard';

export default function CardRow() {
    let rowItems = [];
    const numRowItems = 3;
    for (let i = 0 ; i < numRowItems; i++) {
        rowItems.push(
            <Grid item xs={4} key={i + '-rowItem'}>
                <HomeCard key={i}/>
            </Grid>
        );
    }
    return (
        <Grid container item sx={12} spacing={3}>
            {rowItems} 
        </Grid>
    );
}