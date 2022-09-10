import React, { useState, useEffect, useRef } from "react";
import SearchBarItem from "./SearchBarItem";

export default function SearchBar({ getCSRFToken }) {
    const [search, setSearch] = useState('')
    // const isMounted = useRef(false)
    const [publicMembers, setPublicMembers] = useState([])
    const debouncedSearch = useDebounce(search, 100)

    function formatResponse(res){
        // console.log(res)
        return res.map(member => {
            // console.log(member)
            return {
                username: member.username,
                firstName: member.first_name,
                lastName: member.last_name,
            }
        })
    }

    useEffect(() => {
        if(debouncedSearch !== ""){
            fetch("http://localhost:3000/api/v1/allPublicMembers", {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-CSRF-Token': getCSRFToken(),
                    "Content-Type": "application/json",
                },                
                body: JSON.stringify({q: `${debouncedSearch}%`})
            })
            .then(res => res.json())
            .then(data => {
                setPublicMembers(formatResponse(data))
            })          
            .catch(error => console.log(error))
        } else{
        //   console.log("should be getting rid of search container")
        setPublicMembers(() => [])
        }
    }, [debouncedSearch])

    //debounce hook
    //only changes value in state after delay
    
    function useDebounce(value, delay) {
        const [debouncedValue, setDebouncedValue] = useState(value);
        useEffect(
            () => {
                const handler = setTimeout(() => {
                    setDebouncedValue(value);
                }, delay);
                return () => {
                    clearTimeout(handler);
                };
            }, [value, delay]
        );
        return debouncedValue;
    }






    const renderResults = publicMembers.map(publicMember => {
        return (
            <SearchBarItem publicMember={publicMember}/>
        )
    }) 

    return (
        <div>
            <form className="search-form">
                <label>Search: </label>
                <input type="text" name="query" id="query" onChange={e => setSearch(e.target.value)} value={search}/>
                <div className="search-item-container">
                    {renderResults}
                </div>
            </form>
        </div>
    )
}