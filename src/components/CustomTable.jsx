import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import CustomTimer from "./CustomTimer";

const font = "Unbounded";
const tableData = [
  {
    id: 0,
    name: "УЧАСТНИК №1",
    events: "-",
    productionTime: "80",
    warranty: "24",
    paymentTerms: "30%",
    price: {
      total: "3,700,000 руб",
      discount: "-25,000 руб",
      finalPrice: "2,475,000 руб",
    },
    myMove: false,
  },
  {
    id: 1,
    name: "УЧАСТНИК №2",
    events: "-",
    productionTime: "90",
    warranty: "24",
    paymentTerms: "100%",
    price: {
      total: "3,200,000 руб",
      discount: "-25,000 руб",
      finalPrice: "2,475,000 руб",
    },
    myMove: false,
  },
  {
    id: 2,
    name: "УЧАСТНИК №3",
    events: "-",
    productionTime: "75",
    warranty: "22",
    paymentTerms: "60%",
    price: {
      total: "2,800,000 руб",
      discount: "-25,000 руб",
      finalPrice: "2,475,000 руб",
    },
    myMove: true,
  },
  {
    id: 3,
    name: "УЧАСТНИК №4",
    events: "-",
    productionTime: "120",
    warranty: "36",
    paymentTerms: "50%",
    price: {
      total: "2,500,000 руб",
      discount: "-25,000 руб",
      finalPrice: "2,475,000 руб",
    },
    myMove: false,
  },
];
const queue = 0;
const rowLabelList = {
  events: "Наличие комплекса:",
  productionTime: "Срок изоговления:",
  warranty: "Гарантийные обязательства:",
  paymentTerms: "Условия оплаты:",
  price: "Стоимость изготовления лота:",
};
export default function CustomTable() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bidding table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: 240,
                height: 40,
              }}
            >
              <Typography fontFamily={font} variant="body1" fontWeight="bold">
                Ход
              </Typography>
            </TableCell>
            {tableData &&
              tableData.map((el, i) => {
                return (
                  <>
                    <CustomTimer />
                  </>
                );
              })}
          </TableRow>
          <TableRow>
            <TableCell
              sx={{
                width: 240,
                height: 40,
              }}
            >
              <Typography fontFamily={font} variant="body1" fontWeight="bold">
                Параметры и требования
              </Typography>
            </TableCell>
            {tableData &&
              tableData.map((el, i) => {
                return (
                  <TableCell key={i + Date()} align="right">
                    <Typography fontFamily={font} variant="body1">
                      Участник №{i + 1}
                    </Typography>{" "}
                  </TableCell>
                );
              })}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rowLabelList).map((row) => (
            <TableRow
              key={rowLabelList[row]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography fontFamily={font} variant="body1" fontWeight="bold">
                  {rowLabelList[row]}
                </Typography>
              </TableCell>
              {tableData &&
                tableData.map((teammate, index) => {
                  if (row === "price")
                    return (
                      <TableCell
                        key={"rowLabelList" + index + Date()}
                        align="right"
                        display={"flex"}
                        flexDirection={"column"}
                      >
                        <Typography fontFamily={font}>
                          {" "}
                          {Object.keys(teammate[row]).map((price, prIndex) => {
                            return <p>{teammate[row][price]}</p>;
                          })}
                        </Typography>
                      </TableCell>
                    );
                  return (
                    <TableCell
                      key={"rowLabelList" + index + Date()}
                      align="right"
                    >
                      <Typography fontFamily={font}>{teammate[row]}</Typography>
                    </TableCell>
                  );
                })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
