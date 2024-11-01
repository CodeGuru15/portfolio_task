import * as Yup from "Yup";
import { useFormik } from "formik";
import SocialLink from "./SocialLink";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .required("Please enter your name")
    .min(2, "Name must be at least 2 characters")
    .max(15, "Max 15 characters allowed"),
  email: Yup.string().required("Please enter your email"),
  phone: Yup.number().required("Please enter your phone number"),
  message: Yup.string()
    .required("Please enter your requirement")
    .max(2000, "Max 2000 characters allowed"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: (values) => {
      console.log("Form values", values);
      formik.resetForm();
    },
  });
  return (
    <div className=" flex relative justify-center items-center sm:gap-10 h-screen bg-slate-700">
      <div className=" text-white md:text-3xl p-5 text-xl gap-3 font-semibold hidden sm:flex sm:flex-col">
        <p>CONTACT</p>
        <p>Email: arijitpal6111@gmail.com</p>
        <p>Tel: +91 9051119351</p>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className=" p-5 shadow-sm shadow-white rounded-md"
      >
        <div className=" flex flex-col">
          <label className="text-xs sm:text-base text-white">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="px-4 py-2 border rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
            {formik.errors.name && formik.touched.name
              ? formik.errors.name
              : null}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-xs sm:text-base text-white">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="px-4 py-2 border rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
            {formik.errors.email && formik.touched.email
              ? formik.errors.email
              : null}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-xs sm:text-base text-white">Phone</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="px-4 py-2 border rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
            {formik.errors.phone && formik.touched.phone
              ? formik.errors.phone
              : null}
          </p>
        </div>
        <div className=" flex flex-col">
          <label className="text-xs sm:text-base text-white">Message</label>
          <input
            type="text"
            name="message"
            id="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="px-4 py-2 border h-20 rounded-md outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          />
          <p className="h-4 text-xs text-red-500 sm:h-7 sm:text-base">
            {formik.errors.message && formik.touched.message
              ? formik.errors.message
              : null}
          </p>
        </div>
        <div className=" flex justify-center">
          <button
            type="submit"
            className=" bg-green-500 w-full max-w-md hover:bg-green-700 hover:text-white p-2 rounded-md"
          >
            SEND
          </button>
        </div>
      </form>
      <SocialLink />
    </div>
  );
};

export default Contact;
