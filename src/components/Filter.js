import './Filter.css';

const Filter = (filterData) => {
    console.log('data of filters'); 
    console.log(filterData.filterData);
    return (<div>
        {filterData.filterData.map( (data) =>{
            return (<button>{data.title}</button>);
        })}
    </div>
    )
}

export default Filter;