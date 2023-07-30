import { observable } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import * as Yup from "yup";

import { Header } from "../components/Header";
import { store$ } from "../store";

const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string()
    .min(10, "Too Short")
    .max(10, "Too Long")
    .required("This field is required"),
});
// move to store?
const form$ = observable({
  name: "",
  email: "",
  phone: "",
});
const error$ = observable({
  name: "",
  email: "",
  phone: "",
});

function Step1() {
  function handleInputChange(event) {
    form$.set((prevForm) => {
      const newForm = {
        ...prevForm,
        [event.target.name]: event.target.value,
      };

      try {
        formSchema.validateSync(newForm); // throws

        store$.isFormValid.set(true);
        error$.set({
          name: "",
          email: "",
          phone: "",
        });
      } catch (error) {
        store$.isFormValid.set(false);
        error$.set((prevError) => {
          return {
            ...prevError,
            [event.target.name]: error.message,
          };
        });
      }

      return newForm;
    });
  }

  return (
    <div>
      <Header
        title="Personal info"
        subtitle="Please provide your name, emall address, and phone number"
      />

      <form>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={handleInputChange}
          value={form$.name.get()}
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleInputChange}
          value={form$.email.get()}
        />

        <label htmlFor="phone">Phone number</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={handleInputChange}
          value={form$.phone.get()}
        />
      </form>
    </div>
  );
}

const ObserverStep1 = observer(Step1);

export { ObserverStep1 as Step1 };
