tailwind.config = {
        theme: {
          extend: {
            colors: { primary: "#4f46e5", secondary: "#818cf8" },
            borderRadius: {
              none: "0px",
              sm: "4px",
              DEFAULT: "8px",
              md: "12px",
              lg: "16px",
              xl: "20px",
              "2xl": "24px",
              "3xl": "32px",
              full: "9999px",
              button: "8px",
            },
          },
        },
      };

// To-Do List App Functionality

document.addEventListener("DOMContentLoaded", function () {
        const taskInput = document.getElementById("task-input");
        const addBtn = document.getElementById("add-btn");
        const taskList = document.getElementById("task-list");
        const errorMessage = document.getElementById("error-message");
        const emptyState = document.getElementById("empty-state");
        const taskCount = document.getElementById("task-count");
        let tasks = [];
        // Load tasks from localStorage
        function loadTasks() {
          const savedTasks = localStorage.getItem("tasks");
          if (savedTasks) {
            tasks = JSON.parse(savedTasks);
            renderTasks();
            updateTaskCount();
          }
        }
        // Save tasks to localStorage
        function saveTasks() {
          localStorage.setItem("tasks", JSON.stringify(tasks));
          updateTaskCount();
        }
        // Add new task
        function addTask() {
          const taskText = taskInput.value.trim();
          if (taskText === "") {
            showError("Please enter a task");
            return;
          }
          const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false,
          };
          tasks.push(newTask);
          saveTasks();
          renderTasks();
          taskInput.value = "";
          hideError();
        }
        // Delete task
        function deleteTask(id) {
          tasks = tasks.filter((task) => task.id !== id);
          saveTasks();
          renderTasks();
        }
        // Toggle task completion
        function toggleTaskCompletion(id) {
          tasks = tasks.map((task) => {
            if (task.id === id) {
              return { ...task, completed: !task.completed };
            }
            return task;
          });
          saveTasks();
          renderTasks();
        }
        // Render all tasks
        function renderTasks() {
          if (tasks.length === 0) {
            emptyState.classList.remove("hidden");
            taskList.innerHTML = "";
            taskList.appendChild(emptyState);
          } else {
            emptyState.classList.add("hidden");
            taskList.innerHTML = "";
            tasks.forEach((task) => {
              const taskItem = document.createElement("div");
              taskItem.className =
                "task-item flex items-center justify-between p-4 border border-gray-700/50 rounded-lg bg-gray-800/30 backdrop-blur-sm";
              taskItem.dataset.id = task.id;
              const leftSection = document.createElement("div");
              leftSection.className = "flex items-center gap-3 flex-grow";
              const checkboxLabel = document.createElement("label");
              checkboxLabel.className = "custom-checkbox";
              const checkbox = document.createElement("input");
              checkbox.type = "checkbox";
              checkbox.checked = task.completed;
              checkbox.addEventListener("change", () =>
                toggleTaskCompletion(task.id),
              );
              const checkmark = document.createElement("span");
              checkmark.className = "checkmark";
              checkboxLabel.appendChild(checkbox);
              checkboxLabel.appendChild(checkmark);
              const taskText = document.createElement("span");
              taskText.className = task.completed
                ? "completed-task"
                : "text-gray-200";
              taskText.textContent = task.text;
              leftSection.appendChild(checkboxLabel);
              leftSection.appendChild(taskText);
              const deleteButton = document.createElement("button");
              deleteButton.className =
                "delete-btn w-8 h-8 flex items-center justify-center text-gray-400 hover:text-red-500";
              deleteButton.innerHTML = '<i class="ri-close-line ri-lg"></i>';
              deleteButton.addEventListener("click", () => deleteTask(task.id));
              taskItem.appendChild(leftSection);
              taskItem.appendChild(deleteButton);
              taskList.appendChild(taskItem);
            });
          }
        }
        // Show error message
        function showError(message) {
          errorMessage.textContent = message;
          errorMessage.classList.remove("hidden");
          // Add shake animation
          taskInput.classList.add("border-red-500");
          setTimeout(() => {
            taskInput.classList.remove("border-red-500");
          }, 1000);
        }
        // Hide error message
        function hideError() {
          errorMessage.classList.add("hidden");
          taskInput.classList.remove("border-red-500");
        }
        // Update task count
        function updateTaskCount() {
          taskCount.textContent = tasks.length;
        }
        // Event listeners
        addBtn.addEventListener("click", addTask);
        taskInput.addEventListener("keypress", function (e) {
          if (e.key === "Enter") {
            addTask();
          }
        });
        taskInput.addEventListener("input", hideError);
        // Initial load
        loadTasks();
      });