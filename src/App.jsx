import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const theme = createTheme();

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    e.preventDefault();
    const trimmedTodo = newTodo.trim();
    if (trimmedTodo !== '' && trimmedTodo.length <= 200) {
      setTodos([...todos, { id: Date.now(), text: trimmedTodo, completed: false}]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleCompleted = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed} : todo
    ));
  };

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <ThemeProvider theme={theme}>
      <div className="app-container">
      {/* Skip Links for Screen Readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#task-input" className="skip-link">
        Skip to add task
      </a>
      
      <main
        id="main-content"
        className="main-content"
        aria-label="Todo application main content"
      >        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <h1 className="title">
              My Tasks
            </h1>
            <p className="subtitle">
              Stay organized and productive
            </p>
          </div>
          <output 
            className="task-summary" 
            aria-live="polite"
            aria-label={`Task summary: ${todos.length} total tasks, ${completedCount} completed`}
          >
            <span className="sr-only">Task summary: </span>
            <div className="task-count">
              {todos.length}
            </div>
            <div className="completed-count">
              {completedCount} completed
            </div>
          </output>
        </header>

        {/* Add Task Form */}
        <section aria-labelledby="add-task-heading">
          <form onSubmit={handleAddTodo} className="task-form" aria-labelledby="add-task-heading" aria-describedby="form-instructions">
            <h2 id="add-task-heading" className="sr-only">Add New Task</h2>
            
            <div className="sr-only" id="form-instructions">
              Enter a task description in the text field and press the Add button or press Enter to add the task to your list.
            </div>
            
            <fieldset className="form-fieldset">
              <legend className="sr-only">Task Input Form</legend>
              
              <div className="input-group">
                <div className="input-wrapper">
                  <label htmlFor="task-input" className="sr-only">
                    Enter new task description
                  </label>
                  <input
                    id="task-input"
                    type="text"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Add a new task..."
                    maxLength={100}
                    aria-describedby="task-input-help char-count form-instructions"
                    aria-required="true"
                    className="task-input"
                    aria-label="New task input"
                  />
                </div>
                
                <Tooltip title="Click to add a new task" arrow placement="right">
                  <span>
                    <button
                      type="submit"
                      disabled={!newTodo.trim() || newTodo.trim().length === 0}
                      className="add-button"
                      aria-label="Add new task to the list"
                      name="add-task-button"
                      id="add-task-button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="add-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <span>Add</span>
                    </button>
                  </span>
                </Tooltip>
              </div>
            
              <div className="input-help">
                <span id="task-input-help">Enter a task description (max 100 characters)</span>
                <span id="char-count" aria-live="polite">
                  {newTodo.length}/100 characters
                </span>
              </div>
              {newTodo.length > 150 && (
                <div className="char-count-warning">
                  {newTodo.length}/200 characters
                </div>
              )}
            </fieldset>
          </form>
        </section>

        {/* Tasks List */}
        <section aria-labelledby="tasks-heading">
          <h2 id="tasks-heading" className="sr-only">Task List</h2>
          {todos.length > 0 && (
            <div className="sr-only" aria-live="polite">
              You have {todos.length} tasks total, {completedCount} completed, {todos.length - completedCount} remaining.
            </div>
          )}
          <ul 
            className="task-list"
            aria-label={`Task list with ${todos.length} tasks`}
          >
            {todos.map((todo, index) => (
              <li
                key={todo.id}
                className={`task-item ${todo.completed ? 'completed' : ''}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <button
                  onClick={() => handleToggleCompleted(todo.id)}
                  className={`checkbox ${todo.completed ? 'checked' : ''}`}
                  aria-label={`${todo.completed ? "Mark task as incomplete" : "Mark task as complete"}: ${todo.text}`}
                  aria-pressed={todo.completed}
                  title={`${todo.completed ? "Mark as incomplete" : "Mark as complete"}: ${todo.text}`}
                >
                  {todo.completed && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="check-icon" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => handleToggleCompleted(todo.id)}
                  className="task-text"
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleToggleCompleted(todo.id);
                    }
                  }}
                  tabIndex={0}
                  aria-pressed={todo.completed}
                  aria-label={`Task: ${todo.text}. Status: ${todo.completed ? 'Completed' : 'Incomplete'}. Press to toggle completion.`}
                  title={`${todo.text} - ${todo.completed ? 'Completed' : 'Incomplete'}`}
                >
                  <span className="sr-only">{todo.completed ? 'Completed task: ' : 'Incomplete task: '}</span>
                  {todo.text}
                </button>

                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="delete-button"
                  aria-label={`Delete task: ${todo.text}`}
                  title={`Delete task: ${todo.text}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="delete-icon" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm6 0a1 1 0 11-2 0v6a1 1 0 112 0V8z" clipRule="evenodd" />
                  </svg>
                  <span className="sr-only">Delete</span>
                </button>
              </li>
            ))}
          </ul>
        </section>

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">
              <svg xmlns="http://www.w3.org/2000/svg" className="checklist-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="empty-title">No tasks yet</h3>
            <p className="empty-description">Add your first task above to get started!</p>
          </div>
        )}

        {/* Progress Footer */}
        {todos.length > 0 && (
          <div className="progress-footer">
            <div className="progress-info">
              <div className="progress-text">
                {todos.length - completedCount} remaining • {completedCount} completed
              </div>
              <div className="progress-bar-container">
                <progress 
                  className="progress-bar"
                  value={completedCount}
                  max={todos.length}
                  aria-label={`Task completion progress: ${completedCount} of ${todos.length} tasks completed`}
                />
                <div 
                  className="progress-fill"
                  style={{ width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%` }}
                />
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
    </ThemeProvider>
  );
}