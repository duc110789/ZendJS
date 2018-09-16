## Todo List

### Step1: spit các Component
#### 1. Component
    - App.js
    - Control.js
    - Form.js
    - Item.js
    - List.js
    - Search.js
    - Sort.js
    - Title.js
    
#### 2. Mock
    - Tasks.js

### Step2: Hiển thị danh sách các Item
> #### Implement
#### 1. Map() các items trong Item.js
```
const elmItem = items.map((item, index) => {
    return (
        <Item key={index}/>
    );
});
```
#### 2. Tạo file json tên tasks.js
```
let items = [
    {
        name: "ABC",
        level: 0 // 0 Small, 1 Medium, 2 High
    }
];
export default items;
```
#### 3. Import file json vào App.js
```
constructor(props) {
    super(props);

    this.state = {
        items: Tasks
    };
}
```
#### 4. Lấy id random
search reactjs generate uuid
```
const uuidv4 = require('uuid/v4');
uuidv4(); // ⇨ '10ba038e-48da-487b-96e8-8d3b99b6d18a'
```
#### 5. Show level

##### List.js
```
let elmItems = items.map((item, index) => {
    return (
        <Item key={index} item={item} index={index}/>
    );
})
```
##### Item.js
```
render() {
        const item = this.props.item;
        const index = this.props.index; // them index
```

























