'use client'
import React, { useState,useEffect } from 'react';
import style from './internatSwitch.module.css';
import { Table, Input, Pagination, Space, Dropdown, Checkbox,   } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { CiMenuKebab, CiFilter, CiGrid41, CiGrid2H, CiSearch } from 'react-icons/ci';
import { MdErrorOutline } from 'react-icons/md';
import Button from '../Basic/button';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '@/app/store/store';
import { getBankBranchesData } from '../../store/slices/testSlices';


interface DataSource {
    key: string;
    SwitchID: string;
    InternalSwitchTag: string;
}



const MultiViewTable: React.FC = ({}) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pageSize, setPageSize] = useState<number>(10);
    const [searchText, setSearchText] = useState<string>('');
    const [selectedColumns, setSelectedColumns] = useState<string[]>(['SwitchID', 'InternalSwitchTag']);
    const [loadingText, setLoadingText] = useState<boolean>(true)
    // const [spinning, setSpinning] = React.useState(false);


    const dispatch = useDispatch<AppDispatch>();
    const { data: Test_Red, loading,  } = useSelector((state: RootState) => state.Test_Red);
    console.log(Test_Red,)

    useEffect(() => {
        dispatch(getBankBranchesData());
      }, [dispatch]);


    const onSearch = (value: string) => setSearchText(value.toLowerCase());

    const handleCheckboxChange = (checked: boolean, column: string) => {
        setSelectedColumns((prevSelected) =>
            checked ? [...prevSelected, column] : prevSelected.filter((col) => col !== column)
        );
    };

    const dataSource: DataSource[] = [
        { key: '1', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '2', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '3', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '4', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '5', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '6', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '7', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '8', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '9', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '10', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '11', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '12', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
        { key: '13', SwitchID: 'EXG4545FR01', InternalSwitchTag: 'I-Link' },
        { key: '14', SwitchID: 'EXG4545FR02', InternalSwitchTag: 'IHC' },
    ];

    const allColumns = [
        {
            title: 'Switch ID',
            dataIndex: 'SwitchID',
            key: 'SwitchID',
            width: 100,
        },
        {
            title: 'Internal Switch Tag',
            dataIndex: 'InternalSwitchTag',
            key: 'InternalSwitchTag',
        },
        {
            title: 'Action',
            key: 'action',
            fixed: 'right' as const,
            width: 50,
            render: () => <CiMenuKebab />,
        },
    ];

    const filteredColumns = allColumns.filter((col) => selectedColumns.includes(col.key) || col.key === 'action');

    const filteredData = dataSource.filter((item) =>
        item.InternalSwitchTag.toLowerCase().includes(searchText) ||
        item.SwitchID.toLowerCase().includes(searchText)
    );

    const items = [
        {
            label: (
                <Checkbox
                    checked={selectedColumns.includes('SwitchID')}
                    value={'SwitchID'}
                    onChange={(e) => handleCheckboxChange(e.target.checked, 'SwitchID')}
                >
                    Switch ID
                </Checkbox>
            ),
            key: '1',
        },
        {
            label: (
                <Checkbox
                    checked={selectedColumns.includes('InternalSwitchTag')}
                    value={'InternalSwitchTag'}
                    onChange={(e) => handleCheckboxChange(e.target.checked, 'InternalSwitchTag')}
                >
                    Internal Switch Tag
                </Checkbox>
            ),
            key: '2',
        },
    ];

    useEffect(() => {
      setLoadingText(true)
      setTimeout(() => {
        setLoadingText(false)
        }, 2000) 
        }, [])
    return (
        <>
            <div className={style.Route}>
                <h5>Internal Switch Tag</h5>
                <Button Text={'Add New'} buttonClass={style.buttonAdd} Disable={loading} />
            </div>
            <div className={style.container}>
                <Space className={style.SearchTable}>
                    <div className={style.SearchBar}>
                        <Input
                            placeholder="Search..."
                            prefix={<CiSearch size={20} />}
                            suffix={<CiFilter size={20} className={style.filterIcon} />}
                            onChange={(e) => onSearch(e.target.value)}
                            style={{ width: 200 }}
                            className={style.inputSearch}
                        />
                        <Dropdown menu={{ items }} trigger={['click']}>
                            <SettingOutlined className={style.tableSettings} />
                        </Dropdown>
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
                    loading={loadingText}
                    columns={filteredColumns}
                    dataSource={filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize)}
                    pagination={false}
                    rowSelection={{
                        type: 'checkbox',
                    }}
                    size="small"
                />
                    <Pagination
                        align='end'
                        showTotal={(total) => `Total ${total} items`}
                        current={currentPage}
                        total={filteredData.length}
                        pageSize={pageSize}
                        onChange={(page, newSize) => {
                            setCurrentPage(page);
                            setPageSize(newSize);
                        }}
                        style={{  marginTop: 16,  }}
                    />
            </div>
        </>
    );
};


export default MultiViewTable