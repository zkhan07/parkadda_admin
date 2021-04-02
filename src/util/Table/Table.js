import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from "@material-ui/icons/Delete";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Link } from "react-router-dom";

function createData(
  bookingId,
  name,
  mobileNo,
  vehicleNo,
  vehicleType,
  paymentType,
  paymentAmount,
  dateIn,
  dateOut,
  timeIn,
  timeOut,
  parkingDuration,
  monthlyPass
) {
  return {
    bookingId,
    name,
    mobileNo,
    vehicleNo,
    vehicleType,
    paymentType,
    paymentAmount,
    dateIn,
    dateOut,
    timeIn,
    timeOut,
    parkingDuration,
    monthlyPass
  };
}

const headCells = [
  {
    id: "bookingId",
    // numeric: true,
    // disablePadding: false,
    label: "Booking ID",
    minWidth: 150
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
    minWidth: 150
  },
  {
    id: "mobileNo",
    numeric: true,
    disablePadding: false,
    label: "Mobile No.",
    minWidth: 150
  },
  {
    id: "vehicleNo",
    numeric: true,
    disablePadding: false,
    label: "Vehicle No.",
    minWidth: 150
  },
  {
    id: "vehicleType",
    numeric: true,
    disablePadding: false,
    label: "Vehicle Type",
    minWidth: 150
  },
  {
    id: "paymentType",
    numeric: true,
    disablePadding: false,
    label: "Payment Type",
    minWidth: 150
  },
  {
    id: "paymentAmount",
    numeric: true,
    disablePadding: false,
    label: "Payment Amount",
    minWidth: 150
  },
  {
    id: "dateIn",
    numeric: true,
    disablePadding: false,
    label: "Date In",
    minWidth: 150
  },
  {
    id: "dateOut",
    numeric: true,
    disablePadding: false,
    label: "Date Out",
    minWidth: 150
  },
  {
    id: "timeIn",
    numeric: true,
    disablePadding: false,
    label: "Entry Time",
    minWidth: 150
  },
  {
    id: "timeOut",
    numeric: true,
    disablePadding: false,
    label: "Exit Time",
    minWidth: 150
  },
  {
    id: "parkingDuration",
    numeric: true,
    disablePadding: false,
    label: "Parking Duration",
    minWidth: 150
  },
  {
    id: "monthlyPass",
    numeric: true,
    disablePadding: false,
    label: "Monthly Pass",
    minWidth: 150
  }
];

const rows = [
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "No"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "No"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "No"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  ),
  createData(
    123456789,
    "Zaid Khan",
    8237112233,
    "MH 04 DW 4092",
    "2 Wheeler",
    "Cash",
    250,
    "23/08/2020",
    "24/08/2020",
    "07.00 AM",
    "10.00 PM",
    "12 Hours",
    "Yes"
  )
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell
          padding="checkbox"
          style={{ backgroundColor: "#1D2B44", color: "white" }}
        >
          {/* <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          /> */}
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{
              minWidth: headCell.minWidth,
              backgroundColor: "#1D2B44",
              color: "white",
              // height: "30px",
              fontSize: "14px",
              textAlign: "center"
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1)
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85)
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark
        },
  title: {
    flex: "1 1 100%"
  }
}));

// const EnhancedTableToolbar = (props) => {
//   const classes = useToolbarStyles();
//   const { numSelected } = props;

//   return (
//     <Toolbar
//       className={clsx(classes.root, {
//         [classes.highlight]: numSelected > 0,
//       })}
//     >
//       {numSelected > 0 ? (
//         <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
//           {numSelected} selected
//         </Typography>
//       ) : (
//         <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
//           Nutrition
//         </Typography>
//       )}

//       {numSelected > 0 ? (
//         <Tooltip title="Delete">
//           <IconButton aria-label="delete">
//             <DeleteIcon />
//           </IconButton>
//         </Tooltip>
//       ) : (
//         <Tooltip title="Filter list">
//           <IconButton aria-label="filter list">
//             <FilterListIcon />
//           </IconButton>
//         </Tooltip>
//       )}
//     </Toolbar>
//   );
// };

// EnhancedTableToolbar.propTypes = {
//   numSelected: PropTypes.number.isRequired,
// };

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  // console.log()

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = event => {
    setDense(event.target.checked);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      //   onClick={(event) => handleClick(event, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        {/* <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        /> */}
                      </TableCell>
                      <TableCell
                        align="center"
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.bookingId}
                      </TableCell>
                      <TableCell align="center" key={index}>
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.mobileNo}</TableCell>
                      <TableCell align="center">{row.vehicleNo}</TableCell>
                      <TableCell align="center">{row.vehicleType}</TableCell>
                      <TableCell align="center">{row.paymentType}</TableCell>
                      <TableCell align="center">{row.paymentAmount}</TableCell>
                      <TableCell align="center">{row.dateIn}</TableCell>
                      <TableCell align="center">{row.dateOut}</TableCell>
                      <TableCell align="center">{row.timeIn}</TableCell>
                      <TableCell align="center">{row.timeOut}</TableCell>
                      <TableCell align="center">
                        {row.parkingDuration}
                      </TableCell>
                      <TableCell align="center">{row.monthlyPass}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
