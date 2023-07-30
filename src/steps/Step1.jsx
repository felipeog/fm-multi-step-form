import { observable } from "@legendapp/state";
import { observer } from "@legendapp/state/react";
import * as Yup from "yup";

import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { store$ } from "../store";

const fieldSchema = {
  name: Yup.string()
    .min(2, "Too Short")
    .max(50, "Too Long")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
  phone: Yup.string().required("This field is required"),
};
const formSchema = Yup.object().shape(fieldSchema);
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
    const { name, value } = event.target;

    form$[name].set(value);

    try {
      fieldSchema[name].validateSync(value); // throws

      error$[name].set("");
    } catch (error) {
      error$[name].set(error.message);
    }

    try {
      formSchema.validateSync(form$.get()); // throws

      store$.isFormValid.set(true);
    } catch (error) {
      store$.isFormValid.set(false);
    }
  }

  return (
    <div>
      <Header
        title="Personal info"
        subtitle="Please provide your name, email address, and phone number"
      />

      <form className="flex flex-col gap-6">
        <Input
          label="Name"
          placeholder="e.g. Stephen King"
          id="name"
          type="text"
          onChange={handleInputChange}
          value={form$.name.get()}
          error={error$.name.get()}
        />

        <Input
          label="Email Address"
          placeholder="e.g. stephenking@lorem.com"
          id="email"
          type="email"
          onChange={handleInputChange}
          value={form$.email.get()}
          error={error$.email.get()}
        />

        <Input
          label="Phone number"
          placeholder="e.g. +1 123 123 123"
          id="phone"
          type="text"
          onChange={handleInputChange}
          value={form$.phone.get()}
          error={error$.phone.get()}
        />
      </form>
    </div>
  );
}

const ObserverStep1 = observer(Step1);

export { ObserverStep1 as Step1 };
