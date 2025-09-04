// components/DataTableComponent.jsx
import React from 'react';
import DataTable from 'react-data-table-component';

const customStyles = {
    headCells: {
        style: {
            backgroundColor: '#012169',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '14px',
            borderRadius: 0
        },
    },
    rows: {
        style: {
            fontSize: '14px',
        },
    },
};

const DataTableComponent = ({ columns, data, title }) => {
    return (
        <div className="overflow-x-scroll overflow-visible bg-white rounded-md shadow relative" style={{ overflow: 'visible' }}>
            <DataTable
                title={title}
                columns={columns}
                data={data}
                customStyles={customStyles}
                pagination
                highlightOnHover
                responsive
                striped
                persistTableHead
            />
        </div>
    );
};

export default DataTableComponent;
