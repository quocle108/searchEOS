import React from 'react';
// import classNames from 'classnames';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
// import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Paper from '@material-ui/core/Paper';
// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import DeleteIcon from '@material-ui/icons/Delete';
// import FilterListIcon from '@material-ui/icons/FilterList';
// import { lighten } from '@material-ui/core/styles/colorManipulator';
import GridContainer from '../GridContainer';
// import Button from '../CustomButtons/Button';
import Button from '@material-ui/core/Button';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  tableCell: {
    backgroundColor: "#E0E0E0",
    color: "black",
    fontSize: 14,
  },

});

const theme = createMuiTheme({
  palette: {
    default: { main: '#ffc107' },
    inherit: { main: '#4caf50' },
    primary: { main: "#2196f3" },
    secondary: { main: '#9c27b0' },
  },
});


const TransferForm = props => {
  const { id, time, from, to, quantity, memo } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="primary">Transfer</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell >{from} → {to} : {quantity}</TableCell>
      <TableCell >{memo}</TableCell>
    </TableRow >
  )
}

const BuyRamByte = props => {
  const { id, time, bytes } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="secondary">Buy RAM</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> Buy {bytes} bytes RAM</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>
  )
}


const DelegatebwForm = props => {
  const { id, time, from, receiver, stakeCpuQuantity, stakeNetQuantity } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="default">Delegate</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> {from}→{receiver}: {stakeCpuQuantity} stakeCpu and {stakeNetQuantity} stakeNet</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>

  )
}
const ClaimRewardsForm = props => {
  const { id, time, owner } = props;
  return (
    <TableRow key={id}>
      <TableCell >{time}</TableCell>
      <TableCell >
        <MuiThemeProvider theme={theme}>
          <Button size="small" variant="outlined" color="inherit">ClaimRewards</Button>
        </MuiThemeProvider>
      </TableCell>
      <TableCell> {owner} Claimed block producer rewards</TableCell>
      <TableCell >{""}</TableCell>
    </TableRow>
  )
}

const ShowAccountHistory = props => {
  const { classes, history } = props;

  return (
    <div>
      <GridContainer>
        {
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes.tableCell}>Date</TableCell>
                <TableCell className={classes.tableCell}>Name</TableCell>
                <TableCell className={classes.tableCell}>Data</TableCell>
                <TableCell className={classes.tableCell}>Memo</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'transfer' ? <TransferForm
                      id={id}
                      time={p.block_time}
                      from={p.action_trace.act.data.from}
                      to={p.action_trace.act.data.to}
                      quantity={p.action_trace.act.data.quantity}
                      memo={p.action_trace.act.data.memo}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'buyrambytes' ? <BuyRamByte
                      id={id}
                      time={p.block_time}
                      payer={p.action_trace.act.data.payer}
                      receiver={p.action_trace.act.data.receiver}
                      bytes={p.action_trace.act.data.bytes}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'delegatebw' ? <DelegatebwForm
                      id={id}
                      time={p.block_time}
                      from={p.action_trace.act.data.from}
                      receiver={p.action_trace.act.data.receiver}
                      stakeCpuQuantity={p.action_trace.act.data.stake_cpu_quantity}
                      stakeNetQuantity={p.action_trace.act.data.stake_net_quantity}
                    /> : ''
                  );
                })
              }
              {
                history.actions.map((p, id) => {
                  return (
                    p.action_trace.act.name === 'claimrewards' ? <ClaimRewardsForm
                      id={id}
                      time={p.block_time}
                      owner={p.action_trace.act.data.owner}
                    /> : ''
                  );
                })
              }
            </TableBody>
          </Table>

        }

      </GridContainer>

    </div>
  )
}

export default withStyles(styles)(ShowAccountHistory);

// let counter = 0;
// function createData(Date, Name, Data, Notes) {
//   counter += 1;
//   return { id: counter, Date, Name, Data, Notes };
// }

// function desc(a, b, orderBy) {
//   if (b[orderBy] < a[orderBy]) {
//     return -1;
//   }
//   if (b[orderBy] > a[orderBy]) {
//     return 1;
//   }
//   return 0;
// }

// function stableSort(array, cmp) {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = cmp(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// }

// function getSorting(order, orderBy) {
//   return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
// }

// const rows = [
//   { id: 'Date', numeric: false, disablePadding: false, label: 'Date' },
//   { id: 'Name', numeric: false, disablePadding: false, label: 'Name' },
//   { id: 'Data', numeric: false, disablePadding: false, label: 'Data' },
//   { id: 'Notes', numeric: false, disablePadding: false, label: 'Notes' },
// ];

// class ShowAccountHistoryHead extends React.Component {
//   createSortHandler = property => event => {
//     this.props.onRequestSort(event, property);
//   };

//   render() {
//     const { onSelectAllClick, order, orderBy, numSelected, rowCount } = this.props;

//     return (
//       <TableHead>
//         <TableRow>
//           <TableCell padding="checkbox">
//             <Checkbox
//               indeterminate={numSelected > 0 && numSelected < rowCount}
//               checked={numSelected === rowCount}
//               onChange={onSelectAllClick}
//             />
//           </TableCell>
//           {rows.map(row => {
//             return (
//               <TableCell
//                 key={row.id}
//                 numeric={row.numeric}
//                 padding={row.disablePadding ? 'none' : 'default'}
//                 sortDirection={orderBy === row.id ? order : false}
//               >
//                 <Tooltip
//                   title="Sort"
//                   placement={row.numeric ? 'bottom-end' : 'bottom-start'}
//                   enterDelay={300}
//                 >
//                   <TableSortLabel
//                     active={orderBy === row.id}
//                     direction={order}
//                     onClick={this.createSortHandler(row.id)}
//                   >
//                     {row.label}
//                   </TableSortLabel>
//                 </Tooltip>
//               </TableCell>
//             );
//           }, this)}
//         </TableRow>
//       </TableHead>
//     );
//   }
// }

// ShowAccountHistoryHead.propTypes = {
//   numSelected: PropTypes.number.isRequired,
//   onRequestSort: PropTypes.func.isRequired,
//   onSelectAllClick: PropTypes.func.isRequired,
//   order: PropTypes.string.isRequired,
//   orderBy: PropTypes.string.isRequired,
//   rowCount: PropTypes.number.isRequired,
// };

// const toolbarStyles = theme => ({
//   root: {
//     paddingRight: theme.spacing.unit,
//   },
//   highlight:
//     theme.palette.type === 'light'
//       ? {
//           color: theme.palette.secondary.main,
//           backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//         }
//       : {
//           color: theme.palette.text.primary,
//           backgroundColor: theme.palette.secondary.dark,
//         },
//   spacer: {
//     flex: '1 1 100%',
//   },
//   actions: {
//     color: theme.palette.text.secondary,
//   },
//   title: {
//     flex: '0 0 auto',
//   },
// });

// let ShowAccountHistoryToolbar = props => {
//   const { numSelected, classes } = props;

//   return (
//     <Toolbar
//       className={classNames(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       <div className={classes.title}>
//         {numSelected > 0 ? (
//           <Typography color="inherit" variant="subheading">
//             {numSelected} selected
//           </Typography>
//         ) : (
//           <Typography variant="title" id="tableTitle">
//             Nutrition
//           </Typography>
//         )}
//       </div>
//       <div className={classes.spacer} />
//       <div className={classes.actions}>
//         {numSelected > 0 ? (
//           <Tooltip title="Delete">
//             <IconButton aria-label="Delete">
//               <DeleteIcon />
//             </IconButton>
//           </Tooltip>
//         ) : (
//           <Tooltip title="Filter list">
//             <IconButton aria-label="Filter list">
//               <FilterListIcon />
//             </IconButton>
//           </Tooltip>
//         )}
//       </div>
//     </Toolbar>
//   );
// };

// ShowAccountHistoryToolbar.propTypes = {
//   classes: PropTypes.object.isRequired,
//   numSelected: PropTypes.number.isRequired,
// };

// ShowAccountHistoryToolbar = withStyles(toolbarStyles)(ShowAccountHistoryToolbar);

// class ShowAccountHistory extends React.Component {
//     constructor(props) {
//         super(props);
//         const {history} = props;
//         this.state = {
//             order: 'asc',
//             orderBy: 'Date',
//             selected: [],
//             data: [
//               createData('1/1/2015', "Transfer", "From Tam To Quoc", "Create new account"),
//               createData('Donut', 452, 25.0, 51),
//             ],
//             page: 0,
//             rowsPerPage: 5,
//           };

//       }




//   handleRequestSort = (event, property) => {
//     const orderBy = property;
//     let order = 'desc';

//     if (this.state.orderBy === property && this.state.order === 'desc') {
//       order = 'asc';
//     }

//     this.setState({ order, orderBy });
//   };

//   handleSelectAllClick = event => {
//     if (event.target.checked) {
//       this.setState(state => ({ selected: state.data.map(n => n.id) }));
//       return;
//     }
//     this.setState({ selected: [] });
//   };

//   handleClick = (event, id) => {
//     const { selected } = this.state;
//     const selectedIndex = selected.indexOf(id);
//     let newSelected = [];

//     if (selectedIndex === -1) {
//       newSelected = newSelected.concat(selected, id);
//     } else if (selectedIndex === 0) {
//       newSelected = newSelected.concat(selected.slice(1));
//     } else if (selectedIndex === selected.length - 1) {
//       newSelected = newSelected.concat(selected.slice(0, -1));
//     } else if (selectedIndex > 0) {
//       newSelected = newSelected.concat(
//         selected.slice(0, selectedIndex),
//         selected.slice(selectedIndex + 1),
//       );
//     }

//     this.setState({ selected: newSelected });
//   };

//   handleChangePage = (event, page) => {
//     this.setState({ page });
//   };

//   handleChangeRowsPerPage = event => {
//     this.setState({ rowsPerPage: event.target.value });
//   };

//   isSelected = id => this.state.selected.indexOf(id) !== -1;


//   render() {
//     const { classes } = this.props;
//     const { data, order, orderBy, selected, rowsPerPage, page } = this.state;
//     const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);
//     console.log("demo_mytest", this.props.history);
//     const myData = this.props.history;

//     console.log("demo_mytest", myData.actions[0].action_trace.act.data.memo);
//     console.log("demo_mytest", myData.actions[2].action_trace.act.data.memo);
//     console.log("demo_mytest", myData.actions[4].action_trace.act.data.memo);





//     return (
//       <div className={classes.root}>

//       <GridContainer>
//       {
//         myData.actions.map(p => {
//           createData(p.action_trace.act.data.memo,1,1,1);

//           this.state.

//           console.log("demo_mytest", p.action_trace.act.data.memo);
//         })
//       }
//       </GridContainer>

//         <ShowAccountHistoryToolbar numSelected={selected.length} />

//         <div className={classes.tableWrapper}>
//           <Table className={classes.table} aria-labelledby="tableTitle">
//             <ShowAccountHistoryHead
//               numSelected={selected.length}
//               order={order}
//               orderBy={orderBy}
//               onSelectAllClick={this.handleSelectAllClick}
//               onRequestSort={this.handleRequestSort}
//               rowCount={data.length}
//             />
//             <TableBody>
//               {stableSort(data, getSorting(order, orderBy))
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map(n => {
//                   const isSelected = this.isSelected(n.id);

//                   return (
//                     <TableRow
//                       hover
//                       onClick={event => this.handleClick(event, n.id)}
//                       role="checkbox"
//                       aria-checked={isSelected}
//                       tabIndex={-1}
//                       key={n.id}
//                       selected={isSelected}
//                     >
//                       <TableCell padding="checkbox">
//                         <Checkbox checked={isSelected} />
//                       </TableCell>
//                       <TableCell >{n.Date}</TableCell>
//                       <TableCell >{n.Name}</TableCell>
//                       <TableCell >{n.Data}</TableCell>
//                       <TableCell >{n.Notes}</TableCell>
//                     </TableRow>
//                   );
//                 })}
//               {emptyRows > 0 && (
//                 <TableRow style={{ height: 30 * emptyRows }}>
//                   <TableCell colSpan={6} />
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </div>

//         <TablePagination
//           component="div"
//           count={data.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           backIconButtonProps={{
//             'aria-label': 'Previous Page',
//           }}
//           nextIconButtonProps={{
//             'aria-label': 'Next Page',
//           }}
//           onChangePage={this.handleChangePage}
//           onChangeRowsPerPage={this.handleChangeRowsPerPage}
//         />
//       </div>
//     );
//   }
// }

// ShowAccountHistory.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
