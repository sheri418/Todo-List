import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Check if the description is empty before making the API call
    if (!description.trim()) {
      setShowModal(true);
      return;
    }

    try {
      const body = { description };
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5 animated-heading">Input Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control mr-2"
          placeholder="Add a new todo..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ border: "2px solid #61dafb", borderRadius: "5px" }}
        />
        <button className="btn btn-success" type="submit">
          ADD
        </button>
      </form>

      {showModal && (
        <div className="modal" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Warning!</h5>
                <button
                  type="button"
                  className="close"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
              <div className="modal-body">
                Please enter Any todo description.
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default InputTodo;
