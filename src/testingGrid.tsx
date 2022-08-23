import { AgGridReact } from "ag-grid-react";
import React, { useRef, useState } from "react";


type RowData = {
    make: string;
    model: string;
    price: number;
}

type ColumnFieldNames<T> = {
    'field' : keyof T
};

type TestingGridProps = {
    data: RowData[];
}
const TestingGrid = (props: TestingGridProps) => {
    const { data } = props;
    const test: any = Object.getOwnPropertyNames(props.data[0])
    const columns: ColumnFieldNames<RowData> = {field: "make"};
    console.log("Columns ", test)
    const ref = useRef<AgGridReact>(null);
    const [rowData, setRowData] = useState([
        { make: 'Porsche', model: 'Boxter', price: 72000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 }
    ])
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make', filter: true },
        { field: 'model', filter: true },
        { field: 'price' }
    ]);
    const callApi = () => {
        if (ref.current) {
            ref.current.api.selectAll();
        }
    }
    return (
        <>
            <div>

                {/* Example using Grid's API */}

                {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
                <div className="ag-theme-alpine" style={{ width: 500, height: 500 }}>
                    Plz work
                    <AgGridReact
                        ref={ref}
                        rowData={rowData}
                        columnDefs={columnDefs}
                        animateRows={true}
                        onCellFocused={callApi}
                    />
                </div>
            </div>
        </>
    )
}

export default TestingGrid;