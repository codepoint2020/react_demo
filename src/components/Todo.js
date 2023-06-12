import { useState } from "react";
import Backdrop from './Backdrop';
import Modal from './Modal';

function Todo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    const {title, content} = props;

    function deleteHandler() {
        setModalIsOpen(true);
    }

    function closeModalHandler() {
        setModalIsOpen(false);
    }

    return (
    <div className="card">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="actions">
        <button className="btn" onClick={deleteHandler}>Delete</button>
        </div>
        { modalIsOpen && <Modal icancela={closeModalHandler} econfirma={closeModalHandler}/>}
        { modalIsOpen && <Backdrop isara = {closeModalHandler}/>}
        
    
    </div>
    );
}

export default Todo;