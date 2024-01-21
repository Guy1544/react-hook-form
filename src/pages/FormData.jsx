

const FormData = () => {
  return (
    <>
      <h1>Fill in information</h1>
      <form>
        <p>
          <label>Name:</label>
          <input type="text" name="name" id="name" />
        </p>
        <p>
          <label>E-mail:</label>
          <input type="text" name="email" />
        </p>
        <p>
          <label>Jobs:</label>
          <input type="text" name="job" id="job" />
        </p>
        <p>
          <label>Salary</label>
          <input type="text" name="salary" id="salary" />
        </p>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default FormData;
