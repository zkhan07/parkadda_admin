import React, { useState, useEffect } from "react";
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
import ParkingAppbar from "../ParkingAppbar/ParkingAppbar";
import axios from "axios";

function createData(
  ListingID,
  ParkingType,
  Size,
  DisplayName,
  HourlyRate,
  AutoBooking,
  ParkingEnabledStatus,
  CreatedOn,
  Action
) {
  return {
    ListingID,
    ParkingType,
    Size,
    DisplayName,
    HourlyRate,
    AutoBooking,
    ParkingEnabledStatus,
    CreatedOn,
    Action
  };
}

const headCells = [
  {
    id: "ListingID",
    numeric: false,
    disablePadding: true,
    label: "Listing ID",
    minWidth: 150
  },
  {
    id: "ParkingType",
    numeric: true,
    disablePadding: false,
    label: "Parking Type",
    minWidth: 150
  },
  {
    id: "Size",
    numeric: true,
    disablePadding: false,
    label: "Size",
    minWidth: 150
  },
  {
    id: "DisplayName",
    numeric: true,
    disablePadding: false,
    label: "Display Name",
    minWidth: 150
  },
  {
    id: "HourlyRate",
    numeric: true,
    disablePadding: false,
    label: "Hourly Rate",
    minWidth: 150
  },
  {
    id: "AutoBooking",
    numeric: true,
    disablePadding: false,
    label: "Auto Booking",
    minWidth: 150
  },
  {
    id: "ParkingEnabledStatus",
    numeric: true,
    disablePadding: false,
    label: "Parking Enabled Status",
    minWidth: 200
  },
  {
    id: "CreatedOn",
    numeric: true,
    disablePadding: false,
    label: "Created On",
    minWidth: 150
  },
  {
    id: "Action",
    numeric: true,
    disablePadding: false,
    label: "Action",
    minWidth: 150
  }
];

const rows = [
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "zaid",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
  ),
  createData(
    "Jahad",
    "Commercial",
    "SUV",
    "Heara Panan Parking",
    100,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    <CheckCircleIcon style={{ color: "white", color: "#00C569" }} />,
    "27 Jan 2020",
    <div>
      <button
        style={{
          textTransform: "none",
          backgroundColor: "#1D2B44",
          color: "white",
          borderRadius: "5px",
          borderColor: "#1D2B44",
          fontSize: "14px",
          outline: "none"
        }}
      >
        View
      </button>
    </div>
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

  const [items, setItems] = useState("");

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos`)
      .then(res => {
        console.log(res.data);
        setItems(res.data);
      })
      .catch(err => console.log(err));
  }, []);
  console.log(items);

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
              fontSize: "12px",
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

export default function EnhancedTable() {
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
          {/* <ParkingAppbar /> */}
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
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.ListingID}
                      </TableCell>
                      <TableCell align="center">{row.ParkingType}</TableCell>
                      <TableCell align="center">{row.Size}</TableCell>
                      <TableCell align="center">{row.DisplayName}</TableCell>
                      <TableCell align="center">{row.HourlyRate}</TableCell>
                      <TableCell align="center">{row.AutoBooking}</TableCell>
                      <TableCell align="center">
                        {row.ParkingEnabledStatus}
                      </TableCell>
                      <TableCell align="center">{row.CreatedOn}</TableCell>
                      <TableCell align="center">{row.Action}</TableCell>
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