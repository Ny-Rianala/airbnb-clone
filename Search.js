// import React, { useEffect, useState } from "react";


// function Search() {
//    const [searchStay, setSearch] = useState('');
//    const [searchResults, setSearchResult] = useState([]);
//    const handleChange = e => {
//        setSearch(e.target.value);
//        console.log(handleChange);
//    };

//    useEffect(() => {
//       const results = Stays.filter(list => list.toLowerCase.includes(searchResults));
//         setSearchResult(results);
//       }, [searchStay]);

//    return (
//         <form>
//             <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchStay}
//                 onChange={(e) => setSearchResults(e.target.value)} 
//             />
//                 <ul>
//                 {searchResults.map(item => (
//                 <li>{item}</li>
//             ))}
//             </ul>
//        </form>
//    )
// }



// export default Search;