import React, { useState, createContext } from "react";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
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

  return (
    <HomeContext.Provider
      value={{
        name,
        handleSubmit,
        isSubmit,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};
