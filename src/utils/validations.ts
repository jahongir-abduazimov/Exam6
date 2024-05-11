import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
    full_name: Yup.string().required("Full name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters").required("Password is required"),
    phone_number: Yup.string().min(19, "Invalid phone number").required("Phone number is required"),
})

export const signInValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters").required("Password is required"),
})

export const verifyPassValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
})

export const updatePassValidationSchema = Yup.object().shape({
    new_password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters").required("Password is required"),
    code: Yup.string().required().trim(),
})

// ---------- User --------------------

export const userValidationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    // gender: Yup.boolean().required("Gender is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters").required("Password is required"),
})