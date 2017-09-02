import ReactMultiSelect from '../dist/react-MultiSelect'

class TestMultiSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeMultiselect = this.closeMultiselect.bind(this);
  }

  closeMultiselect(listOfSelectedItem){
    console.log(listOfSelectedItem);
  } 
  
  render() {
    let categoryList = [
          {
            id: 0,
            displayName : "Customer 1",
            value : "Customer 1",
            checked : false,
            disabled : false
          },
          {
            id: 1,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : false,
            disabled : false
          },
          {
            id: 2,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : false,
            disabled : false
          },
          {
            id: 3,
            displayName : "Customer 3",
            value : "Customer 3",
            checked : false,
            disabled : false
          },
          {
            id: 4,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 5,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 6,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 7,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 8,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 9,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 10,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          }
        ];

    let disableCategoryList = [
          {
            id: 0,
            displayName : "Customer 1",
            value : "Customer 1",
            checked : false,
            disabled : true
          },
          {
            id: 1,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : false,
            disabled : false
          },
          {
            id: 2,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : false,
            disabled : false
          },
          {
            id: 3,
            displayName : "Customer 3",
            value : "Customer 3",
            checked : false,
            disabled : false
          },
          {
            id: 4,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 5,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 6,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 7,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 8,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 9,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 10,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          }
        ];

    let checkedCategoryList = [
          {
            id: 0,
            displayName : "Customer 1",
            value : "Customer 1",
            checked : true,
            disabled : false
          },
          {
            id: 1,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : false,
            disabled : false
          },
          {
            id: 2,
            displayName : "Customer 2",
            value : "Customer 2",
            checked : true,
            disabled : false
          },
          {
            id: 3,
            displayName : "Customer 3",
            value : "Customer 3",
            checked : false,
            disabled : false
          },
          {
            id: 4,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 5,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 6,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 7,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 8,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 9,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          },
          {
            id: 10,
            displayName : "Customer 4",
            value : "Customer 4",
            checked : false,
            disabled : false
          }
        ];

    let categoryName = "Customer";    
    
    return (
        <div className="example-wrapper">
          <div className="title">React MultiSelect Example</div>
          <div className="example-body">
            <div className="heading">Simple react MultiSelect control.</div>
            <p>A simple react MultiSelect with placeholder, datasource and onClose event.</p>
            <ReactMultiSelect 
              categoryList = {categoryList}
              categoryName = {categoryName}
              
              onClose = {this.closeMultiselect.bind(this)}
            />

            <div className="heading">Simple react MultiSelect with no search box.</div>
            <p>React MultiSelect with search disabled using "showSearch" option</p>
            <ReactMultiSelect 
              categoryList = {categoryList}
              categoryName = {categoryName}
              limitNoOfSelection = "7"
              showSearch = {false}
              disabled = {false}
              
              onClose = {this.closeMultiselect.bind(this)}
            />

            <div className="heading">Simple react MultiSelect in disabled control</div>
            <p>React MultiSelect disabled using "disabled" option</p>
            <ReactMultiSelect 
              categoryList = {categoryList}
              categoryName = {categoryName}
              limitNoOfSelection = "7"
              showSearch = {true}
              disabled = {true}
              
              onClose = {this.closeMultiselect.bind(this)}
            />

            <div className="heading">Simple react MultiSelect with maximum 3 item selection</div>
            <p>React MultiSelect with limiting maximum number of selection using "limitNoOfSelection" option to ant integer value less than length of datasource</p>
            <ReactMultiSelect 
              categoryList = {categoryList}
              categoryName = {categoryName}
              limitNoOfSelection = "3"
              showSearch = {true}
              disabled = {false}
              
              onClose = {this.closeMultiselect.bind(this)}
            />

            <div className="heading">Simple react MultiSelect with 1st disabled item</div>
            <ReactMultiSelect 
              categoryList = {disableCategoryList}
              categoryName = {categoryName}
              limitNoOfSelection = "3"
              showSearch = {true}
              disabled = {false}
              
              onClose = {this.closeMultiselect.bind(this)}
            />

            <div className="heading">React MultiSelect with some checked item by default</div>
            <ReactMultiSelect 
              categoryList = {checkedCategoryList}
              categoryName = {categoryName}
              limitNoOfSelection = "3"
              showSearch = {true}
              disabled = {false}
              
              onClose = {this.closeMultiselect.bind(this)}
            />
          </div>
          </div>
    )
  }
}

ReactDOM.render(<TestMultiSelect />, document.getElementById('example'));