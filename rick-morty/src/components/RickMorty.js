import React from 'react';
import { Select } from 'antd';
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


const { Option } = Select;
class RickMorty extends React.Component {
    state = { selectedValue: 'none' }
    onChange = (value) => {
        console.log(`selected ${value}`);
        this.setState({ selectedValue: value });
    }

    onBlur = () => {
        console.log('blur');
    }

    onFocus = () => {
        console.log('focus');
    }

    onSearch = (val) => {
        console.log('search:', val);
    }
    searchButton = () => {
        console.log(this.state.selectedValue)
    }
    render() {
        return (
            <React.Fragment>
                <h1>Rick and Morty search engine</h1>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a person"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Epizode">Epizode</Option>
                    <Option value="Karakteri">Karakteri</Option>
                    <Option value="Lokacije">Lokacije</Option>
                </Select>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={this.searchButton} className='searchButton' />
                </Tooltip>

            </React.Fragment>
        );
    }
}

export default RickMorty;