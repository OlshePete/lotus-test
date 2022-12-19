import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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
  },
];
const rowLabelList = {
  events: "Наличие комплекса",
  productionTime: "Срок изоговления",
  warranty: "Гарантийные обязательства",
  paymentTerms: "Условия оплаты",
  price: "Стоимость изготовления лота",
};
export default function CustomTableNew() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="bidding table">
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                width: 240,
              }}
            >
              Параметры и требования
            </TableCell>
            {tableData.map((teammate, index) => (
              <TableCell key={index + Date()} align="right">
                Участник №{index + 1}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(rowLabelList).map((row) => (
            <TableRow
              key={rowLabelList[row]}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {rowLabelList[row]}
              </TableCell>
              {tableData.map((teammate, index) => {
                if (row === "price")
                  return (
                    <TableCell
                      key={"rowLabelList" + index + Date()}
                      align="right"
                      display={"flex"}
                      flexDirection={"column"}
                    >
                      {Object.keys(teammate[row]).map((price, prIndex) => {
                        return <p>{teammate[row][price]}</p>;
                      })}
                    </TableCell>
                  );
                return (
                  <TableCell
                    key={"rowLabelList" + index + Date()}
                    align="right"
                  >
                    {teammate[row]}
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
