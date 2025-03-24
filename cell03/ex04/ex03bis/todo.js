$(document).ready(function () {
    loadTasks();

    $("#newTask").click(function () {
        let txt = prompt("Please Enter TODO LIST:");
        if (!txt || txt.trim() === "") return;

        const key = new Date().getTime();
        document.cookie = `${key}=${encodeURIComponent(txt)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;

        addTask(txt, key);
    });

    function addTask(text, key) {
        let task = $("<div></div>").text(text).addClass("task");
        task.click(function () {
            if (confirm("Do you want to delete?")) {
                $(this).remove();
                document.cookie = key + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            }
        });
        $("#ft_list").prepend(task);
    }

    function loadTasks() {
        document.cookie.split("; ").forEach(cookie => {
            let [key, value] = cookie.split("=");
            if (value) addTask(decodeURIComponent(value), key);
        });
    }
});