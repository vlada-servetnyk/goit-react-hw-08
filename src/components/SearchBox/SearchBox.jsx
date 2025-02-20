import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css'
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
    const dispatch = useDispatch();
    
    return (
        <div className={s.search_wrapper}>
            <p className={s.search_text}>Find contacts by name</p>
                <input onChange={(e) => dispatch(changeFilter(e.target.value))} className={s.search_input} type="text" name="search"/>
        </div>
    )
};

export default SearchBox;