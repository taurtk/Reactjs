import React, { useState } from 'react';

function TodoList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, { text: item, done: false }]);
    setItem(''); // Clear the input after adding an item
  };

  const handleOnChange = (e) => {
    setItem(e.target.value);
  };

  const editItem = (index, newValue) => {
    const updatedList = [...list];
    updatedList[index].text = newValue;
    setList(updatedList);
  };

  const toggleDone = (index) => {
    const updatedList = [...list];
    updatedList[index].done = !updatedList[index].done;
    setList(updatedList);
  };

  const deleteItem = (index) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };

  return (
    <div>
      <h1>To Do List React</h1>
      <input type="text" onChange={(e) => handleOnChange(e)} value={item} />
      <button className="btn btn-success" onClick={() => addItem()}>
        Add Item
      </button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <span
              style={{ textDecoration: item.done ? 'line-through' : 'none' }}
            >
              {item.text}
            </span>
            <button onClick={() => toggleDone(index)}>
              {item.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => editItem(index, prompt('Edit item:', item.text))}>
              Edit
            </button>
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
