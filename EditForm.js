import React from "react";


function EditForm() {
    // class Select extends React.Component {
    //     constructor(props) {
    //       super(props);
          
    //       this.state = { value: 'select'};
    //     }
    //     onChange(e) {
    //       this.setState({
    //         value: e.target.value
    //       })
    //     }
    //     render() {
        return (
            <div className="form-group">
                <label htmlFor="select"></label>
                <select className="form-control">
                    <option value="Helsinki, Finland">Helsinki, Finland</option>
                    <option value="Turku, Finland">Turku, Finland</option>
                    <option value="Oulu, Finland">Oulu, Finland</option>
                    <option value="Vaasa, Finland">Vaasa, Finland</option>
                </select>
            </div>
      )
}


export default EditForm;