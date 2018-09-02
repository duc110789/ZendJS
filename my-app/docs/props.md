
### Props

1. Cách truyền vào thuộc tính cho component

```
<Course name="ReactJS">
```

2. This gọi đến props gọi đến thuộc tính
```
{this.props.name}
```

> Truyền giá trị vào phần mở/đóng của component muốn lấy ra giá thì thì

<Course>Hello ReactJS</Course>

Lấy Hello ReactJS bằng cách

```
{this.props.children}
```

3. Để tạo function xử lý true/false của type
```
isCoursFree() {
    const isFree = this.props.free;
    console.log("isFree", isFree);
    if (isFree === true) {
        return <div className="panel-footer">
                    <button type="button" className="btn btn-warning">View</button>
                </div>;
    }
}
```
> True ở đây phải là boolen chứ không phải string
```
free={item.free} chứ không phải free="true"
```


