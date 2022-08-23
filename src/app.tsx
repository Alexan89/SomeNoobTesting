import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import TestingGrid from "./testingGrid";

const App = () => {
    
    return (
        <TestingGrid data={[
            { make: 'Porsche', model: 'Boxter', price: 72000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Ford', model: 'Mondeo', price: 32000 },
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Toyota', model: 'Celica', price: 35000 },
            { make: 'Porsche', model: 'Boxter', price: 72000 }
        ]}/>
    )
}

export default App;

