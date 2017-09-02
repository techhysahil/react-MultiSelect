'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactMultiSelect = function (_React$Component) {
  _inherits(ReactMultiSelect, _React$Component);

  function ReactMultiSelect(props) {
    _classCallCheck(this, ReactMultiSelect);

    var _this = _possibleConstructorReturn(this, (ReactMultiSelect.__proto__ || Object.getPrototypeOf(ReactMultiSelect)).call(this, props));

    var NoOfItemSelected = 0;
    if (_this.props.categoryList) {
      _this.props.categoryList.forEach(function (item) {
        if (item.checked === true) {
          NoOfItemSelected = NoOfItemSelected + 1;
        }
      });
    }

    _this.state = {
      NoOfItemSelected: NoOfItemSelected,
      searchValue: "",
      isDropdownOpen: false,
      categoryName: _this.props.categoryName,
      categoryList: _this.props.categoryList || [],
      limitNoOfSelection: _this.props.limitNoOfSelection || _this.props.categoryList.length,
      disabled: _this.props.disabled || false,
      showSearch: _this.props.showSearch || false,
      leftIcon: _this.props.leftIcon || false
    };
    _this.renderdropdown = _this.renderdropdown.bind(_this);
    _this.toggleCheckbox = _this.toggleCheckbox.bind(_this);
    _this.toggleDropdown = _this.toggleDropdown.bind(_this);
    _this.searchedList = _this.searchedList.bind(_this);
    _this.searchUpdated = _this.searchUpdated.bind(_this);
    _this.closeDropdown = _this.closeDropdown.bind(_this);
    _this.handleDocumentClick = _this.handleDocumentClick.bind(_this);
    return _this;
  }

  _createClass(ReactMultiSelect, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        categoryName: nextProps.categoryName,
        categoryList: nextProps.categoryList,
        limitNoOfSelection: nextProps.limitNoOfSelection || this.props.categoryList.length,
        disabled: nextProps.disabled || false,
        showSearch: nextProps.showSearch || false,
        leftIcon: nextProps.leftIcon || false
      });
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      document.addEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }, {
    key: 'handleDocumentClick',
    value: function handleDocumentClick(evt) {
      if (this.state.isDropdownOpen) {
        var temp = this.refs.root;
        if (!temp.contains(evt.target)) {
          this.closeDropdown();
        }
      }
    }
  }, {
    key: 'closeDropdown',
    value: function closeDropdown() {
      this.setState({
        isDropdownOpen: false,
        searchValue: ""
      });

      var slecteditems = this.state.categoryList.filter(function (item) {
        if (item.checked) {
          return item;
        }
      });
      this.props.onClose(slecteditems);
    }
  }, {
    key: 'searchUpdated',
    value: function searchUpdated(event) {
      this.setState({
        searchValue: event.target.value
      });
    }
  }, {
    key: 'searchedList',
    value: function searchedList(list, searchValue) {
      if (searchValue) {
        var searchedList = list.filter(function (list, item) {
          if (list.value.toLowerCase().indexOf(searchValue.toLowerCase()) != -1) {
            return true;
          }
        });
        return searchedList;
      } else {
        return list;
      }
    }
  }, {
    key: 'toggleDropdown',
    value: function toggleDropdown() {
      if (!this.state.disabled) {
        if (this.state.isDropdownOpen) {
          this.closeDropdown();
        }
        this.setState({
          isDropdownOpen: !this.state.isDropdownOpen
        });
      }
    }
  }, {
    key: 'toggleCheckbox',
    value: function toggleCheckbox(item, index) {
      var selectedIndex = null;
      if (!item.disabled) {
        var categoryListcopy = JSON.parse(JSON.stringify(this.state.categoryList));

        categoryListcopy.every(function (entity, index) {
          if (item.id === entity.id) {
            selectedIndex = index;
            return false;
          }
          return true;
        });

        categoryListcopy[selectedIndex].checked = !categoryListcopy[selectedIndex].checked;

        var NoOfItemSelected = 0;
        categoryListcopy.forEach(function (item) {
          if (item.checked === true) {
            NoOfItemSelected = NoOfItemSelected + 1;
          }
        });

        if (this.state.limitNoOfSelection && this.state.limitNoOfSelection < NoOfItemSelected) {
          alert("You cannot slect more items");
        } else {
          this.setState({
            categoryList: categoryListcopy,
            NoOfItemSelected: NoOfItemSelected
          });
        }
      }
    }
  }, {
    key: 'countNoOfSelectedItem',
    value: function countNoOfSelectedItem() {}
  }, {
    key: 'renderdropdown',
    value: function renderdropdown() {
      var _this2 = this;

      var renderList = void 0;
      if (this.searchedList(this.state.categoryList, this.state.searchValue).length > 0) {
        renderList = this.searchedList(this.state.categoryList, this.state.searchValue).map(function (item, index) {
          return React.createElement(
            'div',
            { className: "list-item" + (item.disabled ? " disabled" : ""), key: index, onClick: function onClick() {
                return _this2.toggleCheckbox(item, index);
              } },
            React.createElement(
              'div',
              { className: 'checkbox-wrapper' },
              React.createElement('i', { className: "icon" + (item.checked ? " icon_checkbox-chcked" : " icon_checkbox-uncheck") })
            ),
            React.createElement(
              'div',
              { className: 'item-txt' },
              item.displayName
            )
          );
        });
      } else {
        return React.createElement(
          'div',
          { className: 'no-result' },
          'No result found'
        );
      }

      return renderList;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: "react-multiSelect-wrapper" + (this.state.disabled ? " disabled" : ""), ref: 'root' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            'div',
            { className: "left-icon" + (this.state.leftIcon ? "" : " hide") },
            React.createElement('i', { className: 'icon icon_filter' })
          ),
          React.createElement(
            'div',
            { className: 'item-selected-counter' },
            React.createElement(
              'div',
              null,
              this.state.NoOfItemSelected
            )
          ),
          React.createElement(
            'div',
            { className: 'category-name' },
            this.state.categoryName
          ),
          React.createElement(
            'div',
            { className: 'right-icon', onClick: this.toggleDropdown },
            React.createElement('i', { className: 'icon icon_Icon_AnalyticsInterface-24' })
          )
        ),
        React.createElement(
          'div',
          { className: "dropdown-body" + (this.state.isDropdownOpen ? "" : " hide") },
          React.createElement(
            'div',
            { className: "input-wrapper" + (this.state.showSearch ? "" : " hide") },
            React.createElement('input', { type: 'text', ref: 'searchInput', placeholder: 'Search', value: this.state.searchValue, onChange: function onChange(e) {
                return _this3.searchUpdated(e);
              } }),
            React.createElement('i', { className: 'search-icon icon icon_Icon_AnalyticsInterface-33' })
          ),
          React.createElement(
            'div',
            { className: 'list-wrapper' },
            this.renderdropdown()
          )
        )
      );
    }
  }]);

  return ReactMultiSelect;
}(React.Component);

var TestMultiSelect = function (_React$Component2) {
  _inherits(TestMultiSelect, _React$Component2);

  function TestMultiSelect(props) {
    _classCallCheck(this, TestMultiSelect);

    var _this4 = _possibleConstructorReturn(this, (TestMultiSelect.__proto__ || Object.getPrototypeOf(TestMultiSelect)).call(this, props));

    _this4.state = {};
    _this4.closeMultiselect = _this4.closeMultiselect.bind(_this4);
    return _this4;
  }

  _createClass(TestMultiSelect, [{
    key: 'closeMultiselect',
    value: function closeMultiselect(listOfSelectedItem) {
      console.log(listOfSelectedItem);
    }
  }, {
    key: 'render',
    value: function render() {
      var categoryList = [{
        id: 0,
        displayName: "Customer 1",
        value: "Customer 1",
        checked: false,
        disabled: false
      }, {
        id: 1,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: false,
        disabled: false
      }, {
        id: 2,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: false,
        disabled: false
      }, {
        id: 3,
        displayName: "Customer 3",
        value: "Customer 3",
        checked: false,
        disabled: false
      }, {
        id: 4,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 5,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 6,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 7,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 8,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 9,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 10,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }];

      var disableCategoryList = [{
        id: 0,
        displayName: "Customer 1",
        value: "Customer 1",
        checked: false,
        disabled: true
      }, {
        id: 1,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: false,
        disabled: false
      }, {
        id: 2,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: false,
        disabled: false
      }, {
        id: 3,
        displayName: "Customer 3",
        value: "Customer 3",
        checked: false,
        disabled: false
      }, {
        id: 4,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 5,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 6,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 7,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 8,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 9,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 10,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }];

      var checkedCategoryList = [{
        id: 0,
        displayName: "Customer 1",
        value: "Customer 1",
        checked: true,
        disabled: false
      }, {
        id: 1,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: false,
        disabled: false
      }, {
        id: 2,
        displayName: "Customer 2",
        value: "Customer 2",
        checked: true,
        disabled: false
      }, {
        id: 3,
        displayName: "Customer 3",
        value: "Customer 3",
        checked: false,
        disabled: false
      }, {
        id: 4,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 5,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 6,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 7,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 8,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 9,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }, {
        id: 10,
        displayName: "Customer 4",
        value: "Customer 4",
        checked: false,
        disabled: false
      }];

      var categoryName = "Customer";

      return React.createElement(
        'div',
        { className: 'example-wrapper' },
        React.createElement(
          'h2',
          null,
          'Simple react MultiSelect control.'
        ),
        React.createElement(
          'p',
          null,
          'A simple react MultiSelect with placeholder, datasource and onClose event.'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: categoryList,
          categoryName: categoryName,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'Simple react MultiSelect with no search box.'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: categoryList,
          categoryName: categoryName,
          limitNoOfSelection: '7',
          showSearch: false,
          disabled: false,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'Simple react MultiSelect in disabled control'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: categoryList,
          categoryName: categoryName,
          limitNoOfSelection: '7',
          showSearch: true,
          disabled: true,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'Simple react MultiSelect with maximum 3 item selection'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: categoryList,
          categoryName: categoryName,
          limitNoOfSelection: '3',
          showSearch: true,
          disabled: false,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'Simple react MultiSelect with 1st disabled item'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: disableCategoryList,
          categoryName: categoryName,
          limitNoOfSelection: '3',
          showSearch: true,
          disabled: false,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'React MultiSelect with some checked item by default'
        ),
        React.createElement(ReactMultiSelect, {
          categoryList: checkedCategoryList,
          categoryName: categoryName,
          limitNoOfSelection: '3',
          showSearch: true,
          disabled: false,

          onClose: this.closeMultiselect.bind(this)
        }),
        React.createElement(
          'h2',
          null,
          'Features'
        ),
        '- Reflect live changes on changing datasource data. - Default checked checkbox and disabled particular item. - Diable control. limit maximumm no. of selection, enable lefticon & search disable etc.'
      );
    }
  }]);

  return TestMultiSelect;
}(React.Component);

ReactDOM.render(React.createElement(TestMultiSelect, null), document.getElementById('example'));