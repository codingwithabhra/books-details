import useFetch from "../useFetch";

const BookbyAuthor = ({authorName}) => {
    const {data, loading, error} = useFetch(`http://localhost:3000/books/author/${authorName}`);
    console.log(data);
    

    return data ? (
        <div>
            <h2>Book By {authorName}</h2>
            <p>{data.map (book => (
                <span>{book.title}</span>
            ))}</p>
        </div>
    ) : loading && <p>Loading...</p>
}

export default BookbyAuthor;