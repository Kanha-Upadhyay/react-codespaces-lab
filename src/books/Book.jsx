function Book({title, author}){
// const title="The Lord Of The Rings ";
// const author ="J RR Tolkien";
return (
    <tr>
        <td>
            {title}
        </td>
        <td>{author }</td>
    </tr>
);

}
export default Book;