
const Form = ({ body, onBodyChange, onSubmission }) => {
  return (
    <>
      <form onSubmit={ (ev) => {
        ev.preventDefault();
        onSubmission(body);
      } }>
        <textarea value={ body } onChange={ (ev) => {
          onBodyChange(ev.target.value);
        } }></textarea>
        <button type="submit">submit</button>
      </form>;
    </>
  );
};

export default Form;
