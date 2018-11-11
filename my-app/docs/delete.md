
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

#### Component List
> Muốn truyền qua Item từ List thì thông qua Item trong List 
  ```
    <Item this.props.onClickDelete />
  ```
  - Và từ Item trong List ta trả về thằng handleDelete(id) trong Component Item 1 thằng this.onClickDelete(id)
 
Khi action được trả về App -> xử lý remove thông qua lodash react

#### Component App
- items là 1 array -> remove array

```
  gán items = array
  remove(array, function(n){
    return 
  })
```
Sau khi removed elements ta cần setState cho array



