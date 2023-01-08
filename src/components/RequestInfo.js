import React, { useState } from "react";
import RequestInfoForm from "./RequestInfoForm";

const RequestInfo = () => {
  const [query, setQuery] = useState({
    fname: "",
    lname: "",
    jobtitle: "",
    email: "",
    phone: "",
    municipalityname: "",
    populationsize: "",
    state: "",
    comments: "",
  });
  return (
    <div>
      <h1>request info here</h1>
      <RequestInfoForm query={query} />
    </div>
  );
};
export default RequestInfo;
