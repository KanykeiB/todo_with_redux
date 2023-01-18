import React from 'react';
import { useDispatch } from 'react-redux';
import FilterButton from '../../components/filterButton';
import { filterTodoActionCreator } from '../../redux/filter/actions';
import { TYPE_OF_FILTER } from '../../redux/filter/reducers';
import Styles from './index.module.css';

const FilterButtons = () => {
    const dispatch = useDispatch()
    return (
        <div className={Styles.btnCont}>
            <FilterButton
                onClick={()=> dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ALL))}
            >
                    All
            </FilterButton>
            <FilterButton
                onClick={()=> dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_ACTIVE))}
            >
                    Show Active
                </FilterButton>
            <FilterButton
                onClick={()=> dispatch(filterTodoActionCreator(TYPE_OF_FILTER.SHOW_COMPLETE))}
            >
                    Show Completed
            </FilterButton>
        </div>
    );
};

export default FilterButtons;