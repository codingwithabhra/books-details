import useFetch from "../useFetch";
import { useState } from "react";

const Books = () => {

    const [successMsg, setSuccessMsg] = useState("");

    const {data, loading, error} = useFetch("http://localhost:3000/books");

    const handleDelete = async(bookId) =>{
        const response = await fetch(`http://localhost:3000/books/${bookId}`,
            {method: "DELETE"},
        )

        if(!response.ok){
            throw "Failed to add book";
        }

        const data = await response.json();

        if(data){
            setSuccessMsg("Book added successfully");
            window.location.reload();
        }
    }

    return (
        <div>
            <ul>
                {data?.map(book => (
                    <li key={book._id}>{book.title}{" "}<button onClick={()=>handleDelete(book._id)}>Delete</button></li>
                ))}
            </ul>
            <p>{successMsg}</p>
        </div>
    )
    
}

export default Books;