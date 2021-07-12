import React from 'react';
export default function Search({ text, handleTextSearch, search,handleActivePage }) {
    return (
        <>
            <div>
                <input
                    value={text}
                    onChange={e => {
                        handleTextSearch(e.target.value)
                    }}
                />
                <button onClick={() => {
                    search()
                    handleActivePage(1)
                }}>Search</button>
            </div>
        </>
    )
}