import { makeStyles } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const useStyles = makeStyles({
  modalForm: {
    display: "flex",
    flexDirection: "column",
    width: "550px",
  },
  modalInputStyle: {
    padding: "15px",
    marginBottom: "15px",
    border: "1px solid lightgrey",
    borderRadius: "5px",
  },
  modalInputBtnStyle: {
    width: "120px",
    padding: "10px",
    background: `linear-gradient(
        45deg
        , #25e6cb, #0bb0cb)`,
    alignSelf: "flex-end",
    border: "none",
    color: "white",
  },
  selectOption: {
    display: "flex",
    justifyContent: "space-between",
  },
});

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn }) => {
  const { register, handleSubmit, watch,  errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    closeModal()
  };
  const classes = useStyles();
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 style={{ textAlign: "center", color: "#10bacb" }}>
          {appointmentOn}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className={classes.modalForm}>
          <input
            className={classes.modalInputStyle}
            placeholder="Your Name"
            {...register("name", { required: true })}
            name="name"
          />
          
          <input
            className={classes.modalInputStyle}
            placeholder="Phone Number"
            {...register("number", { required: true})}
            name="number"
          />
          <input
            className={classes.modalInputStyle}
            placeholder="Email"
            {...register("email", { required: true })}
            name="email"
          />

          <div className={classes.selectOption}>
            <select className={classes.modalInputStyle} name="gender" id="">
              <option disabled={true} value="Not set">
                Select Gender
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Not set">Other</option>
            </select>
            <input className={classes.modalInputStyle}
              type="number"
              name="age"
              placeholder="Your Age"
              {...register("age", { required: true })}
            />
            <input className={classes.modalInputStyle}
              type="number"
              name="weight"
              placeholder="Weight"
              {...register("weight", { required: true })}
            />
          </div>

          <input
            className={classes.modalInputBtnStyle}
            type="submit"
            value="Send"
          />
        </form>
      </Modal>
    </>
  );
};

export default AppointmentForm;
