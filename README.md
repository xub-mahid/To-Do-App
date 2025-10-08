# 📝 ToDo App (React + Tailwind CSS)

## 📖 Project Overview
This is a simple **ToDo App** built using **React.js** and **Tailwind CSS**.  
It allows users to add, display, and delete tasks easily.  
The app demonstrates React fundamentals such as **useState**, **event handling**, and **list rendering**.

---

## ⚙️ Features
✅ Add new tasks  
✅ Display all tasks dynamically  
✅ Delete any task  
✅ Prevent form reload on submit  
✅ Styled with Tailwind CSS  
✅ Clean and responsive UI  

---

## 🧩 Tech Stack
- **Frontend:** React.js  
- **Styling:** Tailwind CSS  
- **Language:** JavaScript (ES6)

---

## 📂 Project Structure
💻 Code Explanation
🧠 useState Hooks
const [todo, setTodo] = useState("")     // Single task input
const [list, setList] = useState([])     // All tasks list

✍️ Add Task Function
const addTask = () => {
  if (todo !== "") {
    setList([...list, todo])
    setTodo("")
  }
}

❌ Delete Task Function
const deleteF = (index) => {
  const updatedList = list.filter((_, i) => i !== index)
  setList(updatedList)
}


