import { useState } from "react";

const useHome = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [name, setName] = useState(null);

  const handleSubmit = (form) => {
    if (
      !form.isFieldsTouched(true) ||
      form.getFieldsError().filter(({ errors }) => errors.length).length
    ) {
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
      setName(form.getFieldsValue("name"));
    }
  };

  return { isSubmit, name, handleSubmit };
};

export default useHome;
