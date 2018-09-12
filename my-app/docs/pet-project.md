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
1. Map() các items trong Item.js
```
const elmItem = items.map((item, index) => {
    return (
        <Item key={index}/>
    );
});
```
2. Tạo file json tên tasks.js
```
let items = [
    {
        name: "ABC",
        level: 0 // 0 Small, 1 Medium, 2 High
    }
];
export default items;
```
3. Import file json vào App.js
```
constructor(props) {
    super(props);

    this.state = {
        items: Tasks
    };
}
```

























