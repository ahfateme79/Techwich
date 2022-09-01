import './search.css'
import search from '../../assets/img/Stroke/fi-rr-search.svg'

const Search=()=>{
    return(
        <div className='search-box'>
            <button><img src={search} alt="search"/></button>
            <input type="text" placeholder='Search...' />
        </div>
    )
}

export default Search