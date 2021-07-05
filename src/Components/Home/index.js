
import React, {Component} from 'react';
import axios from 'axios'

import { Confirm } from 'react-st-modal';

class ListComponent extends Component{
    constructor(props){
        super(props)
        this.state={
            listGestores: [],
        }
    }

    sendDelete = async (id) => {
        await axios.post('gestor/delete', {id})
        .then(res=>{
            return res
        }).catch(e=>{
            alert(e)
        })
    }

    onDelete = async (id) => {
        const result = await Confirm('Você tem certeza?');
      
      if (result) {
          this.sendDelete(id)
      }
    }

    componentDidMount(){
        axios.get('gestor/list').then(
            res =>{                 
                if(res.data.success){
                    const data = res.data.data
                    console.log(data)
                    this.setState({listGestores: data})
                }else{
                    alert("Erro!")
                }
            }).catch(error=>{
                alert(error)
            })
    }
    loadData(){
            return this.state.listGestores.map((data) =>{
                return(
                    <tr key={data.id}>
                        <th>{data.id}</th>
                        <td>{data.nome}</td>
                        <td>{data.contacto_instituicao}</td>
                        <td>{data.instituicao}</td>
                        <td>{data.data_associacao}</td>
                        <td>
    
                            <button class="btn btn-outline-danger" onClick={()=>this.onDelete(data.id)}> Deletar </button>
                        </td>
                    </tr>
                )
            })
    }

    render()
    {
        return (
            <table className="table table-hover table-striped">
                <thead className="thead-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Contacto</th>
                    <th scope="col">Instituição</th>
                    <th scope="col">Data Associação</th>
                    <th colSpan="2">Acção</th>
                </tr>
                </thead>

                <tbody>
                    {this.state.listGestores.length === 0 ? <h2 style={{textAlign: 'center'}}>Sem dados disponíveis, adicione um gestor</h2> : this.loadData()}
                    </tbody>
            </table>
        );
    }
}

export default ListComponent