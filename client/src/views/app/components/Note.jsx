const Note = ({title, content, important}) => {
  return ( 
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <button>{important?"Important":"no important"}</button>
    </div>
   );
}
 
export default Note;