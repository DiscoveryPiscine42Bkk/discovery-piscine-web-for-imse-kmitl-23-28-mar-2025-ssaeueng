let ft_list = document.getElementById("ft_list");

const create = () => {
  let txt = prompt("Please Enter TODO LIST :");
  if (!txt || txt.trim() === "") return; 
  
  const name = new Date().getTime();
  document.cookie = `${name}=${encodeURIComponent(txt)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`; // ตั้งวันหมดอายุยาวๆ
  
  let node = document.createElement("div");
  node.innerHTML = txt;
  node.onclick = () => removeTask(node, name);
  ft_list.prepend(node);
};

const removeTask = (node, key) => {
  if (confirm("Do you want to delete?")) {
    node.remove();
    document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"; 
  }
};

const loadTasks = () => {
  const cookies = document.cookie.split("; ");
  cookies.forEach((cookie) => {
    let [key, value] = cookie.split("=");
    if (value) {
      let node = document.createElement("div");
      node.innerHTML = decodeURIComponent(value);
      node.onclick = () => removeTask(node, key);
      ft_list.prepend(node);
    }
  });
};

window.onload = loadTasks;