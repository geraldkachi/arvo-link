import React from 'react'
import { dataTable } from '../assets/data/data'
import Header from '../components/header/Header'
import { Table } from '../components/table/Table'

const History = () => {
    return (
        <div>
            <Header title='History' />

            <div className="mt-10 mb-20">

                <Table
                    // loading={customerData.isLoading}
                    columns={[
                        {
                            header: "Disbursement Date",
                            // view: (row) => `${row?.user.first_name} ${row?.user.last_name}`,
                            view: (row) => `${row?.date} ${row?.date}`,
                        },
                        { header: "Batch Amount", view: (row) => row?.recipent },
                        {
                            header: "Batch Contacts",
                            view: (row) => row?.amount ? (row?.amount) : 0
                            // view: (row) => row?.amount ? currencyFormat(row?.amount) : 0
                        },
                        {
                            header: "Pending",
                            view: (row) => (row?.amount),
                        },
                        {
                            header: "Completed",
                            view: (row) => (row?.amount),
                        },
                        {
                            header: "Batch ID",
                            view: (row) => (row?.amount),
                        },
                        {
                            header: "Status",
                            view: (row) => (row?.amount),
                        },
                    ]}
                    // data={[] ?? []}
                    // data={customerData?.data?.customers ?? []}
                    data={dataTable ?? []}
                    pagination={{ page: 5, pageSize: 1, totalRows: 1 }}
                    rowActions={(row) => [
                        {
                            action: () => { },
                            name: "ACTION",
                        },
                    ]}
                    title="No Transactions yet"
                    subtitle="It looks like you haven't added any music to your sound page yet. To add a song to the sound page, click the button below"
                    />
                    </div>
        </div>
    )
}

export default History
