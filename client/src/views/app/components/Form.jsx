import  inputSore  from "../../../utils/store/inputStore";

const Form = () => {

  const { title, content, important, setInput } = inputSore() 
  
  function handleSubmit(e){
    e.preventDefault()
   
  }

  function handleInput(e){
    setInput(
      e.target.name,
      e.target.value
    )
  }
  function handleCheck(e){
    setInput(
      e.target.name,
      e.target.checked
    )
  }
 
  return ( 
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} type="text" name="title" placeholder="Title" />
      <input onChange={handleInput} type="text" name="content" placeholder="Content" />
      <label >Is important</label>
      <input 
        onChange={handleCheck} 
        type="checkbox" name="important" placeholder="Is important"
      />
      <button>Create</button>

    </form>
   );
}
 
export default Form;