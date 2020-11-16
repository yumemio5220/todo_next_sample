import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [tmpTodo, setTmpTodo] = useState("");

  const addTodo = () => {
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }
    setTodos([...todos, tmpTodo]);
    setTmpTodo("");
  };

  const deleteTodo = index => {
    const newTodos = todos.filter((todo, todoIndex) => {
      return index !== todoIndex;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <h1>TODOアプリ</h1>
      <div className="form">
        <input
          type="text"
          name="todo"
          onChange={e => setTmpTodo(e.target.value)}
          value={tmpTodo}
          className="todo"
        />
        <button onClick={addTodo} className="add">新規登録</button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)} className="delete">削除</button>
            </li>
          );
        })}
      </ul>
      <style>{`
        h1 {
          text-align: center;
        }
        .form {
          display: flex;
          justify-content: center;
        }
        .todo {
          width: 50%;
        }
        .add {
          cursor: pointer; 
        }
        .delete {
          cursor: pointer; 
        }
        ul {
          width: 55%;
          margin: 10px auto;
        }
      `}</style>
    </>
  );
};
export default App;
