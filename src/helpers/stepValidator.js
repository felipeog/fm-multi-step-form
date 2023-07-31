import * as Yup from "yup";
import { toast } from "react-toastify";

import { STEPS } from "../constants/steps";
import { ERRORS } from "../constants/form";

function step1(store$) {
  const fieldSchema = {
    name: Yup.string()
      .required("This field is required")
      .min(2, "Too Short")
      .max(50, "Too Long"),
    email: Yup.string()
      .required("This field is required")
      .email("Invalid email"),
    phone: Yup.string()
      .required("This field is required")
      .min(2, "Too Short")
      .max(50, "Too Long"),
  };
  const formSchema = Yup.object().shape(fieldSchema);

  try {
    // throws on error
    formSchema.validateSync(store$.form.values.get(), {
      abortEarly: false,
    });
    store$.form.errors.set(structuredClone(ERRORS));

    return true;
  } catch (error) {
    const validationErrors = error.inner.reduce((acc, cur) => {
      if (!acc[cur.path]) {
        acc[cur.path] = cur.message;
      }

      return acc;
    }, structuredClone(ERRORS));

    // move side-effects?
    store$.form.errors.set(validationErrors);
    toast.error("Check the form", {
      toastId: "form-error",
    });

    return false;
  }
}

function step2(store$) {
  if (!store$.plan.get()) {
    // move side-effect?
    toast.error("Select a plan", {
      toastId: "plan-error",
    });

    return false;
  }

  return true;
}

function noValidation() {
  return true;
}

export const stepValidator = {
  [STEPS["your-info"].id]: step1,
  [STEPS["select-plan"].id]: step2,
  [STEPS["add-ons"].id]: noValidation,
  [STEPS["summary"].id]: noValidation,
};
