import * as Yup from "yup";

import { STEPS } from "../constants/steps";
import { ERRORS } from "../constants/form";

const SUCCESS = {
  success: true,
  error: null,
}

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

    return SUCCESS;
  } catch (error) {
    const validationErrors = error.inner.reduce((acc, cur) => {
      if (!acc[cur.path]) {
        acc[cur.path] = cur.message;
      }

      return acc;
    }, structuredClone(ERRORS));

    return {
      success: false,
      error: {
        message: "Invalid form",
        payload: validationErrors,
      },
    };
  }
}

function step2(store$) {
  if (!store$.plan.get()) {
    return {
      success: false,
      error: {
        message: "No plan selected",
        payload: null,
      },
    };
  }

  return SUCCESS;
}

function noValidation() {
  return SUCCESS;
}

export const stepValidator = {
  [STEPS["your-info"].id]: step1,
  [STEPS["select-plan"].id]: step2,
  [STEPS["add-ons"].id]: noValidation,
  [STEPS["summary"].id]: noValidation,
};
