## State trong Reactjs

### What
- State biểu diễn trạng thái của component.
- State là private có thể thay đổi bên trong bản thân của chính component đó. 
- Có thể change states bằng cách gọi this.setState()

### How

```
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state(
      name: 'your name';
    );
  }
  onChange = (e) => {
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <div>
        <input type='text' onChange={this.onChange.bind(this)} />
        <Notification title="hello">{this.state.name}</Notification>
      </div>
    );
  }
}
```
Gồm 3 steps:
1. Trong render() trả về this.state.function()
  - It is {this.state.date.toLocaleTimeString()}.
2. Add 1 class Constructor gán giá trị ban đầu cho this.state
  - this.state = {date: new Date()};
3. Xử lý hàm 
  - toLocaleTimeString = () => {}


