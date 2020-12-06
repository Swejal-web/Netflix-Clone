import React from 'react';
import useContent from '../hooks/use-content';
import selectionFilter from '../utils/selection-filter';
import BrowseContainer from '../containers/browseContainer';


const Browse=()=>{
    const {series} = useContent('series');
    const {films} = useContent('films');
    // console.log(series);
    // console.log(films);
    const slides = selectionFilter({series,films});
   // console.log(slides);

    return <BrowseContainer slides={slides}/>;
}
export default Browse;