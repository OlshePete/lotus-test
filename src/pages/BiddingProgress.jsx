import React from "react";
import {
  Box,
  Button,
  Chip,
  IconButton,
  Modal,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CustomTimer from "../components/CustomTimer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import CustomTable from "../components/CustomTable";
import CustomTableNew from "../components/CustomTable";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw",
  height: "90vh",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: "4px",
  position: "relative",
  overflow: "auto",
};

const BiddingProgress = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        sx={{ my: 2 }}
        onClick={handleOpen}
        variant="contained"
        size="large"
      >
        <Typography>Ход торгов</Typography>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* header */}
          <Box
            display="flex"
            flexDirection={{
              xs: "column",
              md: "row",
            }}
            justifyContent="left"
            alignItems={{
              sx: "flex-start",
              md: "center",
            }}
          >
            <Typography fontSize="24px" fontWeight="300" color="red">
              Ход торгов:&nbsp;
            </Typography>
            <Typography
              fontSize="24px"
              component="div"
              color="red"
              fontWeight="bold"
            >
              изготовление подогревателей T-2 LTS BJM WS-8.42-2017-41/9 - 2 ШТ.
              (21.10.2020 10:00)
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              variant="rounded"
              sx={{
                position: "absolute",
                right: 24,
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* content */}
          <Box marginTop={8}>
            <Typography
              component="div"
              paddingY={1}
              paddingX={1}
              bgcolor="#ffb3bf"
              color="red"
              align="left"
              sx={{
                opacity: "0.7",
              }}
            >
              Стоимость изготовления предоставляется за вычетом стоимости
              теплообменной трубы 16х2б 0х3000мм, поставляемой ООО "ЛОТОС
              инжиниринг" не позднее 13.11.2020г
            </Typography>
            <Box>
              <Chip
                label={<CustomTimer />}
                color="error"
                icon={<AvTimerIcon />}
                sx={{
                  py: 4,
                  my: 4,
                  fontSize: 24,
                  width: "240px",
                  opacity: "0.9",
                }}
              />
              <CustomTableNew />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default BiddingProgress;
