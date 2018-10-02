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
    Create a function name: showElementLevel()
    ```
    showElementLevel(level) {
        let elmLevel = <span className="label label-info">Small</span>;
        if (level === 1) {
            elmLevel = <span className="label label-primary">Medium</span>;
        }
        else if (level === 2) {
            elmLevel = <span className="label label-danger">High</span>;
        }
        return elmLevel;
    }
    ```
    invoke <td className="text-center">{this.showElementLevel(item.level)}</td>

#### 6. Add task
    ##### Control.js
    1. Đầu tiên render() ra 1 thằng elmButton với onclick = {this.handleAdd}
    ```
    let elmButton = <button onClick = {this.handleAdd} type="button" className="btn btn-info btn-block">Add Task</button>;
    ```
    Sau đó return về {elmButton}
    2. Xử lý handleAdd() console.log xem có log đến nó ko
    ##### App.js
    1. Trong khi trả về <Control> sẽ truyền vào Control 1 onClickAdd = {this.handleToggleForm}
    2. Xử lý hàm handleToggleForm()
    ```
    handleToggleForm = () => {
        this.setState({
            isShowForm: !this.state.isShowForm
        });
    }
    ```
    3. Trong Control.js gọi đến onClickAdd() trong hàm handleAdd()

#### 7. Search
Truyền dữ liệu từ form cha qua form con thì dùng props, có thể dùng function hoặc biến.

Khi form con nhận được hàm or biến thì lấy giá trị của nó trả lại cho form cha, từ đó dữ liệu từ form cha sẽ nhận lấy được giá trị từ form con

    ##### App.js
    ```
    <Control 
        onClickSearchGo = {this.hangdleSearch}
        onClickAdd = {this.handleToggleForm} 
        isShowForm = {isShowForm}
    />
    ```
























