import React from 'react';
import Modal,{prototype} from 'react-modal'

const UpdateProf = (props) => (
    <Modal
        isOpen = {props.isOpen}
        contentLabel = "My Profile"
        onRequestClose = {props.handleCloseOpt}
        className = "modal"
    >
        <h2 className = "modal__title">My Profile</h2>
        <div className = "Profile__Details">
            <img src = {props.profile_pic}/>
            <div className = "Main_Details">
                <h4>Name : {props.name}</h4>
                <h4>Email : {props.email}</h4>
            </div>
        </div>
        <button className = "DropDown__btn" onClick = {props.handleCloseOpt}>Okay</button>
    </Modal>
)

export default UpdateProf;