import React from "react";
import { useNavigate } from "react-router-dom";
import NewReportForm from "./NewReportForm";
import axios from "axios";
import { AuthContext } from "./Providers/AuthProvider";

const NewReport = (props) => {

    return (
        <div>
            <h1>create a new report</h1>
            <NewReportForm />    
        </div>
    )

}

export default NewReport;