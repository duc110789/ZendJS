## Todo List

### Step1: spit các Component
1. Component
    - App.js
    - Control.js
    - Form.js
    - Item.js
    - List.js
    - Search.js
    - Sort.js
    - Title.js

### Step2: Hiển thị danh sách các Item
#### Mock
    - Tasks.js
    
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
3. Import file json vào App.js

