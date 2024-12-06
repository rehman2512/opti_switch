import React, { useState } from 'react';
import style from './ChannelList.module.css';
import { Table, Input, Pagination, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab, CiFilter, CiGrid41, CiGrid2H, CiSearch } from 'react-icons/ci';
import { MdErrorOutline } from 'react-icons/md';
import Button from '../Basic/button';

// Define types for the data source items
interface DataSourceItem {
    key: string;
    ChannelID: string;
    Channel: string;
    CHTypeID: string;
}


const dataSource: DataSourceItem[] = [
    {
        key: '1',
        ChannelID: 'EKG464SJFN01',
        Channel: 'I-Link',
        CHTypeID: 'SOAP',
    },
    {
        key: '2',
        ChannelID: 'EKG464SJFN02',
        Channel: 'IRIC',
        CHTypeID: 'PARSER',
    },
    {
        key: '3',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '4',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '5',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '6',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '7',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '8',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '9',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
    {
        key: '10',
        ChannelID: 'EKG464SJFN03',
        Channel: 'Schneider Electric',
        CHTypeID: 'CHPROC',
    },
];

const columns = [
    {
        title: 'Channel',
        dataIndex: 'ChannelID',
        key: 'ChannelID',
        width:100,
    },
    {
        title: 'Channel',
        dataIndex: 'Channel',
        key: 'Channel',
        width:200,
    },
    {
        title: 'CH Type',
        dataIndex: 'CHTypeID',
        key: 'CHTypeID',
    },
   
    {
        title: 'Action',
        dataIndex:'Channel',
        key: 'action',
        fixed:"right" as const,
        width:50,
        render: () => <CiMenuKebab />, 
    },
];

const ChannelList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>('');

    const onSearch = (value: string) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.Channel.toLowerCase().includes(searchText) ||
        item.ChannelID.toLowerCase().includes(searchText) ||
        item.CHTypeID.toLowerCase().includes(searchText)
    );

    return (
        <>    
            <div className={style.Route}>
                <h5>Channel List</h5>
                <Button Text={'Add New'} buttonClass={style.buttonAdd} />
            </div>
            <div className={style.container}>
                <Space className={style.SearchTable}>
                    <div className={style.SearchBar}>
                        <Input
                            placeholder="Search..."
                            prefix={<CiSearch size={20} />}
                            suffix={<CiFilter size={20} />}
                            onChange={(e) => onSearch(e.target.value)}
                            style={{ width: 200 }}
                            className={style.inputSearch}
                        />
                        <SettingOutlined className={style.tableSettings} />
                    </div>
                    <div className={style.ViewChange}>
                        <div className={style.boxIcons}>
                            <CiGrid41 className={style.gridIcon} />
                            <CiGrid2H className={style.gridIcon} />
                        </div>
                        <MdErrorOutline className={style.tableInstruction} />
                    </div>
                </Space>
                <Table
                    columns={columns}
                    dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    pagination={false}
                    rowSelection={{ type: 'checkbox' }}
                    size="small"
                />
                <Pagination
                    align="end"
                    showTotal={(total) => `Total ${total} items`}
                    current={currentPage}
                    total={filteredData.length}
                    pageSize={pageSize}
                    onChange={(page, pageSize) => {
                        setCurrentPage(page);
                        setPageSize(pageSize);
                    }}
                    style={{ marginTop: 16, textAlign: 'right' }}
                />
            </div>
        </>
    );
};

export default ChannelList;
