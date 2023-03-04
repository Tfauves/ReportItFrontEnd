import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProvider";
import NewReportForm from "../Report/NewReportForm";


const NewReport = (props) => {
    const host = "http://localhost:8080";
    let navigate = useNavigate();
    const params = useParams();
    const { areaId } = params;
   

    const [query, setQuery] = useState({
        issueType: "",
        location: "",
        description: "",
    });

    const [auth] = useContext(AuthContext);

    
    const updateForm = (field, value) => {
        setQuery({
            ...query,
            [field]: value,
        });
    };

    const onSubmit = async (token) => {
        const data = query;
        console.log(data);

        try {
            const res = await axios.post(`${host}/api/report/${areaId}`, data, {
                headers: {
                    Authorization: `Bearer ${auth.token}`,
                },
            });

        navigate("/profile")  
        } catch (err) {
            alert(err.response.data.message);
        }

    };

/// need to clear form on submit and need to navigate back to profile dash after report submit.
    return (
        <div>
            <h1>create a new report</h1>
            <NewReportForm query={query} updateForm={updateForm} onSubmit={onSubmit} />    
        </div>
    )

}

export default NewReport;