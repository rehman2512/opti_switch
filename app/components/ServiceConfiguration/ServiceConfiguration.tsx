import React, { useState } from 'react';
import style from './ServiceConfiguration.module.css';
import { Table, Input, Pagination, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab, CiFilter, CiGrid41, CiGrid2H, CiSearch } from 'react-icons/ci';
import { MdErrorOutline } from 'react-icons/md';
import Button from '../Basic/button';

// Define types for the data source items
interface DataSourceItem {
    key: string;
    ServiceID: string;
    ChannelID: string;
    Services: string;
    NameID: string;
}



const dataSource: DataSourceItem[] = [
    {
        key: '1',
        ServiceID: 'EKG464SJFN01',
        ChannelID: 'I-Link',
        Services: 'SOAP',
        NameID: 'Reliable switches used for various residential and commercial electrical applications.',
    },
    {
        key: '2',
        ServiceID: 'EKG464SJFN02',
        ChannelID: 'IRIC',
        Services: 'PARSER',
        NameID: 'Durable switches designed for safety and ease of use in homes and offices.',
    },
    {
        key: '3',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '4',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '5',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '6',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '7',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '8',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '9',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
    {
        key: '10',
        ServiceID: 'EKG464SJFN03',
        ChannelID: 'Schneider Electric',
        Services: 'CHPROC',
        NameID: 'Modern switches that combine style with advanced safety features and energy efficiency.',
    },
];

const columns = [
    {
        title: 'Service ID',
        dataIndex: 'ServiceID',
        key: 'ServiceID',
        width:100,
    },
    {
        title: 'Channel',
        dataIndex: 'ChannelID',
        key: 'ChannelID',
    },
    {
        title: 'Services',
        dataIndex: 'Services',
        key: 'Services',
    },
    {
        title: 'Name',
        dataIndex: 'NameID',
        key: 'NameID',
    },
    {
        title: 'Action',
        dataIndex:'ChannelID',
        key: 'action',
        fixed:"right" as const,
        render: () => <CiMenuKebab />, 
        width:50,
    },
];

const ServiceConfiguration: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>('');

    const onSearch = (value: string) => setSearchText(value.toLowerCase());

    const filteredData = dataSource.filter((item) =>
        item.ChannelID.toLowerCase().includes(searchText) ||
        item.ServiceID.toLowerCase().includes(searchText) ||
        item.NameID.toLowerCase().includes(searchText) ||
        item.Services.toLowerCase().includes(searchText)
    );

    return (
        <>    
            <div className={style.Route}>
                <h5>Service Configuration</h5>
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

export default ServiceConfiguration;
