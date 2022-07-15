import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { LanguageContext } from '../Apps';
import '../css/ContactForm.css';

export default class ContactForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '',
            email: '',
            show: false,
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleName(event) {
        this.setState({name: event.target.value})
    }

    handleEmail(event){
        this.setState({email:event.target.value})
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState({show: true})

    }

    handleClose = () =>{
        this.setState({show: false})
    }
    render() {
        
        return (
            <LanguageContext.Consumer>{(language)=>(
                <>
                <form className='form-container row justify-content-around' onSubmit={this.handleSubmit}>
                    <div className='col-6 row'>
                        <label className='block'>
                            {language==='En'? 'Nom':'Name'}
                        </label>
                        <input className='col-12' type='text' required={true} value={this.state.name} onChange={this.handleName}/>
                    </div>
                    <div className='col-6 row'>
                        <label className='block'>
                            E-mail
                        </label>
                        <input className='col-12' type='email' required={true} value={this.state.email} onChange={this.handleEmail}/>
                    </div>
                    <div className='row comment-container'>
                        <label className='block'>{language==='En'? 'Votre commentaire':'Your comment'}</label>
                        <textarea required={true}></textarea>
                        <input className='submit-btn' type='submit' value={language==='En'?'Soumettre':'Submit'}/>
                    </div>
                </form>
    
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{language==='En'?'Reçu!':'Recieved!'}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        {language==='En'?'Commentaires soumis. Merci!':'Feedback submitted. Thank you!'}
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        {language=='En'? 'Fermer':'Close'}
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
            )}</LanguageContext.Consumer>
        )
    }
}