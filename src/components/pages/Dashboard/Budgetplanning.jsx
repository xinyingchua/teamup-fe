import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Chart, PieSeries } from '@devexpress/dx-react-chart-material-ui'
import { Animation } from '@devexpress/dx-react-chart'

const data = [
  { region: 'Asia', val: 4119626293 },
  { region: 'Africa', val: 1012956064 },
  { region: 'Northern America', val: 344124520 },
  { region: 'Latin America and the Caribbean', val: 590946440 },
  { region: 'Europe', val: 727082222 },
  { region: 'Oceania', val: 35104756 },
]

export default class Demo extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      data,
    }
  }

  

  render() {
    const { data: chartData } = this.state

    return (
      <Grid container>
        <Grid item xs={6}>
          <Chart data={chartData} height={125}>
            <PieSeries
              valueField='val'
              argumentField='region'
              innerRadius={0.6}
            />
            <Typography color='primary' variant='h6'>
              Initial Budget
            </Typography>
            <Typography color='primary' variant='h6'>
              {this.props.budget}
            </Typography>
            <Animation />
          </Chart>
        </Grid>

        <Grid item xs={6}>
          <Typography color='primary' variant='h6'>
            Current Budget
          </Typography>

          <Typography
            style={{ color: '#E40243', fontWeight: '500' }}
            variant='h3'
          >
            {this.props.currentBudget}
          </Typography>
          {/* <Typography color='primary' variant='h5'>
            Over your budget!
          </Typography> */}
        </Grid>
      </Grid>
    )
  }
}

// export default function Chart() {
//   const theme = useTheme();

//   return (
//     <React.Fragment>
//       <Grid container>
//         <Grid item xs={6} md={6} lg={6}>
//         <Title>Budget: $10000</Title>
//           <Typography fontWeight="fontWeightbold" color="secondary" variant="h1">
//             92
//           </Typography>
//           <Typography color="primary">
//             Days to D-Day
//           </Typography>
//         </Grid>

//     <Grid item xs={6} md={6} lg={6}>
//       <Typography color="primary" variant="h5">
//         Whoops! You are
//       </Typography>
//       <Typography style={{color: '#E40243', fontWeight:"500" }}variant="h2">
//         -$500
//       </Typography>
//       <Typography color="primary" variant="h5">
//         Over your budget!
//       </Typography>
//     </Grid>
//   </Grid>
// </React.Fragment>

//   );
// }
