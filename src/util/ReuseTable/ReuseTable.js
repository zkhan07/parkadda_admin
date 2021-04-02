import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import axios from "axios";
import { useState, useEffect } from "react";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },

  container: {
    maxHeight: 440
  }
});

export default function MatPaginationTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [data, setData] = useState([]);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    const GetData = async () => {
      const result = await axios("https://jsonplaceholder.typicode.com/users");
      setData(result.data);
    };
    GetData();
    console.log(data);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Id
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Name
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                User Name
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Email
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Phone
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Website
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Salary
              </TableCell>

              <TableCell
                style={{ backgroundColor: "#00BBDC", color: "#fff" }}
                align="center"
              >
                Department
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow>
                    <TableCell align="center" component="th" scope="row">
                      {row.id}
                    </TableCell>

                    <TableCell align="center">{row.name}</TableCell>

                    <TableCell align="center">{row.username}</TableCell>

                    <TableCell align="center">{row.email}</TableCell>

                    <TableCell align="center">{row.phone}</TableCell>

                    <TableCell align="center">{row.website}</TableCell>

                    <TableCell align="center">{row.Salary}</TableCell>

                    <TableCell align="center">{row.Department}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
