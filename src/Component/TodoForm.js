import React, {Component} from 'react';

class TodoForm extends Component{
    constructor (){
        super();
        //Estados iniciales:
        this.state={
            title:'',
            responsible:'',
            description:'',
            priority: 'low'
        };
        //Indicando a que componente pertenece(para que no se pierda el scope)
        this.handleInputChange = this.handleInputChange.bind(this);     
        this.handleSubmit = this.handleSubmit.bind(this);       
    }

    //Evento que maneja el envío del formulario.
    handleSubmit(e){
        e.preventDefault();                 //Evita refrescar toda la página.
        //Evento que jala a la función de 'Agregar nueva tarjeta' y le asigna el estado actual:
        this.props.onAddTodo(this.state);   
        this.setState({
            title:'',
            responsible:'',
            description:'',
            priority: 'low'
        });
    }

    //Acción que se ajecuta cada que hay un cambio en un input (manda a consola lo que se escribe dentro del input).
    handleInputChange(e){
        const{value,name} = e.target;
        console.log(value,name);
        this.setState({
            [name]:value                    //Modifica el estado con el nuevo nombre.
        });
    }
    
    render(){
        return(
            <div className="card">
                <form onSubmit={this.handleSubmit} className="card-body">
                    <div className="form-group">
                        <input 
                        type="text"
                        name="title"
                        className="form-control"
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        placeholder="Track Number"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="responsible"
                        className="form-control"
                        value={this.state.responsible}
                        onChange={this.handleInputChange}
                        placeholder="Artist"
                        />
                    </div>
                    <div className="form-group">
                        <input
                        type="text"
                        name="description"
                        className="form-control"
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        placeholder="Track Name"
                        />
                    </div>
                    <div className="form-group">
                        <select
                        name="priority"
                        className="form-control"
                        value={this.state.priority}
                        onChange={this.handleInputChange}
                        >
                            <option>soon</option>
                            <option>exclusive</option>
                            <option>out now</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-outline-info btn-sm">
                        Save
                    </button>
                </form>
            </div>
        );
    }
}

export default TodoForm;