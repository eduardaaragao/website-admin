import React from 'react'
import axios from 'axios';

class AddComponent extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nome : "",
            email: "",
            password: "", 
            nome_empresa: '',
            contacto_empresa:'',
            lat: '',
            lon: ''
        }
    }

    render(){
        return (
            <form>
                <div className="form-row justify-content-center">
                    <div className="form-group col-md-6">
                        <label htmlFor="inputTitulo">Nome Gestor</label>
                        <input type="text" className="form-control" placeholder="Digite o nome" value={this.state.nome} onChange={(val) => this.setState({nome: val.target.value})}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label htmlFor="inputDescricaos">E-mail</label>
                        <input type="text" className="form-control" placeholder="Digite o email" value={this.state.email} onChange={(val) => this.setState({email: val.target.value})}></input>
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label htmlFor="input"></label>
                        <input type="password" className="form-control" placeholder="Digite a password" value={this.state.password} onChange={(val) => this.setState({password: val.target.value})}></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="input"></label>
                        <input type="text" className="form-control" placeholder="Digite a latitude" value={this.state.lat} onChange={(val) => this.setState({lat: val.target.value})}></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="input"></label>
                        <input type="text" className="form-control" placeholder="Digite a longitude" value={this.state.lon} onChange={(val) => this.setState({lon: val.target.value})}></input>
                    </div>

                    
                    <div className="form-group col-md-6">
                        <label htmlFor="input"></label>
                        <input type="text" className="form-control" placeholder="Digite o contacto da instituição" value={this.state.contacto_empresa} onChange={(val) => this.setState({contacto_empresa: val.target.value})}></input>
                    </div>

                    <div className="form-group col-md-6">
                        <label htmlFor="input"></label>
                        <input type="text" className="form-control" placeholder="Digite o nome da instituição" value={this.state.nome_empresa} onChange={(val) => this.setState({nome_empresa: val.target.value})}></input>
                    </div>
                    
                </div>                

                <button type="submit" className="btn btn-primary" onClick={() => this.sendSave()}>Adicionar</button>
            </form>
            
        );
    }    

    registar = async () => {
        const data = {
            nome: this.state.nome,
            email: this.state.email,
            password: this.state.password,
            lat: this.state.lat,
            lon: this.state.lon,
            nome_empresa: this.state.nome_empresa,
            contacto_empresa: this.state.contacto_empresa,
        }

        try{
            await axios.post('auth/registoGestor', data)
        }catch(e){
            alert(e)
        }
    }

    sendSave(){
        if (this.state.nome === ''){
            alert('Campo nome está nulo')
        }
        else if (this.state.email ===''){
            alert('Campo email está nulo')
        }
        else if (this.state.nome_empresa === ''){
            alert('Campo nome empresa está nulo')
        }
        else if (this.state.lat === ''){
            alert('Campo latitude está nulo')
        }
        else if (this.state.lon === ''){
            alert('Campo longitude está nulo')
        }
        else{
            this.registar()
        }
    }

}

export default AddComponent