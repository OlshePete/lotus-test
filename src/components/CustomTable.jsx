import * as React from "react";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import { tableData } from "../data/db";
import { Box, Grid, Typography } from "@mui/material";

export default function CustomTable() {
  const [data] = React.useState(tableData.participants);

  return (
    <TableContainer component={Paper}>
      <Table aria-label="customized table">
        <Grid paddingX={4} container>
          <Grid item xs={12} md={2} my={4}>
            <Typography>
              Наличие комплекса мероприятий, повышающих стандарты качества
              изготовления
            </Typography>
            <Typography>Срок изготовления лота, дней</Typography>
            <Typography>Гарантийные обязательства, мес</Typography>
            <Typography>Условия оплаты</Typography>
            <Typography>
              Стоимость изготовления лота, руб. <br /> (без НДС)
            </Typography>
            <Typography>Действия</Typography>
          </Grid>
          {data &&
            data.map((el, i) => (
              <Grid key={i} my={4} item xs={12} md={2.5} textAlign="center">
                <Typography>{el.name}</Typography>{" "}
                <Typography>{el.events}</Typography>
                <Typography>{el.productionTime}</Typography>
                <Typography>{el.warranty}</Typography>
                <Typography>{el.paymentTerms}</Typography>
                <Box>
                  <Typography>{el.price.total}</Typography>{" "}
                  <Typography>{el.price.discount}</Typography>
                  <Typography>{el.price.finalPrice}</Typography>
                </Box>
              </Grid>
            ))}
        </Grid>
      </Table>
    </TableContainer>
  );
}
