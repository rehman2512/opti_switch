import React, { useState } from 'react';
import style from './Adaptor.module.css';
import { Table, Input, Pagination, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab, CiFilter, CiGrid41, CiGrid2H, CiSearch } from 'react-icons/ci';
import { MdErrorOutline } from 'react-icons/md';
import Button from '../Basic/button';

// Define types for the data source items
interface DataSourceItem {
    key: string;
    AdaptorID: string;
    ChannelID: string;
    Address: string;
    ConfigParams: string;
    META_LENGTH_ID: string;
    IS_SERVER:string;
    CommsStatus:string;
    ProcessingStatus:string;
    
}

const dataSource: DataSourceItem[] = [
    {
        key: '1',
        AdaptorID: 'EKG464SJFN01',
        ChannelID: '88',
        Address: 'SOAP',
        ConfigParams:'88',
        META_LENGTH_ID:"0",
        IS_SERVER: "0",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '2',
        AdaptorID: 'EKG464SJFN02',
        ChannelID: '89',
        Address: 'PARSER',
        ConfigParams:'89',
        META_LENGTH_ID:"1",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '3',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: '90',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '4',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '5',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '6',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '7',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '8',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '9',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
    {
        key: '10',
        AdaptorID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Address: 'CHPROC',
        ConfigParams:'90',
        META_LENGTH_ID:"2",
        IS_SERVER: "1",
        CommsStatus: "1",
        ProcessingStatus: "1",
    },
];

const columns= [
    {
        title: 'Adaptor ID',
        dataIndex: 'AdaptorID',
        key: 'AdaptorID',
        width:100,
    },
    {
        title: 'Address',
        dataIndex: 'Address',
        key: 'Address',
    },
    {
        title: 'Channel ID',
        dataIndex: 'ChannelID',
        key: 'ChannelID',
    },
    {
        title: 'Config Params',
        dataIndex: 'ConfigParams',
        key: 'ConfigParams',
    },
    {
        title: 'Meta Length ID',
        dataIndex: 'META_LENGTH_ID',
        key: 'META_LENGTH_ID',
    },
    {
        title: 'IS Server',
        dataIndex: 'IS_SERVER',
        key: 'IS_SERVER',
    },
    {
        title: 'Comms Status',
        dataIndex: 'CommsStatus',
        key: 'CommsStatus',
    },
    {
        title: 'Processing Status',
        dataIndex: 'ProcessingStatus',
        key: 'ProcessingStatus',
    },
    
   
    {
        title: 'Action',
        dataIndex:'ChannelID',
        key: 'action',
        fixed:"right" as const,
        Width:50,
        render: () => <CiMenuKebab />, 
    },
];

const ChannelList: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>('');

    const onSearch = (value: string) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.ChannelID.toLowerCase().includes(searchText) ||
        item.AdaptorID.toLowerCase().includes(searchText) ||
        item.Address.toLowerCase().includes(searchText)
    );

    return (
        <>    
            <div className={style.Route}>
                <h5>Adaptor</h5>
                <Button Text={'Add New'} buttonClass={style.buttonAdd} Disable />
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
