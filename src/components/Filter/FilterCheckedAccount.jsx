import React from 'react';
import Container from "../Container/Container";
import './filter.scss';
import FilterItem from "./FilterItem";

const FilterCheckedAccount = ({loading,freebetsPromo,error}) => {

    const [activeFilter,setActiveFilter] = React.useState(null);
    console.log(activeFilter)
    const HandlerActiveFilter = (id) => {
        setActiveFilter(id)
    }
    return (
        <Container>
            <div className="filter">
                <div className="filter__logo">
                    <svg x="0px" y="0px" viewBox="0 0 368.167 368.167" width="20" height="20"><g><g><g><path d="M248.084,96.684h12c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8h-12c-4.4,0-8,3.6-8,8C240.084,93.084,243.684,96.684,248.084,96.684     z"/><path d="M366.484,25.484c-2.8-5.6-8.4-8.8-14.4-8.8h-336c-6,0-11.6,3.6-14.4,8.8c-2.8,5.6-2,12,1.6,16.8l141.2,177.6v115.6     c0,6,3.2,11.2,8.4,14c2.4,1.2,4.8,2,7.6,2c3.2,0,6.4-0.8,9.2-2.8l44.4-30.8c6.4-4.8,10-12,10-19.6v-78.8l140.8-177.2     C368.484,37.484,369.284,31.084,366.484,25.484z M209.684,211.884c-0.8,1.2-1.6,2.8-1.6,4.8v81.2c0,2.8-1.2,5.2-3.2,6.8     l-44.4,30.8v-118.8c0-2.8-1.2-5.2-3.2-6.4l-90.4-113.6h145.2c4.4,0,8-3.6,8-8c0-4.4-3.6-8-8-8h-156c-0.4,0-1.2,0-1.6,0l-38.4-48     h336L209.684,211.884z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>
                </div>
                <div className="filter__content">
                    <FilterItem title={'all'}
                                id={null}
                                onActive={HandlerActiveFilter}
                                activeFilter={activeFilter}
                    />
                    {
                        !loading && freebetsPromo.map((item, index) => {
                            return  <FilterItem key={index}
                                                id={item.id}
                                                title={item.title}
                                                onActive={HandlerActiveFilter}
                                                activeFilter={activeFilter}
                            />
                        })
                    }
                </div>
            </div>
        </Container>
    );
};

export default FilterCheckedAccount;