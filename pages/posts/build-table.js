import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import countries from "../../countries.json";
import Link from "next/link";

const useStyles = makeStyles({
  table: {
    maxWidth: 500,
    "& .MuiTableCell-root": {
      borderRight: "1px solid rgba(224, 224, 224, 1)" }
  },

  tableHead: {
    backgroundColor: '#ADD8E6'
  },

  tableRow: {
    padding: "1"
  },
});


export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell>Country Name</TableCell>
            <TableCell align ="right">Abbreviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.entries(countries).map((value, i) => (
            <TableRow key={i}>
              <TableCell>
              <Link href="/posts/[id]" as={"/posts/" + value[0]}>
                <a>{value[1].title}</a>
                </Link>
              </TableCell>
              <TableCell align="right">{value[1].content}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
