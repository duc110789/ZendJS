
### Delete Items

#### Component Item
> Gửi id từ Item.js => App.js

- Tạo 1 function handleDelete(id) -> tham số id
- Trong button Delete onClick = {nhận vào 1 tham số}, tham số = arrow function () => this.handleDelete(items.id)

#### Component App
> Cũng tạo 1 function handleDelelte(id) mục đích nhận action từ thằng Component Item gửi về

- Trong thằng App chứa <List /> trong List chứa Item vậy:
  - Truyền vào thằng App để implement thì thông qua -> List từ -> Item
   ```
      <List onClickDelete = {this.handleDelete} />
   ```

#### Compenent List
> Muốn truyền qua Item từ List thì thông qua Item trong List 
 


