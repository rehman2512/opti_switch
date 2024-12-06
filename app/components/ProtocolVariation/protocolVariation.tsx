import React, { useState } from 'react';
import style from './protocolVariation.module.css';
import { Table, Input, Pagination, Space } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab } from "react-icons/ci";
import { CiFilter } from "react-icons/ci";
import { MdErrorOutline } from "react-icons/md";
import { CiGrid41 } from "react-icons/ci";
import { CiGrid2H } from "react-icons/ci";
import Button from '../Basic/button';
import { CiSearch } from "react-icons/ci";

interface DataSourceItem {
  key: string;
  Field_ID: string;
  FieldName: string;
  ReasonCode: string;
}

const dataSource: DataSourceItem[] = [
  {
    key: '1',
    Field_ID: 'EKG464SJFN01',
    FieldName: 'I-Link',
    ReasonCode: "Reliable switches used for various residential and commercial electrical applications."
  },
  {
    key: '2',
    Field_ID: 'EKG464SJFN02',
    FieldName: 'IRIC',
    ReasonCode: "Durable switches designed for safety and ease of use in homes and offices."
  },
  {
    key: '3',
    Field_ID: 'EKG464SJFN03',
    FieldName: 'Schneider Electric',
    ReasonCode: "Modern switches that combine style with advanced safety features and energy efficiency."
  },
  {
    key: '4',
    Field_ID: 'EKG464SJFN04',
    FieldName: 'Legrand Switches',
    ReasonCode: "Elegant switches that offer a variety of styles and functionalities for upscale installations."
  },
  {
    key: '5',
    Field_ID: 'EKG464SJFN05',
    FieldName: 'Havells Switches',
    ReasonCode: "Robust and aesthetically pleasing switches suitable for both home and industrial environments."
  },
  {
    key: '6',
    Field_ID: 'EKG464SJFN06',
    FieldName: 'ABB Switches',
    ReasonCode: "Innovative switches focusing on energy efficiency and safety, ideal for commercial use."
  },
  {
    key: '7',
    Field_ID: 'EKG464SJFN07',
    FieldName: 'Siemens Switches',
    ReasonCode: "High-quality switches known for their reliability and advanced technology in industrial settings."
  },
  {
    key: '8',
    Field_ID: 'EKG464SJFN08',
    FieldName: 'Philips Switches',
    ReasonCode: "Integrated lighting solutions that provide functionality and modern design."
  },
  {
    key: '9',
    Field_ID: 'EKG464SJFN09',
    FieldName: 'Crompton Switches',
    ReasonCode: "Affordable switches that deliver good performance for everyday use."
  },
  {
    key: '10',
    Field_ID: 'EKG464SJFN10',
    FieldName: 'Chint Switches',
    ReasonCode: "Budget-friendly switches that meet basic electrical needs with dependable performance."
  },
  {
    key: '11',
    Field_ID: 'EKG464SJFN11',
    FieldName: 'I-Link',
    ReasonCode: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '12',
    Field_ID: 'EKG464SJFN12',
    FieldName: 'IHC',
    ReasonCode: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '13',
    Field_ID: 'EKG464SJFN13',
    FieldName: 'I-Link',
    ReasonCode: "Reliable switches used for various residential and commercial electrical applications"
  },
  {
    key: '14',
    Field_ID: 'EKG464SJFN14',
    FieldName: 'IHC',
    ReasonCode: "Reliable switches used for various residential and commercial electrical applications"
  },
];

const columns = [
  {
    title: 'Field ID',
    dataIndex: 'Field_ID',
    key: 'Field_ID',
    width:100,

  },
  {
    title: 'Field Name',
    dataIndex: 'FieldName',
    key: 'FieldName',
    width:200,

  },
  {
    title: 'Reason Code',
    dataIndex: 'ReasonCode',
    key: 'ReasonCode',
  },
  {
    title: 'Action',
    key: 'action',
    fixed:"right" as const,
    width:50,
    render: () => <CiMenuKebab />,
  },
];

const InstituteManagement: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [searchText, setSearchText] = useState<string>('');

  const onSearch = (value: string): void => setSearchText(value.toLowerCase());

  const filteredData = dataSource.filter((item) =>
    item.FieldName.toLowerCase().includes(searchText) ||
    item.Field_ID.toLowerCase().includes(searchText) ||  
    item.ReasonCode.toLowerCase().includes(searchText)
  );

  return (
    <>    
      <div className={style.Route}>
        <h5>Protocol Variation</h5>
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
          className={style.page}
          style={{ marginTop: 16, textAlign: 'right',  }}
        />
      </div>
    </>
  );
};

export default InstituteManagement;
