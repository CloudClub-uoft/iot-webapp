// Grid Functionality
import Grid from '@material-ui/core/Grid';
import CardRow from './CardRow';

export default function CardGrid() {
    let gridRows = [];
    const numRows = 3;
    for (let i = 0; i < numRows; i++) {
      gridRows.push(
        <>
        <CardRow key={i + '-row'}/>
        <br></br>
        </>
      );
    }
    
    return (
        <Grid container spacing={1}>
            {gridRows}
        </Grid>
    );
}