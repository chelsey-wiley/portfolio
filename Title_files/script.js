'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var mountNode = document.querySelector('#react-root');

var AppComponent = function (_React$Component) {
  _inherits(AppComponent, _React$Component);

  _createClass(AppComponent, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.theInput.focus();
    }
  }]);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    var _this = _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).call(this));

    _this.state = {
      apiResult: {
        items: []
      }
    };
    console.log('getting the info');
    return _this;
  }

  _createClass(AppComponent, [{
    key: 'clicky',
    value: function clicky() {
      console.log('the input', this.theInput, this.theInput.value);
      this.theData(this.theInput.value);
    }
  }, {
    key: 'keyUp',
    value: function keyUp(evt) {
      console.log(evt.keyCode, evt.target);
      if (evt.keyCode === 13) {
        this.theData(evt.target.value);
      }
    }
  }, {
    key: 'theData',
    value: function theData() {
      var _this2 = this;

      $.ajax({
        url: "https://api.github.com/search/users?q=" + this.theInput.value
      }).done(function (data) {
        console.log('got the data', data);
        _this2.setState({
          apiResult: data
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'data-component' },
        React.createElement('input', { placeholder: 'search', onKeyUp: function onKeyUp(evt) {
            _this3.keyUp(evt);
          }, ref: function ref(theDomElement) {
            _this3.theInput = theDomElement;
          } }),
        React.createElement(
          'button',
          { onClick: function onClick() {
              _this3.clicky();
            } },
          'enter'
        ),
        React.createElement(
          'ul',
          { className: 'results' },
          this.state.apiResult.items.map(function (info) {
            return React.createElement(
              'li',
              { className: 'theList', key: info.id },
              React.createElement(
                'div',
                { className: 'name' },
                info.login
              ),
              React.createElement(
                'div',
                { className: 'url' },
                info.repos_url
              )
            );
          })
        )
      );
    }
  }]);

  return AppComponent;
}(React.Component);

ReactDOM.render(React.createElement(AppComponent, null), mountNode);
//# sourceMappingURL=script.js.map
