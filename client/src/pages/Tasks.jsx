import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loader";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import TaskTitle from "../components/TaskTitle";
import Table from "../components/task/Table";
import AddTask from "../components/task/AddTask";

const TASK_TYPE = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};

const Tasks = () => {
  const params = useParams();

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState([]);

  const status = params?.status || "";

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleCompleteTask = (id) => {
    setTasks(tasks.map(task => task._id === id ? { ...task, stage: 'completed' } : task));
  };

  return loading ? (
    <div className='py-10'>
      <Loading />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        {!status && (
          <Button
            onClick={() => setOpen(true)}
            label='Create Task'
            icon={<IoMdAdd className='text-lg' />}
            className='flex items-center bg-blue-600 text-white rounded-md py-2 px-4 gap-1'
          />
        )}
      </div>

      {!status && (
        <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
          <TaskTitle label='To Do' className={TASK_TYPE.todo} />
          <TaskTitle
            label='In Progress'
            className={TASK_TYPE["in progress"]}
          />
          <TaskTitle label='Completed' className={TASK_TYPE.completed} />
        </div>
      )}

      <div className='w-full'>
        <Table tasks={tasks} onCompleteTask={handleCompleteTask} />
      </div>

      <AddTask open={open} setOpen={setOpen} onAddTask={handleAddTask} />
    </div>
  );
};

export default Tasks;
