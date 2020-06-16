import React from 'react';
import { Select } from 'antd';
import { Button, Tooltip, Table } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import axios from 'axios'
const { Option } = Select;

class RickMorty extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            characters: 'none',
            episodes: 'none',
            locations: 'none',
            selectedValue: 'none',
            dataSource: [],
            columns: []
        }
    }
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
        //KARAKTERI
        if (this.state.selectedValue === 'Characters') {
            axios.get('https://rickandmortyapi.com/api/character/').then(res => {
                this.setState({ characters: res.data.results }, () => {
                    console.log(this.state.characters);
                });
                var dataSourceArray = []
                console.log(this.state.dataSource)
                this.state.characters.forEach(character => {
                    dataSourceArray.push({
                        key: character.id,
                        name: character.name,
                        status: character.status,
                        species: character.species,
                        image: <img src={character.image} alt={character.name} className='imageSize'></img>,
                    })
                });
                this.setState({ dataSource: dataSourceArray }, () => {
                    console.log(this.state.columns);
                })
                console.log(this.state.dataSource)
                this.setState({
                    columns: [
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: 'Status',
                            dataIndex: 'status',
                            key: 'status',
                        },
                        {
                            title: 'Species',
                            dataIndex: 'species',
                            key: 'species',
                        },
                        {
                            title: 'Image',
                            dataIndex: 'image',
                            key: 'image',
                        },
                    ]
                }, () => {
                    console.log(this.state.columns);
                })

            })
        }
        //EPIZODE
        else if (this.state.selectedValue === 'Episodes') {
            axios.get('https://rickandmortyapi.com/api/episode').then(res => {
                this.setState({ episodes: res.data.results }, () => {
                    console.log(this.state.episodes);
                });
                var dataSourceArray = []
                console.log(this.state.dataSource)
                this.state.episodes.forEach(episode => {
                    dataSourceArray.push({
                        key: episode.id,
                        name: episode.name,
                        air_date: episode.air_date,
                        episode: episode.episode,
                    })
                });
                this.setState({ dataSource: dataSourceArray }, () => {
                    console.log(this.state.columns);
                })
                console.log(this.state.dataSource)
                this.setState({
                    columns: [
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: 'Air Date',
                            dataIndex: 'air_date',
                            key: 'air_date',
                        },
                        {
                            title: 'Episode',
                            dataIndex: 'episode',
                            key: 'episode',
                        }
                    ]
                }, () => {
                    console.log(this.state.columns);
                })

            })
        }
        //LOKACIJE
        else if (this.state.selectedValue === 'Locations') {
            axios.get('https://rickandmortyapi.com/api/location').then(res => {
                this.setState({ locations: res.data.results }, () => {
                    console.log(this.state.locations);
                });
                var dataSourceArray = []
                console.log(this.state.dataSource)
                this.state.locations.forEach(location => {
                    dataSourceArray.push({
                        key: location.id,
                        name: location.name,
                        type: location.type,
                        dimension: location.dimension,
                    })
                });
                this.setState({ dataSource: dataSourceArray }, () => {
                    console.log(this.state.columns);
                })
                console.log(this.state.dataSource)
                this.setState({
                    columns: [
                        {
                            title: 'Name',
                            dataIndex: 'name',
                            key: 'name',
                        },
                        {
                            title: 'Type',
                            dataIndex: 'type',
                            key: 'type',
                        },
                        {
                            title: 'Dimension',
                            dataIndex: 'dimension',
                            key: 'dimension',
                        }
                    ]
                }, () => {
                    console.log(this.state.columns);
                })

            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <h1>Rick and Morty search engine</h1>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select a category"
                    optionFilterProp="children"
                    onChange={this.onChange}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                    onSearch={this.onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Episodes">Episodes</Option>
                    <Option value="Characters">Characters</Option>
                    <Option value="Locations">Locations</Option>
                </Select>
                <Tooltip title="search">
                    <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={this.searchButton} className='searchButton' />
                </Tooltip>
                <Table dataSource={this.state.dataSource} columns={this.state.columns} className='tableMargin' />;
            </React.Fragment>
        );
    }
}

export default RickMorty;

