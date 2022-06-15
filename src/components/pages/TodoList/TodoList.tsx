interface TodoItemProps {
  title: string;
  completed: boolean;
}

function TodoItem(props: TodoItemProps) {
  const {} = props;

  return <div></div>;
}

function TodoList() {
  return (
    <div className='container p-4 flex flex-col gap-4 items-center'>
      <p className='text-4xl font-bold'>TODO List</p>
      <div className='flex flex-col w-4/5'>
        <input className='px-4 py-2 border'></input>
      </div>
    </div>
  );
}

export default TodoList;
