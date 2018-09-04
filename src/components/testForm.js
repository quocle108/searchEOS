/*eslint-disable no-unused-vars */
import React from 'react'

// const TestForm = props => {
//   const {
//     handleAccountName,
//     name,
//   } = props

//   function onChangeText(event) {
//      console.log("handleChangeText ", event.target.value);
//     //  setState({ name: event.target.value });

//   }

//   return (
//     <div>
//       <input
//       type="text"
//       value = {name}
//       onChange={onChangeText}
//       />
//       <button onClick={handleAccountName}>
//         Test Function
//     </button>

//     </div>
//   )
// }
class TestForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
    }
    this.onChangeText = this.onChangeText.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  onChangeText(e) {
    console.log("tam_ onChangeText ", e.target.value);
    this.setState({ name: e.target.value });


  };
  handleClick(e) {
    console.log("tam_ handle click ", this.state.name);

    this.props.handleAccountName(this.state.name);
  }

  render() {


    return (
      <div>
        <input
          type="text"
          onChange={this.onChangeText}
        />

        <button onClick={this.handleClick}>
          Search
      </button>

      </div>
    )
  };


}



export default TestForm
