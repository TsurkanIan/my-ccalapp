import React from 'react';
import MyInput from './UI/MyInput';
import MySelect from './UI/MySelect';
const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder="Search..."
            />
            <MySelect
                value={filter.value}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaulValue="Sorting"
                options={[
                    {value: 'title', name: 'Sort by name'},
                    {value: 'body', name: 'Sort by description'},
                ]}
            />
        </div>
    );
};

export default PostFilter;